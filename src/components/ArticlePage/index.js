import { Navigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { findItem } from '../../utils';

import Page from '../Page';

import './styles.scss';

function ArticlePage() {
  const { slug } = useParams();

  const article = useSelector((state) => findItem(state.articles.data, slug));
  console.log(article);

  return (
    <Page>
      <div className="article">
        <p>Page d'un article</p>
      </div>
    </Page>
  );
}

export default ArticlePage;
