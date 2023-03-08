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
            {homePageData.articles.map((article) => (
              <div className="articles-title">
                <h2 className="advices-title">{article.category.name}</h2>
                <div className="card-wrapper">
                  <div className="card-inner">
                    <Card
                      key={article.id}
                      title={article.title}
                      content={article.content}
                      picture={article.picture}
                      category={article.category.name}
                      format="horizontal"
                    />
                  </div>
                </div>
              </div>
            ))}
          </section>

          <section className="catch-line">
            <h1 className="sentence">
              Retrouvez toutes les infos utiles pour un quotidien plus
              écologique
            </h1>
          </section>
        </div>
      ) : (
        <Loader />
      )}
    </Page>
  );
}

export default HomePage;
