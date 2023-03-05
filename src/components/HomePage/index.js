import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadingHomePageData } from '../../actions/common';

import Page from '../Page';
import Slider from '../Slider';
import Card from '../Card';
import Loader from '../Loader';

import './styles.scss';

function HomePage() {
  const dispatch = useDispatch();

  /* dispatch actions to get data */
  useEffect(() => {
    dispatch(loadingHomePageData());
  }, []);

  /* get state informations */
  const homePageDataIsLoaded = useSelector(
    (state) => state.common.homePageDataIsLoaded,
  );
  const homePageData = useSelector((state) => state.common.homePageData);
  /* end get state informations */

  return (
    <Page>
      {homePageDataIsLoaded ? (
        <div className="homepage">
          <section className="advices">
            <h2 className="advices-title">Suivez vos conseils</h2>
            <div className="card-wrapper">
              <div className="card-inner">
                {homePageData.advices.map((advice) => (
                  <Card
                    key={advice.id}
                    title={advice.title}
                    content={advice.content}
                    picture={advice.picture}
                    category={advice.category}
                  />
                ))}
              </div>
            </div>
          </section>
          <section className="articles">
            <Slider slides={homePageData.articles} />
          </section>
        </div>
      ) : (
        <Loader />
      )}
    </Page>
  );
}

export default HomePage;
