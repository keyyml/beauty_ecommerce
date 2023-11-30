import { useHistory } from 'react-router-dom';
import React from 'react';
import axios from 'axios';

function Logout() {

  const history = useHistory()

  const handleLogout = async () => {
    try {
      const response = await axios.get('/logout')
      const { message } = response.data
      if (message === "Logout successful") {
        console.log("logout success")
      } else if (message === "Logout unavailable") {
        console.log("Logout unavailable")
      }
      history.push("/")
    } catch (error) {
      console.error('Error during logout:', error)
    }
  }

  return (
    <div >
      <button className="rounded px-6 py-4 mt-6 hover:bg-zinc-700" onClick={handleLogout}>Logout</button>
    </div>
  )

}

export default Logout;