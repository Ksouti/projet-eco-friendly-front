/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { findItem } from '../../utils';

import Page from '../Page';
import AdvicesCardsList from '../AdvicesCardsList';
import Loader from '../Loader';

import './styles.scss';

function AdvicePage() {
  const { slug } = useParams();
  const advice = useSelector((state) => findItem(state.advices.data, slug));
  const advices = useSelector((state) => state.advices.data);
  return (
    <Page>
      {advices && advice ? (
        <div className="advice-page">
          <div className="advice">
            <div className="advice-elements">
              <div className="advice-elements-top">
                <div className="advice-container">
                  <h2 className="advice-title">{advice.title}</h2>
                  <div className="advice-user">
                    <img src={advice.contributor.avatar} alt="avatar" className="user-avatar" />
                    <div className="advice-author">{advice.contributor.nickname},</div>
                    <time className="advice-date" dateTime="2023-03-13">{advice.created_at}</time>
                  </div>
                  <div
                    dangerouslySetInnerHTML={{ __html: advice.content }}
                    className="article-elements-text inner-html"
                  />
                </div>
              </div>
            </div>
          </div>
          <AdvicesCardsList advices={advices} />
        </div>
      ) : (
        <Loader />
      )}
    </Page>
  );
}

export default AdvicePage;
