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


// deadline: շաբաթ 16:00
// Լսարանում արվածին ավելացնել փոփոխություն.
// UserList-ում յուրաքանչյուր տողի համար ունենալ նաև delete button, քլիկի ժամանակ, տվյալը հեռացնել սերվերից  և. անմիջապես update անել table -ը
// Prop-Types -ով սահմանել սպասվող ֆունկցիայի տիպը
// Toastify-ով ցույց տալ հաղորդագրություն, երբ տվյալը հեռացվում է
// ջնջելու համար axios.delete հարցում ենք անում URL/users/:id, որտեղ :id-ի փոխարեն քլիկ արված մարդու id-ն պետք է լինի:
// ունենալ նաև salary up button, որի քլիկի ժամանակ տվյալ մարդու աշխատավարձը 50.000-ով կբարձրանա, այդ դեպքում անհրաժեշտ է կատարել PUT տիպի հարցում, axios.put դեպի URL/users/:id-ն  ներառելով նաև payload օբյեկտը, որը կունենա {salary} տեսքը: Փոփոխությունը կրկին ցուցադրել անմիջապես
// Այն մարդիկ, որոնց աշխատավարձը ավելի բարձր է, qan 800.000-ը , համապատասխան tr-ը ցուցադրել այլ գույնով:
// ուսումնասիրել նաև react-hook-formի հետ կիիրառվող վալիդացիոն սխեմաներից՝ YUP-ը և մեեր կողմից իրականացված վալիդիացիան փոխարինիել դրանով:  (edited) 