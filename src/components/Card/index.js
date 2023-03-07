/* eslint-disable object-curly-newline */
import PropTypes from 'prop-types';

import './styles.scss';

/**
 * Card component
 * with the option to have the card in a vertical or horizontal version
 */
function Card({ format, picture, title, category, content }) {
  return (
    <div className="card" data-format={format}>
      {picture && (
        <div className="image">
          <img src={picture} alt={title} className="image-img" />
        </div>
      )}
      <div className="informations">
        <h3 className="title">{title}</h3>
        {category && <span className="category">{category.name}</span>}
        <p className="summary">{content}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  format: PropTypes.string,
  picture: PropTypes.string,
  title: PropTypes.string.isRequired,
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  content: PropTypes.string.isRequired,
};
Card.defaultProps = {
  format: '',
  picture: '',
};

export default Card;
