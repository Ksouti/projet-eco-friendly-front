import PropTypes from 'prop-types';

import AppMenu from '../AppMenu';
import UserMenu from '../UserMenu';

import './styles.scss';

export default function Menu({
  categories,
  handleClickModal,
  handleClickUserMenu,
  toggleMenu,
  toggleUserMenu,
  userIsLoaded,
  user,
}) {
  return (
    <>
      <AppMenu
        categories={categories}
        handleClickModal={handleClickModal}
        handleClickUserMenu={handleClickUserMenu}
        userIsLoaded={userIsLoaded}
        user={user}
      />
      {userIsLoaded && user && (
        <UserMenu
          nickname={user.nickname}
          roles={user.roles}
          toggleUserMenu={toggleUserMenu}
          toggleMenu={toggleMenu}
          avatar={user.avatar}
        />
      )}
    </>
  );
}

Menu.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handleClickModal: PropTypes.func.isRequired,
  handleClickUserMenu: PropTypes.func.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  toggleUserMenu: PropTypes.bool.isRequired,
  userIsLoaded: PropTypes.bool,
  user: PropTypes.object,
};

Menu.defaultProps = {
  userIsLoaded: false,
  user: null,
};
