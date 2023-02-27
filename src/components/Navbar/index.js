import { NavLink } from 'react-router-dom';

import navBarLogo from '../../assets/logos/logo-typo-large.png';
import navBarAvatar from '../../assets/avatar/avatar-2.png';
import Hamburger from './Hamburger';
import './styles.scss';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-top">
        <Hamburger />
        <span className="empty"> empty </span>
        <img src={navBarLogo} alt="logo" className="navbar-logo" />

        <div className="login">
          <p className="login-message">Salut Johnny !</p>
          <img src={navBarAvatar} alt="avatar" className="login-avatar" />
        </div>
      </div>

      <nav className="navigation">
        <ul className="navigation-buttons">
          <li className="button homepageMenu">
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li className="button mobilityMenu">
            <NavLink to="/">Mobilité</NavLink>
          </li>
          <li className="button homeMenu">
            <NavLink to="/">Maison</NavLink>
          </li>
          <li className="button healthMenu">
            <NavLink to="/">Santé</NavLink>
          </li>
          <li className="button energyMenu">
            <NavLink to="/">Energie</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
