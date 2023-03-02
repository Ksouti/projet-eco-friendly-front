/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */

// !!! problems : les cards ne s'affichent pas

import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { findItemsByCategory } from '../../utils';

import Card from '../Card';

import './styles.scss';

function AdvicesCardsList() {
  const { name } = useParams();

  const advices = useSelector((state) =>
    findItemsByCategory(state.advices.data, name),
  );

  return (
    <div className="advices">
      <h2 className="advices-sentence">Suivez vos conseils</h2>
      <div className="advices-list">
        {advices.map((advice) => (
          <Link
            to={`/conseils/${advice.slug}`}
            key={advice.id}
            className="advice-card"
          >
            <Card
              title={advice.title}
              category={advice.category}
              content={advice.content}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AdvicesCardsList;
