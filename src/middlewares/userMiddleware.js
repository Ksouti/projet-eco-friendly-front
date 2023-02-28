/* eslint-disable no-case-declarations */
import {
  USER_LOGIN,
  userAuthenticationSuccess,
  USER_REGISTER,
  userRegisterSuccess,
  // userAuthenticationError,
} from '../actions/user';

import user from '../data/single-user'; // dev only

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case USER_LOGIN:
      console.log('Middleware: user authentication'); // dev only
      store.dispatch(userAuthenticationSuccess(user)); // dev only
      break;
    case USER_REGISTER:
      console.log('Middleware: user registration'); // dev only
      const data = {
        email: store.getState().user.email,
        password: store.getState().user.password,
        nickname: store.getState().user.nickname,
        firstname: store.getState().user.firstname,
        lastname: store.getState().user.lastname,
      };
      store.dispatch(userRegisterSuccess(data)); // dev only

      // axios
      //   .post('http://localhost:3000/api/users/register', {
      //     email: store.getState().user.email,
      //     password: store.getState().user.password,
      //     nickname: store.getState().user.nickname,
      //     firstname: store.getState().user.firstname,
      //     lastname: store.getState().user.lastname,
      //   })
      //   .then((response) => {
      //     console.log(response); // dev only
      //     store.dispatch(userRegisterSuccess(response.data));
      //   })
      //   .catch((error) => {
      //     console.log(error); // dev only
      //     store.dispacth(userAuthenticationError(error));
      //   });
      break;
    default:
  }
  next(action);
};

export default userMiddleware;
