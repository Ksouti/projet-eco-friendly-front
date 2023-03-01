/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { findItemsByCategory } from '../../utils';
import { loadingLastArticleData } from '../../actions/articles';

import Page from '../Page';
import Card from '../Card';
import Loader from '../Loader';

import './styles.scss';

function CategoryPage() {
  const { name } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadingLastArticleData());
  }, []);

  const articleIsLoaded = useSelector(
    (state) => state.articles.lastArticleDataIsLoaded,
  );

  const advices = useSelector((state) =>
    findItemsByCategory(state.advices.data, name),
  );

  const articles = useSelector((state) =>
    findItemsByCategory(state.articles.data, name),
  );

  const article = useSelector((state) => state.articles.lastArticleData);

  return (
    <Page>
      {articleIsLoaded ? (
        <div className="category-page">
          <h1 className="category-sentence">La mobilité verte</h1>
          <div className="category-elements">
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
            <div className="articles">
              <div className="articles-top">
                <Card
                  picture={article.picture}
                  title={article.title}
                  category={article.category}
                  content={article.content}
                  format="horizontal"
                />
              </div>
              <div className="articles-list">
                {articles.map((article) => (
                  <div key={article.id} className="article-card">
                    <Card
                      picture={article.picture}
                      title={article.title}
                      category={article.category}
                      content={article.content}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </Page>
  );
}

export default CategoryPage;
