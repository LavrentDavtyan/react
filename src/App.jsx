import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Signup } from './Signup';

function App() {
  const [users, setUsers] = useState([
      {id: 101, name: "Arsen", surname: "Aramian", login: "ars@example.com", password: "password123"},
  ]);

  const handleSubmit = (newUser) => {
      setUsers([...users, { id: Date.now(), ...newUser }]);
  };

  return (
    <>
      <Signup users={users} onSubmit={handleSubmit}/>
    </>
  );
}

export default App;
