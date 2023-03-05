import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { OnInputChange } from '../../actions/common';
import { userPublishNewAdvice, userSaveNewAdvice } from '../../actions/advices';

import Page from '../Page';
import Input from '../Field/Input';
import Button from '../Button';

import RichTextEditor from '../RichTextEditor';

import config from '../../config';

import './styles.scss';

function AddAdvicePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /* check if user is logged */
  const userIslogged = useSelector((state) => state.user.isLogged);
  /* end check if user is logged */

  /* if there is no advice, we redirect to the 404 page */
  if (!userIslogged) {
    return navigate('/', { replace: true });
  }

  /* get state informations */
  const [categories, setCategories] = useState(
    useSelector((state) => state.common.categories),
  );
  const userNickname = useSelector((state) => state.user.nickname);
  /* end get state informations */

  /* If there is no categories in the state, we set the default categories */
  if (categories.length === 0) {
    setCategories(config.defaultNavLinks);
  }

  /* control input fields */
  const title = useSelector((state) => state.advices.newAdviceTitle);
  const category = useSelector((state) => state.advices.newAdviceCategory);
  const content = useSelector((state) => state.advices.newAdviceContent);
  /* end control input fields */

  /* change field value */
  const changeField = (value) => {
    dispatch(OnInputChange(value, 'newAdviceTitle'));
  };
  const onSelectChange = (e) => {
    dispatch(OnInputChange(e.target.value, 'newAdviceCategory'));
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
    if (buttonName === 'cancel') {
      dispatch(OnInputChange('', 'newAdviceTitle'));
      dispatch(OnInputChange('', 'newAdviceCategory'));
      dispatch(OnInputChange('', 'newAdviceContent'));
    }
    navigate(`/utilisateurs/${userNickname}`, { replace: true });
  };

  return (
    <Page>
      <div className="add-advice">
        <div className="title">Ajouter un conseil</div>
        <form autoComplete="off" onSubmit={handleSubmit} method="POST">
          <div className="row">
            <select
              onChange={onSelectChange}
              value={category}
              className="advice-select"
            >
              <option hidden>Catégories</option>
              {categories.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <Input
              type="text"
              name="addTitle"
              placeholder="Titre"
              onChange={changeField}
              value={title}
              color="primary"
            />
          </div>
          <div className="text-editor">
            <RichTextEditor
              name="addContent"
              value={content}
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
              type="submit"
              outline
              color="primary"
              onclick={() => setButtonName('cancel')}
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
