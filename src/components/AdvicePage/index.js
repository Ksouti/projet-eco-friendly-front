import { Navigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { findItem } from '../../utils';

import Page from '../Page';

import './styles.scss';

function AdvicePage() {
  const { slug } = useParams();

  const advice = useSelector((state) => findItem(state.advices.data, slug));
  console.log(advice);

  return (
    <Page>
      <div className="advice">
        <p>Page d'un conseil</p>
      </div>
    </Page>
  );
}

export default AdvicePage;
