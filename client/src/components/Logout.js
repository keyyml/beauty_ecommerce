import { useHistory } from 'react-router-dom';
import React from 'react';
import axios from 'axios';

function Logout() {

  const history = useHistory()

  const handleLogout = async () => {
    try {
      await axios.get('/logout')
      console.log("logout success")
      history.push("/")
    } catch (error) {
      console.error('Error during logout:', error)
    }
  }

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )

}

export default Logout;