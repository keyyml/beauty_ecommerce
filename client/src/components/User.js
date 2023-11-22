import React from "react";

function User({ user }){

    
    return(
        <> 
            <h1> Welcome to BeautyEcommerce</h1>
            <h3>Account Info:</h3>
            <p>Name: {user.first_name} {user.last_name}</p>
            <p>Email: {user.email}</p>
            <button>ADD ADDRESS</button>
            <button>ADD PHONE NUMBER</button>
            <h2>Reviews: </h2>
            <p></p>
        </>
    )
}

export default User