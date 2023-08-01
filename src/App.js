import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  const url = "https://jsonplaceholder.typicode.com/users";
  

  const data = () => {
    return axios.get(url).then((res) => setUsers(res.data));
      
  }


  useEffect(() => {
    data();
  }, []);


  const App = users.filter(
    (select) =>
      
      select.website.toLowerCase().includes(search.toLowerCase())||
      select.name.toLowerCase().includes(search.toLowerCase())||
      select.email.toLowerCase().includes(search.toLowerCase())||
      select.username.toLowerCase().includes(search.toLowerCase())
      
  
  );

  return (
    <div className="App">
      <h1>Welcome</h1>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {App.map((select) => (
            <tr key={select.id}>
              <td>{select.name}</td>
              <td>{select.username}</td>
              <td>{select.email}</td>
              <td>{select.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
