import PropTypes from 'prop-types';
import Page from '../Page';


import './styles.scss';
// import imgArticle from '../../assets/imgEco.jpg';


function Card({ format, image }) {
  return (
    <Page>
      <div className="card" data-format={format}>
      {/* condition si il y a une image ou pas */}
        { image &&
          (
          <div className="image">
            <img src="https://picsum.photos/id/425/640/800" alt="image de l'article - titreArticle" className="image-article" />
          </div>
          )}
        <div className="informations">
          <h3 className="title-article">Le titre de l'article</h3>
          <p className="summary-article">Cheese on toast airedale the big cheese. Danish fontina cheesy grin airedale danish fontina taleggio the big cheese macaroni cheese port-salut. Danish fontina cheesy grin airedale...</p>
        </div>
      </div>
    </Page>

  );
}

Card.propTypes = {
  format: PropTypes.string,
  image: PropTypes.bool,
};
Card.defaultProps = {
  format: '',
  image: true,
};

export default Card;
