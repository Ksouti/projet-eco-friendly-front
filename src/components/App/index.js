/* eslint-disable indent */
/* eslint-disable operator-linebreak */
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

import { loadingArticlesData } from '../../actions/articles';
import { loadingAdvicesData } from '../../actions/advices';

import { loadingCategoriesData } from '../../actions/common';

import Navbar from '../Navbar';
import Footer from '../Footer';
import HomePage from '../HomePage';
import UserSettingsPage from '../UserSettingsPage/index';
import NotFoundPage from '../NotFoundPage';
import AddAdvicePage from '../AddAdvicePage';
import CategoryPage from '../CategoryPage';
import ArticlePage from '../ArticlePage';
import AdvicePage from '../AdvicePage';
import LegalNoticePage from '../LegalNoticePage';
import Loader from '../Loader';
import Modal from '../Modal';

import config from '../../config';

import './styles.scss';

function App() {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState(
    useSelector((state) => state.common.categories),
  );

  /* get state informations */
  const articlesIsLoaded = useSelector((state) => state.articles.isLoaded);
  const advicesIsLoaded = useSelector((state) => state.advices.isLoaded);
  /* end get state informations */

  /* dispatch actions to get data */
  useEffect(() => {
    dispatch(loadingCategoriesData());
    dispatch(loadingArticlesData());
    dispatch(loadingAdvicesData());
  }, []);

  const modalIsOpen = useSelector((state) => state.common.modalIsOpen);
  const modalContent = useSelector((state) => state.common.modalContent);

  /* If there is no categories in the state, we set the default categories */
  if (categories.length === 0) {
    setCategories(config.defaultNavLinks);
  }

  return (
    <div className="app">
      {modalIsOpen && <Modal>{modalContent}</Modal>}
      <header className="header">
        <Navbar categories={categories} />
      </header>
      {articlesIsLoaded && advicesIsLoaded ? (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories/:name" element={<CategoryPage />} />
          <Route path="/articles/:slug" element={<ArticlePage />} />
          <Route path="/conseils/:slug" element={<AdvicePage />} />
          {UserLogged && (
            <Route
              path="/utilisateurs/:nickname"
              element={<UserSettingsPage />}
            />
          )}
          <Route path="/conseils/ajouter" element={<AddAdvicePage />} />
          <Route path="/conseils/:slug/editer" element={<AddAdvicePage />} />
          <Route path="/mentions-legales" element={<LegalNoticePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      ) : (
        <Loader />
      )}
      <Footer />
    </div>
  );
}

export default App;
