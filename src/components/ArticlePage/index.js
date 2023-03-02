/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import { useParams } from 'react-router-dom';

import Page from '../Page';
// import Button from '../Button';
import AdvicesCardsList from '../AdvicesCardsList';

import articles from '../../data/articles';

import './styles.scss';

function ArticlePage() {
  const { slug } = useParams();

  // Find the article in all articles
  const article = articles.find((item) => item.slug === slug);

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

        <AdvicesCardsList />
      </div>
    </Page>
  );
}

export default ArticlePage;
