import PropTypes from 'prop-types';

import './styles.scss';

export default function Button({ type = 'button', onclick, color, children }) {
  return (
    <button type={type} onClick={onclick} className={`btn btn-${color}`}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
};

Button.propTypes = {
  type: PropTypes.string,
};
