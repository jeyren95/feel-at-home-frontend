import { createContext, useReducer, useContext, ReactElement } from 'react';

import { AuthActionType, type AuthState } from '../../models/auth';
import authReducer from './reducer';

const INITIAL_AUTH_STATE: AuthState = {
  token: null,
};

const AuthContext = createContext<AuthState>(INITIAL_AUTH_STATE);
AuthContext.displayName = 'AuthContext';

const useAuthState = () => {
  const [authState, dispatch] = useReducer(authReducer, INITIAL_AUTH_STATE);

  const login = (token: string | null) =>
    dispatch({
      type: AuthActionType.LOGIN,
      token,
    });

  const logout = () => dispatch({ type: AuthActionType.LOGOUT });

  return {
    ...authState,
    login,
    logout,
  };
};

export const AuthContextProvider = ({ children }: { children: ReactElement }) => {
  const authState = useAuthState();
  return <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const authContext = useContext(AuthContext);
  return authContext;
};
