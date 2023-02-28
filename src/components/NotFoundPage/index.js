import './styles.scss';
import RichTextEditor from '../RichTextEditor';
import Page from '../Page';
import Input from '../Field/Input';
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
