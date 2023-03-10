/* eslint-disable brace-style */

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  userOnInputChange,
  userSendEmailVerification,
  userToggleIsUpdated,
} from '../../../actions/user';
import { closeModal } from '../../../actions/common';

import Input from '../../Field/Input';
import Button from '../../Button';

import './styles.scss';

export default function FormPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /* control input fields */
  const confirmationEmail = useSelector(
    (state) => state.user.confirmationEmail,
  );

  const changeField = (value, identifier) => {
    dispatch(userOnInputChange(value, identifier));
  };

  /* Error messages */
  const emailErrorMessages = useSelector(
    (state) => state.user.emailErrorMessages,
  );

  /* submit form */
  const email = useSelector((state) => state.user.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (confirmationEmail === email) {
      dispatch(userSendEmailVerification(confirmationEmail));
    }
  };

  /* clear confirmationEmail fileld */
  const handleCancel = () => {
    dispatch(userOnInputChange('', 'confirmationEmail'));
    dispatch(closeModal());
  };

  /* Redirect user if is registring  */
  const isRegitring = useSelector((state) => state.user.isRegitring);

  if (isRegitring) {
    dispatch(userToggleIsUpdated());
    dispatch(closeModal());
    navigate('/enregistrement', { replace: true });
  }

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
        {emailErrorMessages && emailErrorMessages.length > 0 && (
          <div className="messages error-messages">
            <ul>
              {emailErrorMessages.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        <Button type="submit" color="primary">
          C'est parti !
        </Button>
        <Button type="reset" onclick={handleCancel}>
          Annuler
        </Button>
      </form>
    </div>
  );
}
