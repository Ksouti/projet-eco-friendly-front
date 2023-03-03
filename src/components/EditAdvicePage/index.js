/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';

import { OnInputChange } from '../../actions/common';

import Page from '../Page';
import Input from '../Field/Input';
import Button from '../Button';
import RichTextEditor from '../RichTextEditor';

import config from '../../config';

import { findItem } from '../../utils';

import './styles.scss';

function EditAdvicePage() {
  const dispatch = useDispatch();
  const { slug } = useParams();

  /* check if user is logged */
  const userIslogged = useSelector((state) => state.user.isLogged);
  /* end check if user is logged */

  const advice = useSelector((state) => findItem(state.user.advices, slug));

  /* if there is no advice, we redirect to the 404 page */
  if (!userIslogged || !advice) {
    return <Navigate to="/404" replace />;
  }

  /* get state informations */
  const [categories, setCategories] = useState(
    useSelector((state) => state.common.categories),
  );
  /* end get state informations */

  /* If there is no categories in the state, we set the default categories */
  if (categories.length === 0) {
    setCategories(config.defaultNavLinks);
  }

  /* change field value */
  const OnTitleChange = (value, identifier) => {
    dispatch(OnInputChange(value, identifier));
  };
  const onSelectChange = (e) => {
    dispatch(OnInputChange(e.target.value, 'addCategory'));
  };
  const OnRichTextEditorChange = (e) => {
    dispatch(OnInputChange(e, 'addContent'));
  };
  /* end change field value */

  return (
    <Page>
      <div className="add-advice">
        <div className="title">Editer un conseil</div>
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
              onChange={OnTitleChange}
              value={advice.title}
              color="primary"
            />
          </div>
          <div className="text-editor">
            <RichTextEditor
              name="addContent"
              value={advice.content}
              onChange={OnRichTextEditorChange}
            />
          </div>
          <div className="button-wrapper">
            <Button color="primary">Editer</Button>
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

export default EditAdvicePage;
