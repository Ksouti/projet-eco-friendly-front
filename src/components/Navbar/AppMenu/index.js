import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';

import './styles.scss';

export default function AppMenu({
  categories,
  handleClickModal,
  handleClickUserMenu,
  userIsLoaded,
  user,
}) {
  const className = user ? 'menu-item dropdown' : 'menu-item';

  return (
    <ul className="menu-items">
      <li className="menu-item">
        <NavLink to="/">Accueil</NavLink>
      </li>
      {categories.map((category) => (
        <li key={category.id} className="menu-item">
          <NavLink to={`/categories/${category.slug}`}>{category.name}</NavLink>
        </li>
      ))}
      {userIsLoaded && user ? (
        <li className={className}>
          <button
            type="button"
            className="dropdown-toggle"
            onClick={handleClickUserMenu}
          >
            Mon Compte
          </button>
        </li>
      ) : (
        <li className="menu-item">
          <button type="button" onClick={handleClickModal}>
            Connexion / Inscription
          </button>
        </li>
      )}
    </ul>
  );
}

AppMenu.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handleClickModal: PropTypes.func.isRequired,
  handleClickUserMenu: PropTypes.func.isRequired,
  userIsLoaded: PropTypes.bool,
  user: PropTypes.object,
};

AppMenu.defaultProps = {
  userIsLoaded: false,
  user: null,
};
