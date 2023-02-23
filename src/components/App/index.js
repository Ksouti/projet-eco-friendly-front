import { Routes, Route } from 'react-router-dom';

import Navbar from '../Navbar';
import Footer from '../Footer';
import Homepage from '../Homepage';
import NotFoundPage from '../NotFoundPage';

import './styles.css';

function App() {
  // loader

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/categories/:slug" element={<CategoryPage />} />
        <Route path="/articles/:slug" element={<ArticlePage />} />
        <Route path="/conseils/:slug" element={<AdvicePage />} />
        <Route path="/utilisateurs/:slug" element={<UserSettingsPage />} />
        <Route path="/conseils/ajouter" element={<AddAdvicePage />} />        Provisional choice to be reviewed as a team
        <Route path="/conseils/:slug/editer" element={<AddAdvicePage />} />   Provisional choice to be reviewed as a team
        */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
