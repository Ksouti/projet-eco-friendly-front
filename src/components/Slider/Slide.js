import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

export default function Slide({ title, content, slug, picture, tag }) {
  return (
    <div className="slide">
      <div className="slide-inner">
        <div className="slide-image">
          <img src={picture} alt={`Image de ${{ title }}`} />
        </div>
        <div className="slide-body">
          <h5 className="slide-title">{title}</h5>
          <span className="slide-tag">{tag}</span>
          <p className="slide-text">{content}</p>
          <Link to={`/${slug}`} className="slide-link">
            En savoir plus
          </Link>
        </div>
      </div>
    </div>
  );
}

Slide.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};
