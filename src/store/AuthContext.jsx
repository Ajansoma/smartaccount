import { useEffect } from 'react';
import { createContext, useReducer } from 'react';
import AuthReducer from './AuthReducer';

const INITIAL_STATE = {
  currentUser: JSON.parse(localStorage.getItem('currentUser')) || null,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = function ({ children }) {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
  }, [state.currentUser]);
  return (
    <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
