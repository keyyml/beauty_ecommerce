import React from 'react';
import axios from 'axios';

function Logout() {

  const handleLogout = async () => {
    try {
      await axios.get('/logout')
      console.log("logout success")
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