import Page from '../Page';
import Card from '../Card';

import './styles.scss';

import article from 'src/data/lastArticle';
import articles from 'src/data/articles';
import advices from 'src/data/advices';

function CategoryPage() {
  return (
    <Page>
      <div className="category-page">
        <h1 className="category-sentence">La mobilité verte</h1>
        <div className="category-elements">
          <div className="advices">
            <h2 className="advices-sentence">Suivez vos conseils</h2>
            <div className="advices-list">
              {advices.map((advice) => (
                <div className="advice-card">
                  <Card
                    key={advice.id}
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
                <div className="article-card">
                  <Card
                    key={article.id}
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
