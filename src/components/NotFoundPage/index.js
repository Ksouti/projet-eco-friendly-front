import './styles.scss';
import Page from '../Page';
import Button from '../Button';

const NotFoundPage = () => (
  <Page>
    <div className="not-found-container">
      <h1>404</h1>
      <p>Page non trouvée</p>
      <Button color="primary">
        Retourner à l'accueil
      </Button>
    </div>
  </Page>
);

export default NotFoundPage;
