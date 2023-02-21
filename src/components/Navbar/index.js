import navBarLogo from './logo-copy.png';
import navBarAvatar from './avatar-bear.png';
import Hamburger from '../Hamburger';
import './styles.scss';

function Navbar() {
  return (
    <div className="navbar">
      <Hamburger />
      <img src={navBarLogo} alt="logo" className="imgLogo" />
      <img src={navBarAvatar} alt="avatar" className="imgAvatar" />

      <nav>
        <ul className="menuList">
          <li className="menu homepageMenu"><a>Accueil</a></li>
          <li className="menu mobilityMenu"><a>Mobilité</a></li>
          <li className="menu homeMenu"><a>Maison</a></li>
          <li className="menu healthMenu"><a>Santé</a></li>
          <li className="menu energyMenu"><a>Energie</a></li>
        </ul>
      </nav>

    </div>
  );
}

export default Navbar;
