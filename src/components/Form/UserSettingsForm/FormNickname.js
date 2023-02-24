import Input from '../../Field/Input';
import Button from '../../Button';

import './styles.scss';

export default function FormNickname({ nickname }) {
  let handleSubmit, handleChange, password;
  return (
    <div className="modal-form nickename">
      <h5 className="title text-primary">Modifier mon pseudo</h5>
      <form autoComplete="off" onSubmit="{handleSubmit}">
        <Input
          type="text"
          name={nickname}
          placeholder="Pseudo"
          onChange="{handleChange}"
          value={nickname}
          color="primary"
        />
        <Input
          type="password"
          name="password"
          placeholder="Mot de passe"
          onChange="{handleChange}"
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
