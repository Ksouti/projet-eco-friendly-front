import Input from '../../Field/Input';
import Button from '../../Button';

import './styles.scss';

export default function FormDeleteAccount() {
  let handleSubmit, handleChange, password;
  return (
    <div className="modal-form delete-account">
      <h5 className="title text-secondary">
        Supprimer définitivement mon compte
      </h5>
      <p className="text-content  text-secondary">
        Attention si vous supprimez votre compte, cette action sera irreversible
        et vous perdrez les accès aux informations que vous avez partagées !
      </p>
      <form autoComplete="off" onSubmit="{handleSubmit}">
        <Input
          type="password"
          name="password"
          placeholder="Mot de passe"
          onChange="{handleChange}"
          value={password}
          color="primary"
        />
        <Button type="submit" color="secondary">
          Supprimer mon compte
        </Button>
        <Button type="reset">Annuler</Button>
      </form>
    </div>
  );
}
