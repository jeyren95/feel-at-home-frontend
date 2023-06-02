import { type ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

import { UrlPath } from './models/common';
import { useAuthContext } from './hooks/auth';

const AuthWrapper = ({ children }: { children: ReactElement }) => {
  const { token } = useAuthContext();

  if (!token) {
    return <Navigate to={UrlPath.LOGIN} />;
  }

  return children;
};

export default AuthWrapper;
