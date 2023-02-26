import { useContext } from 'react';
import PropTypes from 'prop-types';
import { ModalContext } from '../../../context/ModalContext';

import Modal from '../../Modal';
import Button from '../../Button';
// import FormNickname from '../../Form/UserSettingsForm/FormNickname';
// import FormEmail from '../../Form/UserSettingsForm/FormEmail';
// import FormFullname from '../../Form/UserSettingsForm/FormFullname';
// import FormPassword from '../../Form/UserSettingsForm/FormPassword';
// import FormDeleteAccount from '../../Form/UserSettingsForm/FormDeleteAccount';
// import FormDeleteAdvice from '../../Form/UserSettingsForm/FormDeleteAdvice';
import FormAvatar from '../../Form/UserSettingsForm/FormAvatar';

import './styles.scss';

export default function Account({ user }) {
  const { toggleModal } = useContext(ModalContext);

  return (
    <section className="account">
      <Modal>
        {/* <FormNickname nickname={user.nickname} /> */}
        {/* <FormEmail email={user.email} /> */}
        {/* <FormFullname lastname={user.lastname} firstname={user.firstname} /> */}
        {/* <FormPassword /> */}
        {/* <FormDeleteAccount /> */}
        {/* <FormDeleteAdvice /> */}
        <FormAvatar />
      </Modal>

      <div className="account-inner">
        <div className="account-avatar">
          <img src={user.avatar} alt="Avatar par defaut" className="avatar" />
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
        <div className="account-user">
          <div className="account-row">
            <div className="account-body">
              <h5 className="account-title">Pseudo</h5>
              <p className="account-text nickname">{user.nickname}</p>
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
          <div className="account-row">
            <div className="account-body">
              <h5 className="account-title">Email</h5>
              <p className="account-text email">{user.email}</p>
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
          <div className="account-row">
            <div className="account-body">
              <h5 className="account-title">Nom et Prénom</h5>
              <p className="account-text fullname">{`${user.lastname} ${user.firstname}`}</p>
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
        <div className="account-controllers">
          {/* Opens a modal window for modifying password */}
          <Button
            type="button"
            color="primary"
            name="password"
            onclick={toggleModal}
          >
            Changer de mot de passe
          </Button>
          <div className="account-warning-zone">
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
    </section>
  );
}

Account.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    lastname: PropTypes.string,
    firstname: PropTypes.string,
  }),
};

Account.defaultProps = {
  user: PropTypes.shape({
    lastname: '',
    firstname: '',
  }),
};
