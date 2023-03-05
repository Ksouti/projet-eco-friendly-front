/* eslint-disable object-curly-newline */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';

import { openModal } from '../../actions/common';
import { userLogout } from '../../actions/user';
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
    setToggleBurger(!toggleBurger);
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
              toggleMenu={handleClickBurger}
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
  toggleMenu,
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
          toggleMenu={toggleMenu}
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
  toggleMenu: PropTypes.func.isRequired,
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

function UserMenu({ nickname, roles, toggleMenu, toggleUserMenu }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAdmin = roles.includes('ROLE_ADMIN');
  const isAuthor = roles.includes('ROLE_AUTHOR');
  const isUser = roles.includes('ROLE_USER'); // dev only

  const className = toggleUserMenu ? 'dropdown-menu show' : 'dropdown-menu';

  const handleClick = () => {
    dispatch(userLogout());
    toggleMenu();
    navigate('/', { replace: true });
  };

  return (
    <ul className={className}>
      <li className="menu-item">
        <Link to={`/utilisateurs/${nickname}`} onClick={toggleMenu}>
          Gérer mon compte
        </Link>
      </li>
      <li className="menu-item">
        <Link to="/conseils/ajouter" onClick={toggleMenu}>
          Ajouter un conseil
        </Link>
      </li>
      {(isAdmin || isAuthor || isUser) && (
        <li className="menu-item">
          <a
            href="http://vps-79770841.vps.ovh.net/back_office/connexion"
            target="_blank"
            rel="noreferrer"
            onClick={toggleMenu}
          >
            Accès réservé
          </a>
        </li>
      )}
      <li className="menu-item text-secondary">
        <button type="button" onClick={handleClick}>
          Déconnexion
        </button>
      </li>
    </ul>
  );
}

UserMenu.propTypes = {
  nickname: PropTypes.string.isRequired,
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  toggleMenu: PropTypes.func.isRequired,
  toggleUserMenu: PropTypes.func.isRequired,
};
