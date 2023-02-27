import { USER_LOGIN, userAuthenticationSuccess } from '../actions/user';

import user from '../data/single-user'; // dev only

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case USER_LOGIN:
      console.log('Middleware: user authentication'); // dev only
      store.dispatch(userAuthenticationSuccess(user)); // dev only
      break;
    default:
  }
  next(action);
};

export default userMiddleware;
