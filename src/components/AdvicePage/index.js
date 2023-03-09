/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { findItem } from '../../utils';

import Page from '../Page';
import AdvicesCardsList from '../AdvicesCardsList';
import Loader from '../Loader';

import './styles.scss';

function AdvicePage() {
  const dispatch = useDispatch();
  const { slug } = useParams();

  /*
  useEffect(() => {dispatch;
  */
  const advices = useSelector((state) => findItem(state.advices.data, slug));
  console.log(advices);
  return (
    <Page>
      {advices ? (
        <div className="advice-page">
          <div className="advice">
            <div className="advice-elements">
              <div className="advice-elements-top">
                <div className="advice-container">
                  <h2 className="advice-title">{advices.title}</h2>
                  <div className="advice-user">
                    <img src={advices.contributor.avatar} alt="avatar" className="user-avatar" />
                    <div className="advice-author">{advices.contributor.nickname},</div>
                    <time className="advice-date" dateTime="2023-03-13">{advices.created_at}</time>
                  </div>
                  <p className="advice-elements-text">{advices.content}</p>
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
