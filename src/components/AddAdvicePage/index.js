import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { OnInputChange } from '../../actions/common';

import Page from '../Page';
import Input from '../Field/Input';
import Button from '../Button';

import RichTextEditor from '../RichTextEditor';

import config from '../../config';

import './styles.scss';

function AddAdvicePage() {
  const dispatch = useDispatch();
  const addTitle = useSelector((state) => state.advices.addTitle);
  const addContent = useSelector((state) => state.advices.addContent);

  const [categories, setCategories] = useState(
    useSelector((state) => state.common.categories),
  );

  /* If there is no categories in the state, we set the default categories */
  if (categories.length === 0) {
    setCategories(config.defaultNavLinks);
  }

  const changeField = (value, identifier) => {
    dispatch(OnInputChange(value, identifier));
  };

  const onSelectChange = (e) => {
    dispatch(OnInputChange(e.target.value, 'addCategory'));
  };

  const OnRichTextEditorChange = (e) => {
    dispatch(OnInputChange(e, 'addContent'));
  };

  return (
    <Page>
      <div className="add-advice">
        <div className="title">Ajouter un conseil</div>
        <form>
          <div className="row">
            <select
              name="addCategory"
              id="category"
              className="advice-select"
              onChange={onSelectChange}
            >
              <option hidden>Catégories</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            <Input
              type="text"
              name="addTitle"
              placeholder="Titre"
              onChange={changeField}
              value={addTitle}
              color="primary"
            />
          </div>
          <div className="text-editor">
            <RichTextEditor
              name="addContent"
              value={addContent}
              onChange={OnRichTextEditorChange}
            />
          </div>
          <div className="button-wrapper">
            <Button color="primary">Publier</Button>
            <Button>Sauvegarder</Button>
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
