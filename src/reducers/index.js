import { combineReducers } from 'redux';

import userReducer from './user';
import advicesReducer from './advices';
import articlesReducer from './advices';

const rootReducer = combineReducers({
  user: userReducer,
  advices: advicesReducer,
  articles: articlesReducer,
});

export default rootReducer;
