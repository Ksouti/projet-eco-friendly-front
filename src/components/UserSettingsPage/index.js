import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Page from '../Page';
import Advices from './Advices';
import Account from './Account';

import './styles.scss';

// import user from '../../data/single-user';

export default function UserSettingsPage() {
  const isLogged = useSelector((state) => state.user.isLogged);
  const user = useSelector((state) => state.user.data);

  // If the user is not logged, redirect to the home page
  if (!isLogged) {
    return <Navigate to="/" replace />;
  }

  return (
    <Page>
      <div className="settings">
        <Account user={user} />
        <Advices items={user.advices} />
      </div>
    </Page>
  );
}
