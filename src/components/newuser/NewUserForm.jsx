// style 
import "./NewUserForm.css"

import { useRef, useState } from "react"
import { v4 as uuidv4 } from "uuid"

function NewUserForm({ addUser }) {
   const image = useRef()
   const firstName = useRef()
   const lastName = useRef()
   const age = useRef()
   const from = useRef()
   const job = useRef()
   const [gender, setGender] = useState("")


   function handleSubmit(e) {
      e.preventDefault()

      const user = {
         image: image.current.value,
         firstName: firstName.current.value,
         lastName: lastName.current.value,
         age: age.current.value,
         from: from.current.value,
         job: job.current.value,
         gender: gender,
         id: uuidv4()
      }
      addUser(user)
   }

   return (
      <div className="overlay">
         <div className="modal">
            <form onSubmit={handleSubmit}>
               <label>
                  <span>Image URL:</span>
                  <input type="url" required ref={image} />
               </label>
               <label>
                  <span>First Name:</span>
                  <input type="text" required ref={firstName} />
               </label>
               <label>
                  <span>Last Name:</span>
                  <input type="text" required ref={lastName} />
               </label>
               <label>
                  <span>Age:</span>
                  <input type="number" required ref={age} />
               </label>
               <label>
                  <span>From:</span>
                  <input type="text" required ref={from} />
               </label>
               <label>
                  <span>Job:</span>
                  <input type="text" ref={job} />
               </label>
               <div className="gender">
                  <span>Gender:</span>
                  <label>
                     <small>Male</small>
                     <input type="radio" name="gender" value="Male" required onChange={(e) => setGender(e.target.value)} />
                  </label>
                  <label>
                     <small>Female</small>
                     <input type="radio" name="gender" value="Female" required onChange={(e) => setGender(e.target.value)} />
                  </label>

               </div>
               <button className="modal-btn">Submit</button>

            </form>
         </div>
      </div>
   )
}

export default NewUserForm