import { NavLink } from 'react-router-dom';

import navBarLogo from './logo-copy.png';
import navBarAvatar from './avatar-bear.png';
import Hamburger from '../Hamburger';
import './styles.scss';

function Navbar() {
  return (
    <div className="navbar">
      <Hamburger />
      <div className="logoNavbar">
        <img src={navBarLogo} alt="logo" className="imgLogo" />
      </div>
      <div className="welcome">
        <p className="welcomeMessage">Salut Johnny !</p>
        <img src={navBarAvatar} alt="avatar" className="imgAvatar" />
      </div>

      <nav className="navigation">
        <ul className="navButtons">
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
