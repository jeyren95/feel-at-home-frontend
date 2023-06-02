import { AuthActionType, AuthDispatchAction, AuthState } from '../../models/auth';

const authReducer = (authState: AuthState, action: AuthDispatchAction) => {
  switch (action.type) {
    case AuthActionType.LOGIN:
      return { token: authState.token };
    case AuthActionType.LOGOUT:
      return { token: null };
    default:
      return { token: null };
  }
};

export default authReducer;
