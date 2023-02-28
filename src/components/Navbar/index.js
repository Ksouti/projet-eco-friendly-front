import { NavLink } from 'react-router-dom';

import navBarLogo from '../../assets/logos/logo-typo-l.png';
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
          <li>
            <NavLink className="button active" to="/">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink className="button" to="/">
              Mobilité
            </NavLink>
          </li>
          <li>
            <NavLink className="button" to="/">
              Maison
            </NavLink>
          </li>
          <li>
            <NavLink className="button" to="/">
              Santé
            </NavLink>
          </li>
          <li>
            <NavLink className="button" to="/">
              Energie
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
