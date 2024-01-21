import { Box } from '@mui/material';
import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { Main } from './Main';
import { Nav } from './Nav';
const AppLayout = () => {
    return (<Box sx={{
            height: '100vh',
            display: 'flex',
        }}>
      <Nav />
      <Main>
        <Outlet />
        </Main>
    </Box>);
};
export default AppLayout;
