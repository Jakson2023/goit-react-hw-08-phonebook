
// import { Toaster } from 'react-hot-toast';

import { Suspense } from 'react';
import { AppBar } from './AppBar/AppBar';
import { Outlet } from 'react-router-dom';
export const Layout = () => {
  return (
    <div >
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet/>
      </Suspense>
     
    </div>
  );
};
