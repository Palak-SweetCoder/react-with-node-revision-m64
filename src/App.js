import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div className="App">
      <h1>MY OWN DATA: {users.length}</h1>
      <ul>
        {
          users.map(user => <li key={user.id}>ID: {user.id}<br/> Name: {user.name} <br/> Email: {user.email}<br/><br/></li>)
        }
      </ul>
    </div>
  );
}

export default App;
