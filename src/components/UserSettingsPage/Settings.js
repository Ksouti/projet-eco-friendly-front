import { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';
import Modal from '../Modal';

import Button from '../Button';

import avatar from './avatar-bear.png';

import './settings.scss';

export default function Settings({ user }) {
  const { toggleModal } = useContext(ModalContext);

  return (
    <div className="settings">
      <Modal>{/* TODO */}</Modal>

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
          {/* Opens a modal window for modifying avatar with 5 default avatars */}
          <Button
            type="button"
            color="link-primary"
            name="avatar"
            onclick={toggleModal}
          >
            Modifier
          </Button>
        </div>
        <div className="settings-user">
          <div className="settings-row">
            <div className="settings-body">
              <h5 className="settings-title">Pseudo</h5>
              <p className="settings-text nickname">{user.nickname}</p>
            </div>
            {/* Opens a modal window for modifying the nickname edit modal */}
            <Button
              type="button"
              color="primary"
              name="nickname"
              onclick={toggleModal}
            >
              Modifier
            </Button>
          </div>
          <div className="settings-row">
            <div className="settings-body">
              <h5 className="settings-title">Email</h5>
              <p className="settings-text email">{user.email}</p>
            </div>
            {/* Opens a modal window for modifying an email edit modal */}
            <Button
              type="button"
              color="primary"
              name="email"
              onclick={toggleModal}
            >
              Modifier
            </Button>
          </div>
          <div className="settings-row">
            <div className="settings-body">
              <h5 className="settings-title">Nom et Prénom</h5>
              <p className="settings-text fullname">{`${user.lastname} ${user.firstname}`}</p>
            </div>
            {/* Opens a modal window for modifying first and last name */}
            <Button
              type="button"
              color="primary"
              name="fullname"
              onclick={toggleModal}
            >
              Modifier
            </Button>
          </div>
        </div>
        <div className="settings-controllers">
          {/* Opens a modal window for modifying password */}
          <Button
            type="button"
            color="primary"
            name="password"
            onclick={toggleModal}
          >
            Changer de mot de passe
          </Button>
          <div className="settings-warning-zone">
            {/* Opens a modal window for delete user account */}
            <Button
              type="button"
              color="outline-secondary"
              name="delete"
              onclick={toggleModal}
            >
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
