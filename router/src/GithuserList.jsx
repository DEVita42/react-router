import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const GithubUserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div>
      <h2>GitHub Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.login}>
            <Link to={`/users/${user.login}`}>{user.login}</Link> 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GithubUserList;
