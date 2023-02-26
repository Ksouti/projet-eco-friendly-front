import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import pencil from './pencil-outline.svg';
import trash from './trash-outline.svg';

// eslint-disable-next-line object-curly-newline
export default function AdvicesRow({ id, title, category, slug }) {
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
          <Link to={`/api/advices/${id}`} className="icon-inner">
            <img
              src={trash}
              alt="Icone d'une poubelle"
              className="icon-trash"
            />
          </Link>
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
};
