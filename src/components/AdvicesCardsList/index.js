/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Card from '../Card';

import './styles.scss';

function AdvicesCardsList() {
  // Find last four advices
  const advices = useSelector((state) => state.advices.lastFourAdvices);

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
