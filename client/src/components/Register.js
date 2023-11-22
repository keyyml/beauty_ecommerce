import React from "react";

function Register(){

    return(
        <>
            <h1>Create an account</h1>
            <form action="#" method="post">
                <label for="email">Email:</label>
                <input type="text" name="username" />
                <label for="password">Password:</label>
                <input type="password" name="password" />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Register