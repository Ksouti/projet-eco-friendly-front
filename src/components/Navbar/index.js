/* eslint-disable object-curly-newline */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';

import { openModal } from '../../actions/common';
import AuthForm from '../Form/AuthForm';

import burger from './assets/toggler-icon.svg';

import './styles.scss';

function Navbar() {
  const [toggleBurger, setToggleBurger] = useState(false);

  const handleClickBurger = () => {
    setToggleBurger(!toggleBurger);
  };

  const showMenu = toggleBurger
    ? 'menu menu-collapse show'
    : 'menu menu-collapse';

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
        {user ? (
          <Burger icon={burger} handleClickBurger={handleClickBurger} />
        ) : (
          <Burger icon={avatar} handleClickBurger={handleClickBurger} />
        )}
        {categories && (
          <div className={showMenu}>
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

function Burger({ icon, handleClickBurger }) {
  return (
    <button
      type="button"
      className="navbar-toggler"
      onClick={handleClickBurger}
    >
      <img src={icon} alt="toggle icon" className="navbar-toggler-icon" />
    </button>
  );
}

Burger.propTypes = {
  icon: PropTypes.string.isRequired,
  handleClickBurger: PropTypes.func.isRequired,
};

function Menu({ categories, nickname, isVerified, isActive, roles }) {
  const dispatch = useDispatch();

  const handleClickModal = () => {
    dispatch(openModal(<AuthForm />));
  };

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
          <button type="button" onClick={handleClickModal}>
            Connexion/inscription
          </button>
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
