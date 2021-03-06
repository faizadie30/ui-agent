import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../../features/auth/Login';

const Router = () => {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default Router;
