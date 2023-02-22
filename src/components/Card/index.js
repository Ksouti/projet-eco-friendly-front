import Page from '../Page';
import './styles.scss';

function Card() {
  return (
    <Page>
      <div className="card">
        <div className="image">
          <img src="" alt="imageArticle" className="imageArticle" />
        </div>
        <div className="informations">
          <title>Le titre de l'article</title>
          <p>Le résumé de l'article</p>
        </div>
      </div>
    </Page>

  );
}

export default Card;
