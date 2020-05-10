import * as authActions from '../actions/authActions';

const authState = {
  authenticated: true,
  user: {
    username: 'john.doe@email.com'
  }
};

const authFailed = () => {
  return { authenticated: false, user: null };
};

const authSuccess = (user) => {
  return {
    authenticated: true,
    user: user
  };
};

const authReducer = (state = authState, action) => {
  const type = action.type;
  const payload = action.payload;
  switch (type) {
    case authActions.AUTH_SUCCESS:
      return authSuccess(payload);
    case authActions.AUTH_FAILED:
    case authActions.AUTH_SERV_UNAVAILABLE:
    case authActions.LOGOUT:
      return authFailed();
    default:
      return state;
  }
};
export default authReducer;
