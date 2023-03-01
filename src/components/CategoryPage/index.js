import { Navigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { findItemsByCategory } from '../../utils';
import { fetchLastArticleFromApi } from '../../actions/articles';

import Page from '../Page';
import Card from '../Card';

import './styles.scss';

// import article from 'src/data/lastArticle';
// import articles from 'src/data/articles';
// import advices from 'src/data/advices';

function CategoryPage() {
  const { name } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLastArticleFromApi());
  });

  const advices = useSelector((state) =>
    findItemsByCategory(state.advices.data, name),
  );

  const articles = useSelector((state) =>
    findItemsByCategory(state.articles.data, name),
  );

  console.log(articles);

  return (
    <Page>
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
    </Page>
  );
}

export default CategoryPage;
