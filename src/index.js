import { createRoot } from 'react-dom/client';
import { ModalContextProvider } from './context/ModalContext';
import App from 'src/components/App';
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <ModalContextProvider>
      <App />
    </ModalContextProvider>
  </BrowserRouter>,
);
