import React from 'react';
import axios from 'axios';

function Register(){
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const first_name = e.target.first_name.value;
        const last_name = e.target.last_name.value;
    
        try {
          await axios.post('/register', { email, password, first_name, last_name });
          e.target.reset()
        } catch (error) {
          console.error('Error during registration:', error);
        }

    };
    
    return (
        <div>
          <h1>Create an account</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="first_name">First Name:</label>
            <input type="text" name="first_name" />
            <label htmlFor="last_name">Last Name:</label>
            <input type="text" name="last_name" />
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" />
            <button type="submit">Submit</button>
          </form>
        </div>
    );
};
    

export default Register