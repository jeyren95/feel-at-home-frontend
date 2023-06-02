import { type ReactElement } from 'react';

import LoginForm from '../components/auth/LoginForm';

const LoginPage = (): ReactElement => (
  <div className="public-page">
    <LoginForm />
  </div>
);

export default LoginPage;
