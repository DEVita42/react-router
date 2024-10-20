import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './Welcome';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome name="User" age={25} />} />
      </Routes>
    </Router>
  );
};

export default App;