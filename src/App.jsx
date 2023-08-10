// style
import './App.css'

// components
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import NewUserForm from "./components/newuser/NewUserForm"
import UserList from "./components/userlist/UserList"
import { useState } from 'react'

function App() {
  const [users, setUsers] = useState([])
  const [showModal, setShowModal] = useState(false)

  //Delete users
  function handleDelete(id) {
    setUsers(prev => {
      return prev.filter(user => id !== user.id)
    })
  }

  //Add user
  function addUser(user) {
    setUsers(prev => {
      return [...prev, user]
    })
    setShowModal(false)
  }

  //Close modal
  function closeModal(e) {
    if (e.target.classList.value === "overlay" || e.key == "Escape") setShowModal(false)
  }

  return (
    <div onClick={closeModal} onKeyDown={closeModal} className='App'>

      <Navbar usersLength={users.length} />

      <main>
        {showModal && <NewUserForm addUser={addUser} />}
        <UserList users={users} handleDelete={handleDelete} />
        {!users.length && <div className='no-users'>No Users</div>}
      </main>
      <button onClick={() => setShowModal(true)} className='create-user'>Create User</button>
      <Footer />

    </div>
  )
}

export default App
