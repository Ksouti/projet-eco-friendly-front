import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import pencil from './pencil-outline.svg';
import trash from './trash-outline.svg';

import './styles.scss';

export default function Advices({ items, onDelete }) {
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
