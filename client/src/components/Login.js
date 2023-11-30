import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Login({ fetchUser }){

  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    
    try {
      await axios.post('/login', { email, password })
      e.target.reset()
      history.push("/profile")
    } catch (error) {
      console.error('Error during login:', error)
    }
  }
    
  return (
      <div>
        <h1>Login to your account</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" />
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" />
          <button type="submit">Submit</button>
        </form>
      </div>
  )
}

export default Login