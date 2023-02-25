import Page from '../Page';
import Slider from '../Slider';
import Card from '../Card';

import './styles.scss';

import articles from '../../data/lastFourArticles';
import advices from '../../data/lastFourAdvices';

function HomePage() {
  return (
    <Page>
      <div className="homepage">
        <section className="advices">
          <h2 className="advices-title">Suivez vos conseils</h2>
          <div className="card-wrapper">
            {advices.map((advice) => (
              <Card
                key={advice.id}
                title={advice.title}
                content={advice.content}
                picture={advice.picture}
                category={advice.category}
              />
            ))}
          </div>
        </section>
        <section className="articles">
          <Slider slides={articles} />
        </section>
      </div>
    </Page>
  );
}

export default HomePage;
