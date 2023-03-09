import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Page from '../Page';
import Button from '../Button';

import image from './image.png';

import './styles.scss';

function RegistrationPage() {
  const navigate = useNavigate();
  const isRegitring = useSelector((state) => state.user.isRegitring);
  const nickname = useSelector((state) => state.user.nickname);
  const email = useSelector((state) => state.user.email);

  useEffect(() => {
    if (!isRegitring) {
      navigate('/');
    }
  }, [isRegitring]);

  return (
    <Page>
      <div className="registration">
        <h1 className="registration-title">
          Merci <span>{nickname}</span> pour votre inscription !
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
          <span> {email}</span>, vérifiez votre messagerie pour finaliser votre
          enregistrement !
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
