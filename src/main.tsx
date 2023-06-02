import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/styled-engine';

import { type Page } from './models/common';
import { PRIVATE_PAGES, PUBLIC_PAGES } from './constants';
import './styles/index.scss';

import AuthWrapper from './AuthWrapper';
import { AuthContextProvider } from './hooks/auth';

const renderPublicPages = (pages: Page[]) =>
  pages.map(({ path, page }) => <Route key={path} path={path} element={page()} />);

const renderPrivatePages = (pages: Page[]) =>
  pages.map(({ path, page }) => (
    <Route key={path} path={path} element={<AuthWrapper>{page()}</AuthWrapper>} />
  ));

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <AuthContextProvider>
          <Routes>
            {renderPublicPages(PUBLIC_PAGES)}
            {renderPrivatePages(PRIVATE_PAGES)}
          </Routes>
        </AuthContextProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
