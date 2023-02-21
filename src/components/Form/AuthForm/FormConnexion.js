import Input from '../../Field/Input';
import Button from '../../Button';

import './styles.scss';

export default function FormConnexion({ toggleForm }) {
  let handleSubmit, handleChange, email, password;

  return (
    <div className="connexion">
      <h5 className="title text-primary">Se connecter</h5>
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
        <Button type="submit" color="primary">
          Se connecter
        </Button>
      </form>
      <p className="link">
        Première fois ?{' '}
        <Button type="button" color="link-primary" onclick={() => toggleForm()}>
          S'inscrire
        </Button>
      </p>
    </div>
  );
}
