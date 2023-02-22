import { Link } from 'react-router-dom';

import footerLogoFacebook from './logo_fb.png';
import footerLogoInstagram from './logo_insta.png';
import footerLogoTwitter from './logo_twitter.png';
import './styles.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <ul>
          <li>
            <Link to="/">Contact</Link>
          </li>
          <li>
            <Link to="/">Mentions légales</Link>
          </li>
        </ul>
      </div>
      <div className="footer-copyright">
        <p>© EcoFriendly</p>
      </div>
      <div className="footer-logo">
        {/* Customize external links with to={{ pathname: "https://example.site.com" }} */}
        <Link to="/" target="_blank">
          <img src={footerLogoTwitter} alt="logoTwitter" />
        </Link>
        <Link to="/" target="_blank">
          <img src={footerLogoInstagram} alt="logoInstagram" />
        </Link>
        <Link to="/" target="_blank">
          <img src={footerLogoFacebook} alt="logoFacebook" />
        </Link>
      </div>
    </footer>
  );
}
export default Footer;
