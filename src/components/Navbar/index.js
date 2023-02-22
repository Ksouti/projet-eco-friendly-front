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
          <li className="button homepageMenu"><a>Accueil</a></li>
          <li className="button mobilityMenu"><a>Mobilité</a></li>
          <li className="button homeMenu"><a>Maison</a></li>
          <li className="button healthMenu"><a>Santé</a></li>
          <li className="button energyMenu"><a>Energie</a></li>
        </ul>
      </nav>

    </div>
  );
}

export default Navbar;
