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

    </div>
  );
}

export default Navbar;
