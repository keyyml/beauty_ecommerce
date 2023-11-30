import React, { useEffect, useState } from "react";
import axios from "axios";

function User({ user }) {


  return (
    <>
      {user ? (
        <div>
          <h1>Welcome to BeautyEcommerce</h1>
          <h3>Account Info:</h3>
          <p>Name: {user.first_name} {user.last_name}</p>
          <p>Email: {user.email}</p>
          <button>ADD ADDRESS</button>
          <button>ADD PHONE NUMBER</button>
          <h2>Reviews: </h2>
          <p></p>
        </div>
      ) : (
        <h1>LOADING..</h1>
      )}
    </>
  );
}

export default User;
