import { createRoot } from 'react-dom/client';
import { ModalContextProvider } from './context/ModalContext';
import App from 'src/components/App';

const root = createRoot(document.getElementById('root'));

root.render(
  <ModalContextProvider>
    <App />
  </ModalContextProvider>,
);
