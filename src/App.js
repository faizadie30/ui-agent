import React from 'react';
import ToggleColorMode from './common/components/toggleColorMode/ToggleColorMode';
import Router from './common/routers/Router';

function App() {
  return (
    <>
      <ToggleColorMode />
      <Router />
    </>
  );
}

export default App;
