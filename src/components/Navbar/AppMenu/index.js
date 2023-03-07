import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import {
  openModal,
  toggleBurger,
  toggleUserMenu,
} from '../../../actions/common';
import AuthForm from '../../Form/AuthForm';

import './styles.scss';

export default function AppMenu() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState('menu-item');

  const categories = useSelector((state) => state.common.categories);

  const userIsLogged = useSelector((state) => state.user.isLogged);

  const toggleMenus = () => {
    dispatch(toggleUserMenu());
  };

  const closeMenus = () => {
    dispatch(toggleBurger());
    dispatch(toggleUserMenu());
  };

  useEffect(() => {
    const className = userIsLogged ? 'menu-item dropdown' : 'menu-item';
    setIsOpen(className);
  }, [userIsLogged]);

  const toggleModal = () => {
    dispatch(openModal(<AuthForm />));
  };

  return (
    <ul className="menu-items">
      <li className="menu-item">
        <NavLink to="/">Accueil</NavLink>
      </li>
      {categories.map((category) => (
        <li key={category.id} className="menu-item">
          <NavLink to={`/categories/${category.slug}`} onClick={closeMenus}>
            {category.name}
          </NavLink>
        </li>
      ))}
      {userIsLogged ? (
        <li className={isOpen}>
          <button
            type="button"
            className="dropdown-toggle"
            onClick={toggleMenus}
          >
            Mon Compte
          </button>
        </li>
      ) : (
        <li className="menu-item">
          <button type="button" onClick={toggleModal}>
            Connexion / Inscription
          </button>
        </li>
      )}
    </ul>
  );
}
