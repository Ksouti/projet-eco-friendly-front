/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import { useParams } from 'react-router-dom';
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
          <div key={advice.id} className="advice-card">
            <Card
              title={advice.title}
              category={advice.category}
              content={advice.content}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdvicesCardsList;
