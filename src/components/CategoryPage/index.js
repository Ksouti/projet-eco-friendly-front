import articles from 'src/data/articles.js';
import Page from '../Page';
import Card from '../Card';

import './styles.scss';

function CategoryPage() {
  return (
    <Page>
      <div className="category-page">
        <h1 className="category-sentence">La mobilité verte</h1>
        <div className="category-elements">
          <div className="articles">
            <div className="articles-top">
              <Card format="horizontal" />
            </div>
            <div className="articles-list">
              {articles.map((article) => (
                <Card
                  key={article.id}
                  picture={article.picture}
                  title={article.title}
                  category={article.category}
                  content={article.content}
                />
              ))}
            </div>
          </div>
          <div className="advices">
            <p className="advices-sentence">Suivez vos conseils :</p>
            <div className="advices-list">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default CategoryPage;
