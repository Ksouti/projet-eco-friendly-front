import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { userLogout } from '../../actions/user';
import { closeModal } from '../../actions/common';

import Page from '../Page';
import Button from '../Button';

import image from './image.png';

import './styles.scss';

function RegistrationPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userLogout());
    dispatch(closeModal());
  }, []);

  return (
    <Page>
      <div className="registration">
        <h1 className="registration-title">
          Merci{' '}
          <span>{sessionStorage.getItem('nickname').replace(/"/g, '')}</span>{' '}
          pour votre inscription !
        </h1>
        <p className="registration-text">
          Nous sommes très heureux de vous compter parmi nous et vous souhaitons
          la bienvenue !
        </p>
        <div className="registration-image">
          <img src={image} alt="enregistrement" />
        </div>
        <p className="registration-text">
          Un email vient de vous être envoyé sur l'adresse
          <span> {sessionStorage.getItem('email').replace(/"/g, '')}</span>,
          vérifiez votre messagerie pour finaliser votre enregistrement !
        </p>
        <p className="registration-text">
          Vous n'avez pas reçu d'email ?
          <Button link color="primary">
            Renvoyer
          </Button>
        </p>
      </div>
    </Page>
  );
}

export default RegistrationPage;
