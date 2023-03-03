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

  useEffect(() => {
    dispatch(loadingHomePageData());
  }, []);

  const homePageDataIsLoaded = useSelector(
    (state) => state.common.homePageDataIsLoaded,
  );

  return (
    <Page>
      {/* {homePageDataIsLoaded ? (
        <div className="homepage">
          <section className="advices">
            <h2 className="advices-title">Suivez vos conseils</h2>
            <div className="card-wrapper">
              <div className="card-inner">
                {advices.map((advice) => (
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
            <Slider slides={articles} />
          </section>
        </div>
      ) : (
        <Loader />
      )} */}
    </Page>
  );
}

export default HomePage;
