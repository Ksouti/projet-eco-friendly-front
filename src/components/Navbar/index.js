/* eslint-disable object-curly-newline */
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import burger from './assets/toggler-icon.svg';

import './styles.scss';

function Navbar() {
  const categories = useSelector((state) => state.common.categories);
  const user = useSelector((state) => state.user.data);
  const { nickname, isVerified, isActive, roles, avatar } = user;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/">
            <img
              src="http://vps-79770841.vps.ovh.net/assets/img/logos/logo-eco-friendly-V3-maxcropcenterh.png"
              alt="logo"
            />
            <span>Eco-friendly</span>
          </Link>
        </div>
        {user ? <Toggler icon={burger} /> : <Toggler icon={avatar} />}
        {categories && (
          // on click className "show"
          <div className="menu menu-collapse">
            <Menu
              categories={categories}
              nickname={nickname}
              isVerified={isVerified}
              isActive={isActive}
              roles={roles}
            />
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

function Toggler({ icon }) {
  return (
    <button type="button" className="navbar-toggler">
      <img src={icon} alt="toggle icon" className="navbar-toggler-icon" />
    </button>
  );
}

Toggler.propTypes = {
  icon: PropTypes.string.isRequired,
};

function Menu({ categories, nickname, isVerified, isActive, roles }) {
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
      {!nickname && !isVerified && !isActive && (
        <li className="menu-item ">
          {/* onclick toggle modal */}
          <button type="button">Connexion/inscription</button>
        </li>
      )}
      {nickname && isVerified && isActive && (
        <>
          <li className="menu-item dropdown">
            <button type="button" className="dropdown-toggle">
              Mon Compte
            </button>
          </li>
          {/* on click props "show" */}
          <UserMenu nickname={nickname} roles={roles} />
        </>
      )}
    </ul>
  );
}

Menu.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }),
  ).isRequired,
  nickname: PropTypes.string,
  isVerified: PropTypes.bool,
  isActive: PropTypes.bool,
  roles: PropTypes.arrayOf(PropTypes.string),
};

Menu.defaultProps = {
  nickname: '',
  isVerified: false,
  isActive: false,
  roles: [],
};

function UserMenu({ nickname, roles }) {
  const isAdmin = roles.includes('ROLE_ADMIN');
  const isAuthor = roles.includes('ROLE_AUTHOR');

  return (
    // on click className "show"
    <ul className="dropdown-menu">
      <li className="menu-item">
        <Link to={`/utilisateurs/${nickname}`}>Gérer mon compte</Link>
      </li>
      <li className="menu-item">
        <Link to="/">Ajouter un conseil</Link>
      </li>
      {(isAdmin || isAuthor) && (
        <li className="menu-item">
          <a to="/">Accès réservé</a>
        </li>
      )}
      <li className="menu-item">
        <button type="button" to="/">
          Déconnexion
        </button>
      </li>
    </ul>
  );
}

UserMenu.propTypes = {
  nickname: PropTypes.string.isRequired,
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
};
