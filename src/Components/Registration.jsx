import React, { useState } from 'react'
import { Link,useNavigate } from "react-router-dom"
import axios from "axios"

const Registration = () => {

    const [ username,setUsername ] = useState("")
    const [ email,setEmail ] = useState("")
    const [ password,setPassword ] = useState("")
    const [ error,setError ] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()    
        axios.post('https://recipe-app-backend-eight.vercel.app/auth/register',{username,email,password})
        .then(result => {
             if(result.data.message == "user register successfully"){
                 setError("")
                 navigate('/auth/login')
             }
          else if(result.data.message == "Please fill all fields"){
            setError("Please fill all fields")
          }
          else if(result.data.message == "user already exist"){
            console.log(result.data.message);
            setError("Email already exist")
          } else {setError("")}
          console.log(result);
          
        }).catch(err => console.log(err))
    }

  return (
    <>
      <div className="registration-container">
        <div className="register-sub-box">
         <form onSubmit={handleSubmit}>
           <h1 className="title">Registration</h1>  
           <h3>Name</h3>
           <input 
             type="text"
             placeholder='Your Name'
             onChange={(e) => setUsername(e.target.value)}
            //  required
           />  
            <h3>Email</h3>
            <input 
             type="text"
             placeholder='Your Email'
             onChange={(e) => setEmail(e.target.value)}
            //  required
           /> 
           <h3>Password</h3>
            <input 
             type="text"
             placeholder='Password'
             onChange={(e) => setPassword(e.target.value)}
            //  required
           /> 
           <button type='submit'>Register</button>
           <p className='error'>{error}</p>

         </form>
         <p className='route-link'><Link to = "/auth/login">Already have an account?</Link></p>
        </div>  
      </div> 
    </>
  )
}

export default Registration
