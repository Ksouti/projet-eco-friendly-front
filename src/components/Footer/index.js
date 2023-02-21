import footerLogoFacebook from './logo_fb.png';
import footerLogoInstagram from './logo_insta.png';
import footerLogoTwitter from './logo_twitter.png';
import './styles.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <ul>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Mentions légales</a></li>
        </ul>
      </div>
      <div className="footer-copyright">
        <p>© EcoFriendly</p>
      </div>
      <div className="footer-logo">
        <a href="#"> <img src={footerLogoTwitter} alt="logoTwitter" /></a>
        <a href="#"> <img src={footerLogoInstagram} alt="logoInstagram" /></a>
        <a href="#"> <img src={footerLogoFacebook} alt="logoFacebook" /></a>
      </div>
    </footer>
  );
}
export default Footer;
