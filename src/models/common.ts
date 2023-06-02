import { ReactElement } from 'react';

export enum UrlPath {
  DASHBOARD = '/dashboard',
  LOGIN = '/login',
  NOT_FOUND = '*',
}

export interface Page {
  path: UrlPath;
  page: () => ReactElement;
}
