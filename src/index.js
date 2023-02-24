import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ModalContextProvider } from './context/ModalContext';
import { BrowserRouter } from 'react-router-dom';

import store from 'src/store';

import App from 'src/components/App';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ModalContextProvider>
        <App />
      </ModalContextProvider>
    </Provider>
  </BrowserRouter>,
);
