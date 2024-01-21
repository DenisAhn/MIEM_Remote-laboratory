import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from 'config/routes';
import { MainPage } from "./MainPage";
import { AsyncPage } from "./AsyncPage";
import { CompilesPage } from "./CompilesPage";
import { AboutPage } from "./AboutPage";
import { DemoPage } from "./Demo";
export const MainRoutes = () => {
    return (<Routes>
      <Route>
        <Route index path={ROUTES.main.mask} element={<React.Suspense>
              <MainPage />
            </React.Suspense>}/>
          <Route index path={ROUTES.main.async.mask} element={<React.Suspense>
                      <AsyncPage />
                  </React.Suspense>}/>
          <Route index path={ROUTES.main.about.mask} element={<React.Suspense>
                      <AboutPage />
                  </React.Suspense>}/>
          <Route index path={ROUTES.main.compiles.mask} element={<React.Suspense>
                      <CompilesPage />
                  </React.Suspense>}/>
          <Route index path={ROUTES.main.demo.mask} element={<React.Suspense>
                      <DemoPage />
                  </React.Suspense>}/>
      </Route>
    </Routes>);
};
export default observer(MainRoutes);
