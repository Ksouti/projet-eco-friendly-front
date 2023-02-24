import Input from '../../Field/Input';
import Button from '../../Button';

import './styles.scss';

export default function FormEmail({ email }) {
  let handleSubmit, handleChange, password;

  return (
    <div className="modal-form email">
      <h5 className="title text-primary">Modifier mon Email</h5>
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
          C'est prêt !
        </Button>
        <Button type="reset">Annuler</Button>
      </form>
    </div>
  );
}
