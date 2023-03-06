import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import { toggleBurger } from '../../../actions/common';

import burger from './burger-icon.svg';
import './styles.scss';

export default function Burger({ avatar }) {
  const dispatch = useDispatch();

  const icon = avatar || burger;
  const className = avatar ? 'navbar-burger-user-icon' : 'navbar-burger-icon';

  return (
    <button
      type="button"
      className="navbar-burger"
      onClick={() => dispatch(toggleBurger())}
    >
      <img src={icon} alt="toggle icon" className={className} />
    </button>
  );
}

Burger.propTypes = {
  avatar: PropTypes.string,
};

Burger.defaultProps = {
  avatar: null,
};
