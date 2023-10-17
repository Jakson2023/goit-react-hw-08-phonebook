
// import { Toaster } from 'react-hot-toast';

import { Suspense } from 'react';
import {  AppBarComp } from './AppBar/AppBar';
import { Outlet } from 'react-router-dom';
export const Layout = () => {
  return (
    <div >
      <AppBarComp />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet/>
      </Suspense>
     
    </div>
  );
};
