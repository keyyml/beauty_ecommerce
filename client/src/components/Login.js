import React from "react";

function Login(){

    return(
        <>
            <h1>Login to your account</h1>
            <form action="#" method="post">
                <label for="email">Email:</label>
                <input type="text" name="email" />
                <label for="password">Password:</label>
                <input type="password" name="password" />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Login