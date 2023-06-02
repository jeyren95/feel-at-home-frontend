export enum AuthActionType {
  LOGIN,
  LOGOUT,
}

export type AuthState = {
  token: string | null;
};

export interface AuthDispatchAction extends Partial<AuthState> {
  type: AuthActionType;
}
