import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Welcome from './Welcome';
import Counter from './Counter';
import ShowGithubUser from './ShowGithubUser';
import NotFound from './NotFound';
import GithubUserList from './GithubUserList'; 

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Welcome</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/users">GitHub Users</Link> 
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Welcome name="User" age={25} />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<GithubUserList />}>
          <Route index element={<div>Add a user and select it</div>} /> 
        </Route>
        <Route path="/users/:username" element={<ShowGithubUser />} /> 
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </Router>
  );
};

export default App;
