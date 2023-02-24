import Page from '../Page';
import Table from './Table';
import Settings from './Settings';

import './styles.scss';

import user from '../../data/single-user';

export default function UserSettingsPage() {
  return (
    <Page>
      <div className="settings">
        <section className="section">
          <Settings user={user} />
        </section>
        <section className="section">
          <Table items={user.advices} />
        </section>
      </div>
    </Page>
  );
}
