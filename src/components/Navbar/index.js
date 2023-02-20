import navBarLogo from './logo-copy.png';
import navBarAvatar from './avatar-bear.png';
import Hamburger from '../Hamburger';

function Navbar() {
  return (
    <div className="navbar">
      <Hamburger />
      <img src={navBarLogo} alt="react logo" />
      <img src={navBarAvatar} alt="react logo" />

    </div>
  );
}

export default Navbar;
