import Page from '../Page';
import Card from '../Card';

import './styles.scss';

function CategoryPage() {
  return (
    <Page>
      <div className="category-page">
        <h2 className="category-sentence">La mobilité verte</h2>
        <div className="category-element">
          <div className="articles">
            <div className="articles-top">
              <Card format="horizontal" />
            </div>
            <div className="articles-list">
              <Card />
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
