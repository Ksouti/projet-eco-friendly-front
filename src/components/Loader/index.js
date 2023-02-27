import Page from '../Page';

import './styles.scss';

function Loader() {
  return (
    <Page>
      <div className="loader">
        <div className="spinner">
          <p>Chargement en cours...</p>
        </div>
      </div>
    </Page>
  );
}

export default Loader;
