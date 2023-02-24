import { Routes, Route } from 'react-router-dom';

import Navbar from '../Navbar';
import Footer from '../Footer';
import Homepage from '../Homepage';
import UserSettingsPage from '../UserSettingsPage/index';
import NotFoundPage from '../NotFoundPage';
import AddAdvicePage from '../AddAdvicePage';

import './styles.css';

function App() {
  // loader

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/categories/:slug" element={<CategoryPage />} /> */}
        {/* <Route path="/articles/:slug" element={<ArticlePage />} /> */}
        {/* <Route path="/conseils/:slug" element={<AdvicePage />} /> */}
        <Route path="/utilisateurs" element={<UserSettingsPage />} />
        {/* Provisional choice to be reviewed as a team */}
        <Route path="/conseils/ajouter" element={<AddAdvicePage />} />
        {/* <Route path="/conseils/:slug/editer" element={<AddAdvicePage />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
