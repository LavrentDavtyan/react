import { useEffect, useState } from 'react'
import './App.css'
import { AddUser } from './components/AddUser'
import { UserList } from './components/UserList'
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        axios
        .get("http://localhost:3004/users")
        .then(res=>{
          // console.log(res.data)
          setUsers(res.data)
        })
    },[])

    const addItem = obj => {
        setUsers([...users, obj])
        toast.success("user has been added")
    }

    const deleteUser = id =>{
      
      axios
      .delete(`http://localhost:3004/users/${id}`)
      .then(res => {
          setUsers(users.filter(user => user.id !== id));
          toast.success("User has been deleted");
      })
      .catch(err => {
          toast.error("Failed to delete user");
      });
        
    }

    const salaryUp = id =>{
      const user = users.find(user => user.id === id);

      axios
      .put(`http://localhost:3004/users/${id}`, { ...user, salary: user.salary + 50000 })
      .then(res => {
        setUsers(users.map(user => user.id === id ? res.data : user));
        toast.success("Salary has been up");
      })
      .catch(err => {
          toast.error("Failed to up salary");
      });
    }

    return (
        <div className='row'>
            <ToastContainer/>
            <AddUser
              onAdd = {addItem}
            />
            <UserList
              users = {users} onDelete={deleteUser} onSalaryUp={salaryUp}
            />
        </div>
    )
}

export default App
