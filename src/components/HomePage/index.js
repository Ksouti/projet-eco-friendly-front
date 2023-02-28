import { useSelector } from 'react-redux';

import Page from '../Page';
import Slider from '../Slider';
import Card from '../Card';

import './styles.scss';

function HomePage() {
  const articles = useSelector((state) => state.articles.lastFourArticles);
  const advices = useSelector((state) => state.advices.lastFourAdvices);

  return (
    <Page>
      <div className="homepage">
        <section className="advices">
          <h2 className="advices-title">Suivez vos conseils</h2>
          <div className="card-wrapper">
            <div className="card-inner">
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
