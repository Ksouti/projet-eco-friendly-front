import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { redirect } from 'react-router-dom';

import { OnInputChange } from '../../actions/common';
import { userPublishNewAdvice, userSaveNewAdvice } from '../../actions/user';

import Page from '../Page';
import Input from '../Field/Input';
import Button from '../Button';

import RichTextEditor from '../RichTextEditor';

import config from '../../config';

import './styles.scss';

function AddAdvicePage() {
  const dispatch = useDispatch();

  /* check if user is logged */
  const userIslogged = useSelector((state) => state.user.isLogged);
  /* end check if user is logged */

  /* if there is no advice, we redirect to the 404 page */
  if (!userIslogged) {
    return redirect('/');
  }

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
    dispatch(OnInputChange(e, 'newAdviceContent'));
  };
  /* change field value */

  /* Get the button name clicked */
  const [buttonName, setButtonName] = useState(null);

  /* submit form */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (buttonName === 'publish') {
      dispatch(userPublishNewAdvice());
    }
    if (buttonName === 'save') {
      dispatch(userSaveNewAdvice());
    }
    return redirect(`/utilisateurs/${userNickname}`);
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
            <Button
              type="submit"
              color="primary"
              onclick={() => setButtonName('publish')}
            >
              Publier
            </Button>
            <Button type="submit" onclick={() => setButtonName('save')}>
              Sauvegarder
            </Button>
            <Button
              outline
              color="primary"
              onclick={() => redirect(`/utilisateurs/${userNickname}`)}
            >
              Annuler
            </Button>
          </div>
        </form>
      </div>
    </Page>
  );
}

export default AddAdvicePage;
