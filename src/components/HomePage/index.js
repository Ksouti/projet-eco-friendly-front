import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadingHomePageData } from '../../actions/common';
import { loadingArticlesData } from '../../actions/articles';

// import { findItemsByCategory } from '../../utils';

import Page from '../Page';
import Slider from '../Slider';
import Card from '../Card';
// import AdvicesCardsList from '../AdvicesCardsList';
import Loader from '../Loader';

import './styles.scss';

function HomePage() {
  const dispatch = useDispatch();

  /* dispatch actions to get data */
  useEffect(() => {
    dispatch(loadingHomePageData());
    dispatch(loadingArticlesData());
  }, []);

  /* get state informations */
  const homePageDataIsLoaded = useSelector(
    (state) => state.common.homePageDataIsLoaded,
  );
  const homePageData = useSelector((state) => state.common.homePageData);
  /* end get state informations */

  // on récupere les categories dans le state
  // const articles = useSelector((state = state.articles.data));

  /* get state informations */
  const articlesIsLoaded = useSelector((state) => state.articles.IsLoaded);
  const articles = useSelector((state) => state.articles.data);
  /* end get state informations */

  return (
    <Page>
      {homePageDataIsLoaded && articlesIsLoaded ? (
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
          <section className="articles-categories">
            {articles.map((article) => (
              <Card
                key={article.id}
                title={article.title}
                content={article.content}
                picture={article.picture}
                category={article.category}
                format="horizontal"
              />
            ))}
          </section>
        </div>
      ) : (
        <Loader />
      )}
    </Page>
  );
}

export default HomePage;
