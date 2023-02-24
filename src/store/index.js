import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import reducer from 'src/reducers';

import userMiddleware from '../middlewares/userMiddleware';
import advicesMiddleware from '../middlewares/advicesMiddleware';
import articlesMiddleware from '../middlewares/articlesMiddleware';

const enhancers = composeWithDevTools(
  applyMiddleware(userMiddleware, advicesMiddleware, articlesMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;
