const AuthReducer = (state, action) => {
  if (action.type === 'LOGIN') {
    return { currentUser: action.payload };
  }
  if (action.type === 'LOGOUT') {
    return { currentUser: null };
  } else return state;
};

export default AuthReducer;
