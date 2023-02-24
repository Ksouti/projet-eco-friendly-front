import './styles.scss';
import RichTextEditor from '../RichTextEditor';

function AddAdvicePage() {
  return (
    <div className="addAdvicePage">
      <div className="title1">
        <h1>Ajouter un conseil</h1>
      </div>

      <div className="title2">
        <titre htmlFor="title">Titre</titre>
        <input type="text" id="title" name="title" />
      </div>

      <div className="category">
        <form htmlFor="category">Catégorie</form>
        <select name="category" id="category">
          <option value="1">Mobilité</option>
          <option value="2">Maison</option>
          <option value="3">Santé</option>
          <option value="3">Énergie</option>
        </select>
      </div>

      <div className="richTextEditor">
        <RichTextEditor />
      </div>

      <div className="buttons">
        <button type="button">Supprimer</button>
        <button type="button">Sauvegarder</button>
        <button type="button">Publier</button>
      </div>
    </div>
  );
}

export default AddAdvicePage;
