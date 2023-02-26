import Page from '../Page';
import Advices from './Advices';
import Account from './Account';

import './styles.scss';

import user from '../../data/single-user';

export default function UserSettingsPage() {
  return (
    <Page>
      <div className="settings">
        <section className="account-controller">
          <Account user={user} />
        </section>
        <section className="advices-controller">
          <Advices items={user.advices} />
        </section>
      </div>
    </Page>
  );
}
