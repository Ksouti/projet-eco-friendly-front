/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import { useParams } from 'react-router-dom';
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
  const { name } = useParams();
  const [categories, setCategories] = useState(
    useSelector((state) => state.common.categories),
  );
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

  const lastArticle = useSelector((state) => state.articles.lastArticleData);

  /* If there is no categories in the state, we set the default categories */
  if (categories.length === 0) {
    setCategories(config.defaultNavLinks);
  }

  /* Find the category in the categories array */
  const category = categories.find((item) => item.slug === name);

  return (
    <Page>
      {articleIsLoaded ? (
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
                <Card
                  picture={lastArticle.picture}
                  title={lastArticle.title}
                  category={lastArticle.category}
                  content={lastArticle.content}
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
