import PropTypes from 'prop-types';

import burger from './burger-icon.svg';
import './styles.scss';

export default function Burger({ avatar, handleClickBurger }) {
  const icon = avatar || burger;
  const className = avatar ? 'navbar-burger-user-icon' : 'navbar-burger-icon';

  return (
    <button type="button" className="navbar-burger" onClick={handleClickBurger}>
      <img src={icon} alt="toggle icon" className={className} />
    </button>
  );
}

Burger.propTypes = {
  avatar: PropTypes.string,
  handleClickBurger: PropTypes.func.isRequired,
};

Burger.defaultProps = {
  avatar: null,
};
