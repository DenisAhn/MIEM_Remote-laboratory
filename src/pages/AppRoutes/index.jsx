import * as React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTES } from 'config/routes';
import { MainRoutes } from './MainRoutes';
const AppRoutes = () => {
    return (<Routes>
      <Route>
        <Route path={ROUTES.main.async.mask} element={<MainRoutes />}/>
        <Route index element={<Navigate to={ROUTES.main.async.createRoute()}/>}/>
      </Route>
    </Routes>);
};
export default React.memo(AppRoutes);
