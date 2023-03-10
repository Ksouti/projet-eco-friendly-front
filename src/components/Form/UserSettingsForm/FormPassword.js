/* eslint-disable brace-style */
import { useDispatch, useSelector } from 'react-redux';

import {
  userOnInputChange,
  userSendEmailVerification,
} from '../../../actions/user';

import Input from '../../Field/Input';
import Button from '../../Button';

import './styles.scss';

export default function FormPassword() {
  const dispatch = useDispatch();

  /* control input fields */
  const confirmationEmail = useSelector(
    (state) => state.user.confirmationEmail,
  );

  const changeField = (value, identifier) => {
    dispatch(userOnInputChange(value, identifier));
  };

  /* check if email is the same as the one is state */
  /* if yes, send email with link to reset password */
  /* if not, display error message */
  const email = useSelector((state) => state.user.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (confirmationEmail === email) {
      dispatch(userSendEmailVerification(confirmationEmail));
    } else {
      /* Afficher un message d'erreur les inforamtions saisies ne sont pas correct */
      console.log('Email non envoyé');
    }
  };

  /* **** */
  return (
    <div className="modal-form password">
      <h5 className="title text-primary">Modifier mon mot de passe</h5>
      <p className="password-text">
        Pour des raisons de sécurité, vous devez saisir votre adresse email
        actuelle pour modifier votre mot de passe.
      </p>
      <p className="password-text">Un email vous sera envoyé avec un lien.</p>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Input
          type="email"
          name="confirmationEmail"
          placeholder="Email"
          onChange={changeField}
          value={confirmationEmail}
          color="primary"
        />
        <Button type="submit" color="primary">
          C'est parti !
        </Button>
        <Button type="reset">Annuler</Button>
      </form>
    </div>
  );
}
