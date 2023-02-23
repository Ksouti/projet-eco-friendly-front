import PropTypes from 'prop-types';

import TableRow from './TableRow';

export default function Table({ items }) {
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
          <TableRow
            key={item.id}
            title={item.title}
            category={item.category.name}
            slug={item.slug}
            id={item.id}
          />
        ))}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  items: PropTypes.array.isRequired,
};
