/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

import { OnInputChange } from '../../actions/common';
import { userPublishNewAdvice } from '../../actions/user';
import { editAdviceData } from '../../actions/advices';

import Page from '../Page';
import Input from '../Field/Input';
import Button from '../Button';
import Loader from '../Loader';
import RichTextEditor from '../RichTextEditor';

import config from '../../config';

import { findItem } from '../../utils';

import './styles.scss';

function EditAdvicePage() {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const navigate = useNavigate();

  /* check if user is logged */
  const userIslogged = useSelector((state) => state.user.isLogged);
  /* end check if user is logged */

  /* if there is no advice, we redirect to the 404 page */
  if (!userIslogged) {
    return <Navigate to="/" replace />;
  }

  const advice = useSelector((state) => findItem(state.user.advices, slug));

  useEffect(() => {
    dispatch(editAdviceData(advice));
  }, []);

  /* control input fields */
  const title = useSelector((state) => state.advices.editAdviceTitle);
  const category = useSelector((state) => state.advices.editAdviceCategory);
  const content = useSelector((state) => state.advices.editAdviceContent);
  /* end control input fields */

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

  /* change field value */
  const OnTitleChange = (value) => {
    dispatch(OnInputChange(value, 'editAdviceTitle'));
  };
  const onSelectChange = (e) => {
    dispatch(OnInputChange(e.target.value, 'editAdviceCategory'));
  };
  const OnRichTextEditorChange = (e) => {
    dispatch(OnInputChange(e, 'editAdviceContent'));
  };
  /* end change field value */

  /* Get the button name clicked */
  const [buttonName, setButtonName] = useState(null);

  /* submit form */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (buttonName === 'publish') {
      dispatch(userPublishNewAdvice());
    }
    if (buttonName === 'save') {
      // dispatch(userSaveNewAdvice());
    }
    navigate(`/utilisateurs/${userNickname}`);
  };

  return (
    <Page>
      {advice ? (
        <div className="add-advice">
          <div className="title">Editer un conseil</div>
          <form autoComplete="off" onSubmit={handleSubmit} method="POST">
            <div className="row">
              <select
                name="addCategory"
                id="category"
                className="advice-select"
                onChange={onSelectChange}
                value={category.id}
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
                name="title"
                placeholder="Titre"
                onChange={OnTitleChange}
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
                outline
                color="primary"
                onclick={() => navigate(`/utilisateurs/${userNickname}`)}
              >
                Annuler
              </Button>
            </div>
          </form>
        </div>
      ) : (
        <Loader />
      )}
    </Page>
  );
}

export default EditAdvicePage;
