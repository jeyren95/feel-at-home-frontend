import { Page, UrlPath } from './models/common';

import LoginPage from './pages/LoginPage';
import Error404Page from './pages/Error404Page';
import DashboardPage from './pages/DashboardPage';

export const PUBLIC_PAGES: Page[] = [
  { path: UrlPath.LOGIN, page: LoginPage },
  { path: UrlPath.NOT_FOUND, page: Error404Page },
];

export const PRIVATE_PAGES: Page[] = [{ path: UrlPath.DASHBOARD, page: DashboardPage }];
