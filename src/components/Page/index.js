import PropTypes from 'prop-types';

import './styles.scss';

export default function Page({ children }) {
  // ScrollToTop

  return <main className="main">{children}</main>;
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
};
