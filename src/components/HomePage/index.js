import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadingHomePageData } from '../../actions/common';
import { loadingLastArticleData } from '../../actions/articles';

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
    dispatch(loadingLastArticleData());
  }, []);

  /* get state informations */
  const homePageDataIsLoaded = useSelector(
    (state) => state.common.homePageDataIsLoaded,
  );
  const homePageData = useSelector((state) => state.common.homePageData);
  /* end get state informations */

  // on récupere les categories dans le state
  // const categories = useSelector((state) => state.common.categories);

  /* get state informations */
  const lastArticleDataIsLoaded = useSelector(
    (state) => state.articles.lastArticleDataIsLoaded,
  );
  const lastArticleData = useSelector((state) => state.common.lastArticleData);
  /* end get state informations */
  console.log(lastArticleData);

  return (
    <Page>
      {homePageDataIsLoaded && lastArticleDataIsLoaded ? (
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

          {lastArticleData.map((article) => (
            <section className="articles-categories">
              <h1 className="categories-sentence">{article.category}</h1>
              <Card
                key={article.id}
                title={article.title}
                content={article.content}
                picture={article.picture}
                category={article.category}
                format="horizontal"
              />
            </section>
          ))}

          <section className="articles">
            <Slider slides={homePageData.articles} />
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
