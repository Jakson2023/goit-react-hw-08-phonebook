import { Suspense } from 'react';
import { AppBarComp } from './AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export const Layout = () => {
  return (
    <div>
      <AppBarComp />
      <Suspense
        fallback={
          <Box
            sx={{ width: '100%', position: 'absolute', top: 65, zIndex: 1100 }}
          >
            <LinearProgress color="warning" />
          </Box>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};
