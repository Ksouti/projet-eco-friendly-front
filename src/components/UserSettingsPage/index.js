import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getUserAdvices } from '../../actions/advices';

import Page from '../Page';
import UserAccount from './UserAccount/index';
import UserAdvices from './UserAdvices/index';
import Loader from '../Loader';

import './styles.scss';

export default function UserSettingsPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /* Check if user is logged */
  const userIslogged = useSelector((state) => state.user.isLogged);
  useEffect(() => {
    if (!userIslogged) {
      navigate('/', { replace: true });
    }
  }, [userIslogged]);

  const isLoadedAdvices = useSelector((state) => state.advices.isLoadedAdvices);
  /* Load user advices from API */
  useEffect(() => {
    if (!isLoadedAdvices) {
      dispatch(getUserAdvices());
    }
  }, [isLoadedAdvices]);

  return (
    <Page>
      {isLoadedAdvices ? (
        <div className="settings">
          <UserAccount />
          <UserAdvices />
        </div>
      ) : (
        <Loader />
      )}
    </Page>
  );
}
