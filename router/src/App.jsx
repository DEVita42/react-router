import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './Welcome';
import Counter from './Counter'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome name="User" age={25} />} />
        <Route path="/counter" element={<Counter />} /> 
      </Routes>
    </Router>
  );
};

export default App;