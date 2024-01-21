import * as React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ROUTES } from 'config/routes';
import { MainRoutes } from '../AppRoutes/MainRoutes';
import { AppLayout } from '../Layouts/AppLayout';
const RootPage = () => {
    return (<BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path={ROUTES.main.mask} element={<MainRoutes />}/>
        </Route>
        <Route index element={<Navigate to={ROUTES.main.createRoute()}/>}/>
      </Routes>
    </BrowserRouter>);
};
export default RootPage;
