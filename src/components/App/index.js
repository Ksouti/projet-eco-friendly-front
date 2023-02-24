import { Routes, Route } from 'react-router-dom';

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

import './styles.scss';

function App() {
  const isLoaded = true;

  if (!isLoaded) {
    return <Loader />;
  }

  return (
    <div className="app">
      <header>
        <Navbar />
      </header>
      {isLoaded && (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories/:name" element={<CategoryPage />} />
          <Route path="/articles/:slug" element={<ArticlePage />} />
          <Route path="/conseils/:slug" element={<AdvicePage />} />
          <Route
            path="/utilisateurs/:nickname"
            element={<UserSettingsPage />}
          />
          <Route path="/conseils/ajouter" element={<AddAdvicePage />} />
          <Route path="/conseils/:slug/editer" element={<AddAdvicePage />} />
          <Route path="/mentions-legales" element={<LegalNoticePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      )}
      <Footer />
    </div>
  );
}

export default App;
