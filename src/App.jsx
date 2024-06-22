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

    return (
      <div className='row'>
        <ToastContainer/>
        <AddUser
          onAdd = {addItem}
        />
        <UserList
          users = {users}
        />
      </div>
    )
}

export default App
