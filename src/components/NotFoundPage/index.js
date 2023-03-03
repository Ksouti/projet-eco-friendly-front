import './styles.scss';
import Page from '../Page';
import logo from './notFound.png';

const NotFoundPage = () => (
  <Page>
    <div className="not-found-container">
      <img src={logo} alt="Logo" />;
      <p>Page non trouvée</p>
    </div>
  </Page>
);

export default NotFoundPage;
