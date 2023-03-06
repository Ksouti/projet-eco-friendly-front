/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

import { findItemsByCategory } from '../../utils';
import { loadingLastArticleData } from '../../actions/articles';

import Page from '../Page';
import Card from '../Card';
import Loader from '../Loader';

import config from '../../config';

import './styles.scss';

function CategoryPage() {
  const dispatch = useDispatch();
  const { name } = useParams();
  const [categories, setCategories] = useState(
    useSelector((state) => state.common.categories),
  );

  /* Find the category in the categories array */
  const category = categories.find((item) => item.slug === name);

  /* If there is no categories in the state, we set the default categories */
  if (categories.length === 0) {
    setCategories(config.defaultNavLinks);
  }

  useEffect(() => {
    dispatch(loadingLastArticleData(category.id));
  }, [category]);

  const articleIsLoaded = useSelector(
    (state) => state.articles.lastArticleDataIsLoaded,
  );

  const advices = useSelector((state) =>
    findItemsByCategory(state.advices.data, name),
  );

  const articles = useSelector((state) =>
    findItemsByCategory(state.articles.data, name),
  );

  const lastArticleArray = useSelector(
    (state) => state.articles.lastArticleData,
  );

  return (
    <Page>
      {advices && articles && articleIsLoaded ? (
        <div className="category-page">
          <h1 className="category-sentence">{category.tagline}</h1>
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
                {lastArticleArray.map((lastArticle) => (
                  <Link
                    to={`/articles/${lastArticle.slug}`}
                    key={lastArticle.id}
                  >
                    <Card
                      key={lastArticle.id}
                      picture={lastArticle.picture}
                      title={lastArticle.title}
                      category={lastArticle.category}
                      content={lastArticle.content}
                      format="horizontal"
                    />
                  </Link>
                ))}
              </div>
              <div className="articles-list">
                {articles.map((article) => (
                  <Link
                    to={`/articles/${article.slug}`}
                    key={article.id}
                    className="article-card"
                  >
                    <Card
                      picture={article.picture}
                      title={article.title}
                      category={article.category}
                      content={article.content}
                    />
                  </Link>
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
