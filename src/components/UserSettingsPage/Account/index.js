import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { openModal } from '../../../actions/common';

import Button from '../../Button';
import FormNickname from '../../Form/UserSettingsForm/FormNickname';
import FormEmail from '../../Form/UserSettingsForm/FormEmail';
import FormFullname from '../../Form/UserSettingsForm/FormFullname';
import FormPassword from '../../Form/UserSettingsForm/FormPassword';
import FormDeleteAccount from '../../Form/UserSettingsForm/FormDeleteAccount';
import FormDeleteAdvice from '../../Form/UserSettingsForm/FormDeleteAdvice';
import FormAvatar from '../../Form/UserSettingsForm/FormAvatar';

import './styles.scss';

export default function Account({ user }) {
  const dispatch = useDispatch();

  /**
   * Retunrs the content of the modal window
   *
   * @param {String} contentName
   * @returns
   */
  const modalContent = (contentName) => {
    switch (contentName) {
      case 'nickname':
        return <FormNickname nickname={user.nickname} />;
      case 'email':
        return <FormEmail email={user.email} />;
      case 'fullname':
        return (
          <FormFullname lastname={user.lastname} firstname={user.firstname} />
        );
      case 'password':
        return <FormPassword />;
      case 'delete-account':
        return <FormDeleteAccount />;
      case 'delete-advice':
        return <FormDeleteAdvice />;
      case 'avatar':
        return <FormAvatar />;
      default:
        return null;
    }
  };

  const toggleModal = (e) => {
    const { name } = e.target;
    dispatch(openModal(modalContent(name)));
  };

  return (
    <section className="account">
      <div className="account-inner">
        <div className="account-avatar">
          <img src={user.avatar} alt="Avatar par defaut" className="avatar" />
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
          <Button
            type="button"
            color="primary"
            name="password"
            onclick={toggleModal}
          >
            Changer de mot de passe
          </Button>
          <div className="account-warning-zone">
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
