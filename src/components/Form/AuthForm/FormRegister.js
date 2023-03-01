/* eslint-disable operator-linebreak */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import { OnInputChange, closeModal } from '../../../actions/common';
import { userRegister } from '../../../actions/user';

import Input from '../../Field/Input';
import Button from '../../Button';

import './styles.scss';

export default function FormRegister({ toggleForm }) {
  const [errorsMessage, setErrorsMessage] = useState(null);
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const confirmPassword = useSelector((state) => state.user.confirmPassword);
  const firstname = useSelector((state) => state.user.firstname);
  const lastname = useSelector((state) => state.user.lastname);
  const nickname = useSelector((state) => state.user.nickname);

  const changeField = (value, identifier) => {
    dispatch(OnInputChange(value, identifier));
  };

  const validate = () => {
    const specialCaracter = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    const regexEmail =
      /^[^\W][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\.[a-zA-Z]{2,4}$/;

    if (!email) {
      setErrorsMessage('Veuillez renseigner un email');
      return false;
    }
    if (!regexEmail.test(email)) {
      setErrorsMessage('Email invalide');
      return false;
    }
    if (!password) {
      setErrorsMessage('Veuillez renseigner un mot de passe');
      return false;
    }
    if (
      (password.length < 8 &&
        password.length > 0 &&
        (/\d/.test(password) ||
          /[a-z]/.test(password) ||
          /[A-Z]/.test(password))) ||
      specialCaracter.includes(password)
    ) {
      setErrorsMessage(
        'Mot de passe invalide, 8 caractères minimum, 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial',
      );
      return false;
    }
    if (!confirmPassword) {
      setErrorsMessage('Veuillez confirmer votre mot de passe');
      return false;
    }
    if (password !== confirmPassword) {
      setErrorsMessage('Les mots de passe ne correspondent pas');
      return false;
    }
    if (!nickname) {
      setErrorsMessage('Veuillez renseigner un pseudo');
      return false;
    }
    if (nickname.length < 3) {
      setErrorsMessage('Pseudo trop court, 3 caractères minimum');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    dispatch(userRegister());
    dispatch(closeModal());
  };

  return (
    <div className="inscription">
      <h5 className="title text-primary">S'inscrire</h5>
      {errorsMessage && <p className="error-message">{errorsMessage}</p>}
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          onChange={changeField}
          value={email}
          color="primary"
        />
        <Input
          type="password"
          name="password"
          placeholder="Mot de passe"
          onChange={changeField}
          value={password}
          color="primary"
        />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirmation du mot de passe"
          onChange={changeField}
          value={confirmPassword}
          color="primary"
        />
        <Input
          type="text"
          name="nickname"
          placeholder="Pseudo"
          onChange={changeField}
          value={nickname}
          color="primary"
        />
        <hr />
        <Input
          type="text"
          name="lastname"
          placeholder="Nom de famille"
          onChange={changeField}
          value={lastname}
          color="primary"
        />
        <Input
          type="text"
          name="firstname"
          placeholder="Prénom"
          onChange={changeField}
          value={firstname}
          color="primary"
        />
        <Button type="submit" color="primary">
          Se connecter
        </Button>
      </form>
      <p className="link">
        Déjà inscit ?{' '}
        <Button type="button" color="link-primary" onclick={() => toggleForm()}>
          Se connecter
        </Button>
      </p>
    </div>
  );
}

FormRegister.propTypes = {
  toggleForm: PropTypes.func.isRequired,
};
