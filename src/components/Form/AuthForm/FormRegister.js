import Input from '../../Field/Input';
import Button from '../../Button';

import './styles.scss';

export default function FormRegister({ toggleForm }) {
  let handleSubmit,
    handleChange,
    email,
    password,
    nickname,
    lastname,
    firstname;

  return (
    <div className="inscription">
      <h5 className="title text-primary">S'inscrire</h5>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={email}
          color="primary"
        />
        <Input
          type="password"
          name="password"
          placeholder="Mot de passe"
          onChange={handleChange}
          value={password}
          color="primary"
        />
        <Input
          type="password"
          name="confirme-password"
          placeholder="Confirmation du mot de passe"
          onChange={handleChange}
          value={password}
          color="primary"
        />
        <Input
          type="text"
          name="nickname"
          placeholder="Pseudo"
          onChange={handleChange}
          value={nickname}
          color="primary"
        />
        <hr />
        <Input
          type="text"
          name="lastname"
          placeholder="Nom de famille"
          onChange={handleChange}
          value={lastname}
          color="primary"
        />
        <Input
          type="text"
          name="firstname"
          placeholder="Prénom"
          onChange={handleChange}
          value={firstname}
          color="primary"
        />
        <Button type="submit" color="primary">
          Se connecter
        </Button>
      </form>
      <p className="link">
        Déjà inscit ?{' '}
        <Button type="button" color="link-primary" onclick={toggleForm}>
          Se connecter
        </Button>
      </p>
    </div>
  );
}
