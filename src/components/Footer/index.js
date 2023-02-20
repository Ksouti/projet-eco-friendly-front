import footerLogoFb from './logo_fb.png';
import footerLogoInsta from './logo_insta.png';
import footerLogoTwitter from './logo_twitter.png';
import './styles.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-col">
        <ul>
          <li><a href="#">© EcoFriendly</a></li>
          <li><a href="#">Mentions légales</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div className="social-links">
          <a href="#"> <img src={footerLogoFb} alt="logo" /></a>
          <a href="#"> <img src={footerLogoTwitter} alt="logo" /></a>
          <a href="#"> <img src={footerLogoInsta} alt="logo" /></a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
