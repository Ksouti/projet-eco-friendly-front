import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Page from '../Page';
import Advices from './Advices';
import Account from './Account';

import { loadingUserAdvices } from '../../actions/user';

import './styles.scss';

export default function UserSettingsPage() {
  const dispatch = useDispatch();

  /* get state informations */
  const user = useSelector((state) => state.user.data);
  const isLoadedAdvices = useSelector((state) => state.user.isLoadedAdvices);
  /* end get state informations */

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
