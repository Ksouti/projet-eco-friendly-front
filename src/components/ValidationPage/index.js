import { useDispatch } from 'react-redux';
import Page from '../Page';
import { openModal } from '../../actions/common';
import AuthForm from '../Form/AuthForm';

import Button from '../Button';

import image from './image.png';

import './styles.scss';

function ValidationPage() {
  const dispatch = useDispatch();

  const handleClickModal = () => {
    dispatch(openModal(<AuthForm />));
  };

  return (
    <Page>
      <div className="validation">
        <h1 className="validation-title">Félicitation !</h1>
        <p className="validation-text">Votre email a bien été validée.</p>
        <p className="validation-text">
          Vous pouvez mainteant vous connecter à votre compte et poster tous vos
          conseils !
        </p>
        <div className="validation-image">
          <img src={image} alt="enregistrement" />
        </div>

        <p className="validation-text">
          C'est parti ?
          <Button link color="primary" onclick={handleClickModal}>
            Se connecter
          </Button>
        </p>
      </div>
    </Page>
  );
}

export default ValidationPage;
