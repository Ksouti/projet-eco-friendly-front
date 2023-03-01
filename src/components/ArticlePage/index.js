/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
// import { useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// import { findItem, findItemsByCategory } from '../../utils';

import Page from '../Page';
import Card from '../Card';

import './styles.scss';

import advices from '../../data/advices';
import Button from '../Button';

function ArticlePage() {
  // const { slug } = useParams();

  // const article = useSelector((state) => findItem(state.articles.data, slug));

  // const advices = useSelector((state) =>
  //   findItemsByCategory(state.advices.data, name),
  // );

  return (
    <Page>
      <div className="article-page">
        <div className="article">
          <div className="article-elements">
            <img
              src="https://picsum.photos/id/183/300/450.jpg"
              alt="titre"
              className="article-elements-img"
            />
            <div className="article-elements-top">
              <h2 className="article-title">Titre de l'article</h2>
              <span className="article-author">Jean Guy</span>
              <time className="article-date" dateTime="2023-03-13">
                13 mars 2023
              </time>
            </div>
            <p className="article-elements-text">
              Aliquid ut qui consequatur nobis perferendis. Vero eaque et
              ducimus ut incidunt quo consequatur. Eos laboriosam laborum quo
              aliquid qui non. Dignissimos atque quidem nemo occaecati dolorem
              est dolores. Vitae et similique nulla voluptate itaque sit
              excepturi.
            </p>
          </div>
          <Button />
        </div>

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
      </div>
    </Page>
  );
}

export default ArticlePage;
