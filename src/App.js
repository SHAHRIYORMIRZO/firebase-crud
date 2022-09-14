import React, { useState, useEffect } from 'react';
import './App.css';
import { db } from './firebase';
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'

function App() {
  const [newName, setNewName] = useState('')
  const [newAge, setNewAge] = useState(0)

  const [users, setUsers] = useState([]);
  const userCollectionRef = collection(db, "users")


  const createUser = async () => {
    await addDoc(userCollectionRef, { name: newName, age: newAge })
  }

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id)
    const newFields = { age: age + 1 }
    await updateDoc(userDoc, newFields)
  }

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id)
    await deleteDoc(userDoc)
  }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef)
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      // console.log(data)
    }
    getUsers();
  }, [users])

  return (
    <div className="App">
      <input placeholder='Name...' type='text' onChange={(e) => setNewName(e.target.value)} />
      <input placeholder='...age' type='number' onChange={(e) => setNewAge(e.target.value)} />
      <button onClick={createUser}>Create</button>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h1>{user.name}</h1>
            <p>{user.age}</p>
            <button onClick={() => updateUser(user.id, user.age)}>Increase Age</button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </div>
        )
      })}
    </div >
  );
}

export default App;
