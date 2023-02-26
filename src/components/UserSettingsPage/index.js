import Page from '../Page';
import Advices from './Advices';
import Account from './Account';

import './styles.scss';

import user from '../../data/single-user';

export default function UserSettingsPage() {
  return (
    <Page>
      <div className="settings">
        <Account user={user} />
        <Advices items={user.advices} />
      </div>
    </Page>
  );
}
