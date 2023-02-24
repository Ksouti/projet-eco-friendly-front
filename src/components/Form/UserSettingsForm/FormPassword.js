import Input from '../../Field/Input';
import Button from '../../Button';

import './styles.scss';

export default function FormPassword({}) {
  let handleSubmit, handleChange, currentPassword, newPassword, confirmPassword;

  return (
    <div className="modal-form password">
      <h5 className="title text-primary">Modifier mon mot de passe</h5>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Input
          type="password"
          name="currentPassword"
          placeholder="Mot de passe actuel"
          onChange={handleChange}
          value={currentPassword}
          color="primary"
        />
        <Input
          type="password"
          name="newPassword"
          placeholder="Nouveau mot de passe"
          onChange={handleChange}
          value={newPassword}
          color="primary"
        />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirmation du mot de passe"
          onChange={handleChange}
          value={confirmPassword}
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
