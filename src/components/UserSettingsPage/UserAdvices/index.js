/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getUserAdvices, userDeleteAdvice } from '../../../actions/advices';

export default function UserAdvices() {
  const dispatch = useDispatch();

  /* Load user advices from API */
  useEffect(() => {
    dispatch(getUserAdvices());
  }, []);

  const advices = useSelector((state) => state.advices.userAdvices);

  const isLoadedAdvices = useSelector((state) => state.advices.isLoadedAdvices);

  const onDelete = (e) => {
    dispatch(userDeleteAdvice(e.target.dataset.id));
  };

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
        {isLoadedAdvices &&
          advices.map(({ id, title, category, slug }) => (
            <tr key={id}>
              <td>{title}</td>
              <td className="hidden">{category.name}</td>
              <td>
                <div className="icon-wrapper">
                  <Link
                    to={`/conseils/${slug}/editer`}
                    className="icon-inner pencil"
                  >
                    Editer
                  </Link>
                  <button
                    type="button"
                    data-id={id}
                    className="icon-inner trash"
                    onClick={onDelete}
                  >
                    Supprimer
                  </button>
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
