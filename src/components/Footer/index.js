import { Link } from 'react-router-dom';

import facebook from './assets/facebook.png';
import instagram from './assets/instagram.png';
import twitter from './assets/twitter.png';

import './styles.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="legals">
        <ul className="legals-links">
          <li className="legals-link">
            <Link to="/">Contact</Link>
          </li>
          <li className="link">
            <Link to="/">Mentions légales</Link>
          </li>
        </ul>
      </div>
      <div className="copyright">
        <p className="copyright-text">© Eco-Friendly</p>
      </div>
      <div className="social">
        {/* Customize external links with to={{ pathname: "https://example.site.com" }} */}
        <Link to="/" target="_blank">
          <img src={twitter} alt="Logo de Twitter" />
        </Link>
        <Link to="/" target="_blank">
          <img src={instagram} alt="Logo d'Instagram" />
        </Link>
        <Link to="/" target="_blank">
          <img src={facebook} alt="Logo de Facebook" />
        </Link>
      </div>
    </footer>
  );
}
export default Footer;
