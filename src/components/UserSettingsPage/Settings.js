import Button from '../Button';

import avatar from './avatar-bear.png';

import './settings.scss';

export default function Settings({ user }) {
  return (
    <div className="settings">
      <div className="settings-inner">
        <div className="settings-avatar">
          {user.avatar ? (
            <img
              src="https://picsum.photos/id/147/100/100.jpg"
              alt="Avatar de l'utilisateur"
              className="avatar"
            />
          ) : (
            <img src={avatar} alt="Avatar par defaut" className="avatar" />
          )}
          <Button type="button" color="link-primary">
            Modifier
          </Button>
        </div>
        <div className="settings-user">
          <div className="settings-row">
            <div className="settings-body">
              <h5 className="settings-title">Pseudo</h5>
              <p className="settings-text nickname">{user.nickname}</p>
            </div>
            <Button type="button" color="primary">
              Modifier
            </Button>
          </div>
          <div className="settings-row">
            <div className="settings-body">
              <h5 className="settings-title">Email</h5>
              <p className="settings-text email">{user.email}</p>
            </div>
            <Button type="button" color="primary">
              Modifier
            </Button>
          </div>
          <div className="settings-row">
            <div className="settings-body">
              <h5 className="settings-title">Nom et Prénom</h5>
              <p className="settings-text fullname">{`${user.lastname} ${user.firstname}`}</p>
            </div>
            <Button type="button" color="primary">
              Modifier
            </Button>
          </div>
        </div>
        <div className="settings-controllers">
          <Button type="button" color="primary">
            Changer de mot de passe
          </Button>
          <div className="settings-warning-zone">
            <Button type="button" color="outline-secondary">
              Supprimer mon compte
            </Button>
            <p className="warning-text">
              Attention après confirmation cette action est irreverssible !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
