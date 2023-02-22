import PropTypes from 'prop-types';

import './styles.scss';

export default function Page({ chilren }) {
  // ScrollToTop

  return <main className="main">{chilren}</main>;
}

Page.PropTypes = {
  children: PropTypes.node.isRequired,
};
