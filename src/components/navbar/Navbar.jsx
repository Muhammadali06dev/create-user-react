import "./Navbar.css"

function Navbar({ usersLength }) {
   return (
      <div className="navbar">
         <div className="navbar-container container">
            <h1 className="navbar-logo">CUser</h1>
            <h2 className="navbar-counter">{usersLength ? "Users: " + usersLength : "No Users :("}</h2>
         </div>
      </div>
   )
}

export default Navbar