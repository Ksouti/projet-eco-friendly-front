import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import { OnInputChange, closeModal } from '../../../actions/common';
import { userRegister } from '../../../actions/user';

import Input from '../../Field/Input';
import Button from '../../Button';

import './styles.scss';

export default function FormRegister({ toggleForm }) {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log('Les mots de passe ne correspondent pas'); // dev only
      // TODO: afficher un message d'erreur
      return;
    }
    dispatch(userRegister());
    dispatch(closeModal());
  };

  return (
    <div className="inscription">
      <h5 className="title text-primary">S'inscrire</h5>
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
