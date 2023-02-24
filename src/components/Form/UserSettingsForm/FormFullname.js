import Input from '../../Field/Input';
import Button from '../../Button';

import './styles.scss';

export default function FormFullname({ lastname, firstname }) {
  let handleSubmit, handleChange;
  return (
    <div className="modal-form fullname">
      <h5 className="title text-primary">Modifier mon Nom et Prénom</h5>
      <form autoComplete="off" onSubmit="{handleSubmit}">
        <Input
          type="text"
          name={lastname}
          placeholder="Nom de famille"
          onChange="{handleChange}"
          value={lastname}
          color="primary"
        />
        <Input
          type="text"
          name={firstname}
          placeholder="Prénom"
          onChange="{handleChange}"
          value={firstname}
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
