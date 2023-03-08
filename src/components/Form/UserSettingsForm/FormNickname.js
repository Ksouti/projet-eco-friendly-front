import { useDispatch, useSelector } from 'react-redux';
import Input from '../../Field/Input';
import Button from '../../Button';

import {
  userOnInputChange,
  userSettingsUpdate,
  userRemoveErrorMessages,
} from '../../../actions/user';

import './styles.scss';

export default function FormNickname() {
  const dispatch = useDispatch();

  /* control input fields */
  const nickname = useSelector((state) => state.user.nickname);
  const password = useSelector((state) => state.user.password);

  const changeField = (value, identifier) => {
    console.log('changeField', value, identifier);
    dispatch(userOnInputChange(value, identifier));
  };

  /* submit form */
  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(userRemoveErrorMessages());
    // dispatch(userSettingsUpdate());
  };
  return (
    <div className="modal-form nickename">
      <h5 className="title text-primary">Modifier mon pseudo</h5>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Input
          type="text"
          name="nickname"
          placeholder="Pseudo"
          onChange={changeField}
          value={nickname}
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
        <Button type="submit" color="primary">
          C'est prêt !
        </Button>
        <Button type="reset">Annuler</Button>
      </form>
    </div>
  );
}

// /* CLear identifier sessionStorage value */
// if (sessionStorage.getItem('user')) {
//   const user = JSON.parse(sessionStorage.getItem('user'));
//   user[identifier] = '';
//   sessionStorage.setItem('user', JSON.stringify(user));
// }
