import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route } from 'react-router-dom';

import UrlPath from './constants';

import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import Error404Page from './pages/Error404Page';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path={UrlPath.LOGIN} element={<LoginPage />} />
      <Route path={UrlPath.DASHBOARD} element={<DashboardPage />} />
      <Route path={UrlPath.NOT_FOUND} element={<Error404Page />} />
    </BrowserRouter>
  </React.StrictMode>,
);
