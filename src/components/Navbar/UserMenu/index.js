import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { userLogout } from '../../../actions/user';

import './styles.scss';

export default function UserMenu({
  nickname,
  roles,
  toggleMenu,
  toggleUserMenu,
  avatar,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAdmin = roles.includes('ROLE_ADMIN');
  const isAuthor = roles.includes('ROLE_AUTHOR');
  const isUser = roles.includes('ROLE_USER'); // dev only

  const className = toggleUserMenu ? 'dropdown-menu show' : 'dropdown-menu';

  const handleClick = () => {
    dispatch(userLogout());
    toggleMenu();
    navigate('/', { replace: true });
  };

  return (
    <ul className={className}>
      <img src={avatar} alt={`Avater de ${nickname}`} />
      <li className="menu-item">
        <Link to={`/utilisateurs/${nickname}`} onClick={toggleMenu}>
          Gérer mon compte
        </Link>
      </li>
      <li className="menu-item">
        <Link to="/conseils/ajouter" onClick={toggleMenu}>
          Ajouter un conseil
        </Link>
      </li>
      {(isAdmin || isAuthor || isUser) && (
        <li className="menu-item">
          <a
            href="http://vps-79770841.vps.ovh.net/back_office/connexion"
            target="_blank"
            rel="noreferrer"
            onClick={toggleMenu}
          >
            Accès réservé
          </a>
        </li>
      )}
      <li className="menu-item text-secondary">
        <button type="button" onClick={handleClick}>
          Déconnexion
        </button>
      </li>
    </ul>
  );
}

UserMenu.propTypes = {
  nickname: PropTypes.string.isRequired,
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  toggleMenu: PropTypes.func.isRequired,
  toggleUserMenu: PropTypes.func.isRequired,
  avatar: PropTypes.string.isRequired,
};
