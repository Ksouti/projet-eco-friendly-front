import PropTypes from 'prop-types';

import './styles.scss';

export default function Button({
  type = 'button',
  name,
  color,
  onclick,
  children,
}) {
  return (
    <button
      type={type}
      name={name}
      className={`btn btn-${color}`}
      onClick={onclick}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  color: 'default',
  name: '',
};

Button.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  name: PropTypes.string,
};
