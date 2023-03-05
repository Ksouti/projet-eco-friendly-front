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
  const dispatch = useDispatch();

  const [toggleBurger, setToggleBurger] = useState(false);
  const [toggleUserMenu, setToggleUserMenu] = useState(false);

  const handleClickBurger = () => {
    setToggleBurger(!toggleBurger);
  };

  const handleClickUserMenu = () => {
    setToggleUserMenu(!toggleUserMenu);
  };

  const showMenu = toggleBurger
    ? 'menu menu-collapse show'
    : 'menu menu-collapse';

  const handleClickModal = () => {
    dispatch(openModal(<AuthForm />));
  };

  const userIsLoaded = useSelector((state) => state.user.isLoaded);

  const categories = useSelector((state) => state.common.categories);
  const user = useSelector((state) => state.user.data);
  const { avatar } = user;

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
        {userIsLoaded && user ? (
          <Burger
            avatar={avatar}
            user={user}
            handleClickBurger={handleClickBurger}
          />
        ) : (
          <Burger handleClickBurger={handleClickBurger} />
        )}
        {categories && (
          <div className={showMenu}>
            <Menu
              categories={categories}
              handleClickModal={handleClickModal}
              handleClickUserMenu={handleClickUserMenu}
              toggleUserMenu={toggleUserMenu}
              userIsLoaded={userIsLoaded}
              user={user}
            />
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

function Burger({ avatar, handleClickBurger }) {
  const icon = avatar || burger;
  const className = avatar ? 'navbar-toggler-user-icon' : 'navbar-toggler-icon';

  return (
    <button
      type="button"
      className="navbar-toggler"
      onClick={handleClickBurger}
    >
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
function Menu({
  categories,
  handleClickModal,
  handleClickUserMenu,
  toggleUserMenu,
  userIsLoaded,
  user,
}) {
  return (
    <>
      <AppMenu
        categories={categories}
        handleClickModal={handleClickModal}
        handleClickUserMenu={handleClickUserMenu}
        userIsLoaded={userIsLoaded}
        user={user}
      />
      {userIsLoaded && user && (
        <UserMenu
          nickname={user.nickname}
          roles={user.roles}
          toggleUserMenu={toggleUserMenu}
        />
      )}
    </>
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
  handleClickModal: PropTypes.func.isRequired,
  handleClickUserMenu: PropTypes.func.isRequired,
  toggleUserMenu: PropTypes.bool.isRequired,
  userIsLoaded: PropTypes.bool,
  user: PropTypes.object,
};

Menu.defaultProps = {
  userIsLoaded: false,
  user: null,
};

function AppMenu({
  categories,
  handleClickModal,
  handleClickUserMenu,
  userIsLoaded,
  user,
}) {
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
        <AccountButton
          handleClickModal={handleClickModal}
          user={user}
          handleClickUserMenu={handleClickUserMenu}
        />
      ) : (
        <AccountButton handleClickModal={handleClickModal} />
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

function AccountButton({ handleClickModal, handleClickUserMenu, user }) {
  const className = user ? 'menu-item dropdown' : 'menu-item';

  return (
    <li className={className}>
      {user ? (
        <button
          type="button"
          className="dropdown-toggle"
          onClick={handleClickUserMenu}
        >
          Mon Compte
        </button>
      ) : (
        <button type="button" onClick={handleClickModal}>
          Connexion/inscription
        </button>
      )}
    </li>
  );
}

AccountButton.propTypes = {
  handleClickModal: PropTypes.func.isRequired,
  handleClickUserMenu: PropTypes.func.isRequired,
  user: PropTypes.object,
};

AccountButton.defaultProps = {
  user: null,
};

function UserMenu({ nickname, roles, toggleUserMenu }) {
  const isAdmin = roles.includes('ROLE_ADMIN');
  const isAuthor = roles.includes('ROLE_AUTHOR');

  const className = toggleUserMenu ? 'dropdown-menu show' : 'dropdown-menu';

  return (
    <ul className={className}>
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
  toggleUserMenu: PropTypes.func.isRequired,
};
