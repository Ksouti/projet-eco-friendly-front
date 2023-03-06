/* eslint-disable object-curly-newline */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { openModal } from '../../actions/common';
import AuthForm from '../Form/AuthForm';

import Burger from './Burger';
import Menu from './Menu';

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
          </Link>
          <span>Eco-friendly</span>
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
