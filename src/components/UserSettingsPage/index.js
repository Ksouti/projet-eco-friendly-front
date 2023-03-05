import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getUserAdvices, userDeleteAdvice } from '../../actions/advices';

import Page from '../Page';
import Advices from './Advices';
import Account from './Account';

import { userLogout } from '../../actions/user';

import './styles.scss';

export default function UserSettingsPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { nickname } = useParams();

  /* get state informations */
  const user = useSelector((state) => state.user.data);
  const isLoadedAdvices = useSelector((state) => state.advices.isLoadedAdvices);
  const advices = useSelector((state) => state.advices.userAdvices);
  /* end get state informations */

  /* check if the nickname is the same as the user's nickname */
  if (nickname !== user.nickname) {
    dispatch(userLogout());
    navigate('/', { replace: true });
  }

  useEffect(() => {
    dispatch(getUserAdvices());
  }, []);

  const onDelete = (id) => {
    dispatch(userDeleteAdvice(id));
  };

  return (
    <Page>
      {isLoaded ? (
        <div className="settings">
          <Account user={user} />
          <Advices items={advices} onDelete={onDelete} />
        </div>
      ) : (
        <Loader />
      )}
    </Page>
  );
}
