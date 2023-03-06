import { useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { getUserAdvices, userDeleteAdvice } from '../../actions/advices';
import { openModal } from '../../actions/common';
import { userLogout } from '../../actions/user';

import Page from '../Page';
import Button from '../Button';
import FormNickname from '../Form/UserSettingsForm/FormNickname';
import FormEmail from '../Form/UserSettingsForm/FormEmail';
import FormFullname from '../Form/UserSettingsForm/FormFullname';
import FormPassword from '../Form/UserSettingsForm/FormPassword';
import FormDeleteAccount from '../Form/UserSettingsForm/FormDeleteAccount';
import FormDeleteAdvice from '../Form/UserSettingsForm/FormDeleteAdvice';
import FormAvatar from '../Form/UserSettingsForm/FormAvatar';

import pencil from './pencil-outline.svg';
import trash from './trash-outline.svg';

import './styles.scss';

export default function UserSettingsPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { nickname } = useParams();

  /* get state informations */
  const user = useSelector((state) => state.user.data);
  const userAdvices = useSelector((state) => state.advices.userAdvices);
  /* end get state informations */

  /* check if the nickname is the same as the user's nickname */
  if (nickname !== user.nickname) {
    dispatch(userLogout());
    navigate('/', { replace: true });
  }

  useEffect(() => {
    dispatch(getUserAdvices());
  }, []);

  const onDelete = (id) => {
    dispatch(userDeleteAdvice(id));
  };

  return (
    <Page>
      {userAdvices && (
        <div className="settings">
          <Account user={user} />
          <Advices items={userAdvices} onDelete={onDelete} />
        </div>
      )}
    </Page>
  );
}

function Account({ user }) {
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

function Advices({ items, onDelete }) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Tous vos conseils</th>
          <th scope="col" className="hidden">
            Catégories
          </th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <AdvicesRow
            key={item.id}
            title={item.title}
            category={item.category.name}
            slug={item.slug}
            id={item.id}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
}

Advices.propTypes = {
  items: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

// eslint-disable-next-line object-curly-newline
function AdvicesRow({ id, title, category, slug, onDelete }) {
  return (
    <tr>
      <td>{title}</td>
      <td className="hidden">{category}</td>
      <td>
        <div className="icon-wrapper">
          {/* Warning, this is a modal confirmation window, only deletes if validated */}
          <Link to={`/conseils/${slug}/editer`} className="icon-inner">
            <img src={pencil} alt="Icone d'un crayon" className="icon-pencil" />
          </Link>
          <button
            type="button"
            className="icon-inner"
            onClick={() => onDelete(id)}
          >
            <img
              src={trash}
              alt="Icone d'une poubelle"
              className="icon-trash"
            />
          </button>
        </div>
      </td>
    </tr>
  );
}

AdvicesRow.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
