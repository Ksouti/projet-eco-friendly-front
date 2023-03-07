import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { userLogout } from '../../actions/user';

import Page from '../Page';
import UserAccount from './UserAccount/index';
import UserAdvices from './UserAdvices/index';

import './styles.scss';

export default function UserSettingsPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { nickname } = useParams();

  /* Check if user is logged */
  const userIslogged = useSelector((state) => state.user.isLogged);
  useEffect(() => {
    if (!userIslogged) {
      navigate('/', { replace: true });
    }
  }, [userIslogged]);
  /* End check if user is logged */

  /* Check if slug nickname is the same that the user nickname */
  const userNickname = useSelector((state) => state.user.data.nickname);
  useEffect(() => {
    if (nickname !== userNickname) {
      dispatch(userLogout());
      navigate('/', { replace: true });
    }
  }, [userNickname]);

  return (
    <Page>
      <div className="settings">
        <UserAccount />
        <UserAdvices />
      </div>
    </Page>
  );
}
