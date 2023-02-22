import Page from '../Page';

import './styles.scss';
import imgArticle1 from '../../assets/imgEco.jpg';


function Card() {
  return (
    <Page>
      <div className="card">
        <div className="image">
          <img src={imgArticle1} alt="imageArticle1" className="imageArticle1" />
        </div>
        <div className="informations">
          <h3 className="titleArticle">Le titre de l'article</h3>
          <p className="summaryArticle">Cheese on toast airedale the big cheese. Danish fontina cheesy grin airedale danish fontina taleggio the big cheese macaroni cheese port-salut. Danish fontina cheesy grin airedale...</p>
        </div>
      </div>
    </Page>

  );
}

export default Card;
