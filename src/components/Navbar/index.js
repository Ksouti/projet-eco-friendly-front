/* eslint-disable object-curly-newline */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Burger from './Burger';
import Menu from './Menu';

import './styles.scss';

function Navbar() {
  const [isOpen, setIsOpen] = useState('menu menu-collapse');

  const user = useSelector((state) => state.user.data);
  const { avatar } = user;

  /* menu burger */
  const burgerIsOpen = useSelector((state) => state.common.burgerIsOpen);

  useEffect(() => {
    const className = burgerIsOpen
      ? 'menu menu-collapse show'
      : 'menu menu-collapse';
    setIsOpen(className);
  }, [burgerIsOpen]);
  /* end menu burger */

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
        <Burger avatar={avatar} />
        <div className={isOpen}>
          <Menu />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
