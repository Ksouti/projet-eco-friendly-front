/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Page from '../Page';
import Card from '../Card';
// import AdvicesCardsList from '../AdvicesCardsList';

import './styles.scss';

// import advices from '../../data/advices';
import articles from '../../data/articles';

// import Button from '../Button';

function ArticlePage() {
  const { slug } = useParams();

  // Find the article in all articles
  const article = articles.find((item) => item.slug === slug);

  // Find last four advices
  const advices = useSelector((state) => state.advices.lastFourAdvices);

  return (
    <Page>
      <div className="article-page">
        <div className="article">
          <div className="article-elements">
            <img
              src="https://picsum.photos/id/144/300/450.jpg"
              alt="titre"
              className="article-elements-img"
            />
            <div className="article-elements-top">
              <h2 className="article-title">{article.title}</h2>
              <span className="article-author">{article.author.nickname}</span>
              <time className="article-date" dateTime="2023-03-13">
                {article.created_at}
              </time>
            </div>
            <p className="article-elements-text">{article.content}</p>
          </div>
          {/* <Button
            type="button"
            className="article-button-return"
            // onClick="" aller à la page catégorie précédente
          /> */}
        </div>

        {/* <AdvicesCardsList /> */}
        {/* without composant AdvicesCardsList :  */}
        <div className="advices">
          <h2 className="advices-sentence">Suivez vos conseils</h2>
          <div className="advices-list">
            {advices.map((advice) => (
              <Link
                to={`/conseils/${advice.slug}`}
                key={advice.id}
                className="advice-card"
              >
                <Card
                  title={advice.title}
                  category={advice.category}
                  content={advice.content}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Page>
  );
}

export default ArticlePage;
