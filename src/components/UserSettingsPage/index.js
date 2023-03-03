import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Page from '../Page';
import Advices from './Advices';
import Account from './Account';

import { loadingUserAdvices, userLogout } from '../../actions/user';

import './styles.scss';

export default function UserSettingsPage() {
  const dispatch = useDispatch();
  const { nickname } = useParams();

  /* get state informations */
  const user = useSelector((state) => state.user.data);
  const isLoadedAdvices = useSelector((state) => state.user.isLoadedAdvices);
  /* end get state informations */

  /** check if the nickname is the same as the user's nickname
   * if not :
   *   remove all user's data from the state
   *   redirect to the home page
   */
  if (nickname !== user.nickname) {
    dispatch(userLogout());
    return <Navigate to="/" replace />;
  }

  /* Loading all user's advices */
  const advices = useSelector((state) => state.user.advices);

  useEffect(() => {
    dispatch(loadingUserAdvices());
  }, []);

  return (
    <Page>
      {isLoadedAdvices && (
        <div className="settings">
          <Account user={user} />
          <Advices items={advices} />
        </div>
      )}
    </Page>
  );
}
