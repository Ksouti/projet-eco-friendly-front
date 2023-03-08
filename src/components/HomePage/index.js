import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { loadingHomePageData } from '../../actions/common';

import Page from '../Page';
import Slider from '../Slider';
import Card from '../Card';
import Loader from '../Loader';
import Button from '../Button';

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
                  <Link to={`/advices/${advice.slug}`} key={advice.id}>
                    <Card
                      key={advice.id}
                      title={advice.title}
                      content={advice.content}
                      picture={advice.picture}
                      category={advice.category}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section className="articles">
            <h2 className="articles-title">Nos articles à la une</h2>
            <Slider slides={homePageData.articles} />
            {homePageData.articles.map((article) => (
              <div className="articles-list-horizontal">
                <h2 className="category-title">{article.category.name}</h2>
                <div className="card-wrapper">
                  <div className="card-inner">
                    <Link to={`/articles/${article.slug}`} key={article.id}>
                      <Card
                        key={article.id}
                        title={article.title}
                        content={article.content}
                        picture={article.picture}
                        category={article.category.name}
                        format="horizontal"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            {homePageData.articles.map((article) => (
              <div className="articles-list-vertical">
                <h2 className="category-title">{article.category.name}</h2>
                <div className="card-wrapper">
                  <div className="card-inner">
                    <Link to={`/articles/${article.slug}`} key={article.id}>
                      <Card
                        key={article.id}
                        title={article.title}
                        content={article.content}
                        picture={article.picture}
                        category={article.category.name}
                      />
                    </Link>
                  </div>
                </div>
                <Button type="button" color="primary" name="password">
                  Plus d'articles {article.category.name}
                </Button>
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
