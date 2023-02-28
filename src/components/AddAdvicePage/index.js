import './styles.scss';
import RichTextEditor from '../RichTextEditor';
import Page from '../Page';
import Input from '../Field/Input';
import Button from '../Button';

function AddAdvicePage() {
  return (
    <Page>
      <div className="add-advice-page">
        <div className="title">Ajouter un conseil</div>
        <form>
          <Input
            type="text"
            name="title"
            color="primary"
            placeholder="Titre"
          />
          <div className="category">
            <select name="category" id="category">
              <option value="1">Mobilité</option>
              <option value="2">Maison</option>
              <option value="3">Santé</option>
              <option value="4">Énergie</option>
            </select>
          </div>
          <div className="richTextEditor">
            <RichTextEditor />
          </div>
          <div className="button-wrapper">
            <Button color="primary">
              Publier
            </Button>
            <Button>
              Sauvegarder
            </Button>
            <Button outline color="primary">
              Supprimer
            </Button>
          </div>
        </form>
      </div>
    </Page>
  );
}

export default AddAdvicePage;
