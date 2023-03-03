/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
// import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Page from '../Page';
import AdvicesCardsList from '../AdvicesCardsList';
import Loader from '../Loader';
import { findItem } from '../../utils';

// import Button from '../Button';

// import articles from '../../data/articles';

import './styles.scss';

function ArticlePage() {
  // Je récupere mon slug
  const { slug } = useParams();

  // je recupere tous mes articles dans le state
  // const articles = useSelector((state) => state.articles.data);
  // console.log(articles);

  // avec find, je cherche dans ma list d'articles, et je récupere l'id
  // de celui qui correspond à mon slug
  // const article = articles.find((item) => item.id === slug);
  const article = useSelector((state) => findItem(state.advices.data, slug));
  console.log(article);

  // const articleIsLoaded = useSelector(
  //   (state) => state.articles.selectedArticleDataIsLoaded,
  // );

  return (
    <Page>
      <div className="article-page">
        {article ? (
          <div className="article">
            <div className="article-elements">
              <img
                src="https://picsum.photos/id/144/300/450.jpg"
                alt="titre"
                className="article-elements-img"
              />
              <div className="article-elements-top">
                <h2 className="article-title">{article.title}</h2>
                <span className="article-author">
                  {article.author.nickname}
                </span>
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
        ) : (
          <Loader />
        )}

        <AdvicesCardsList />
      </div>
    </Page>
  );
}

export default ArticlePage;
