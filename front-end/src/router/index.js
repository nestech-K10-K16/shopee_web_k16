import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Example from '../pages/example';
import ExampleOther from '../pages/exampleOther';

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/example" element={<Example />} />
      <Route path="/example-other" element={<ExampleOther />} />
    </Routes>
  );
};

export default AppRoute;
