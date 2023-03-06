/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */

import Page from '../Page';
import Card from '../Card';
import './styles.scss';
import advices from '../../data/advices';
import navBarAvatar from '../../assets/avatar/avatar-2.png';

function AdvicePage() {
  return (
    <Page>
      <div className="advice-page">
        <div className="advice">
          <div className="advice-elements">
            <div className="advice-elements-top">
              <div className="advice-container">
                <h2 className="advice-title">Titre du conseil</h2>
                <div className="advice-user">
                  <img src={navBarAvatar} alt="avatar" className="user-avatar" />
                  <div className="advice-author">Jean Guy,</div>
                  <time className="advice-date" dateTime="2023-03-13">
                    13 mars 2023
                  </time>
                </div>
                <p className="advice-elements-text">
                  Aliquid ut qui consequatur nobis perferendis. Vero eaque et
                  ducimus ut incidunt quo consequatur. Eos laboriosam laborum quo
                  aliquid qui non. Dignissimos atque quidem nemo occaecati dolorem
                  est dolores. Vitae et similique nulla voluptate itaque sit
                  excepturi.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="advices">
          <h2 className="advices-sentence">Suivez vos conseils</h2>
          <div className="advices-list">
            {advices.map((advice) => (
              <div key={advice.id} className="advice-card">
                <Card
                  title={advice.title}
                  category={advice.category}
                  content={advice.content}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Page>
  );
}

export default AdvicePage;
