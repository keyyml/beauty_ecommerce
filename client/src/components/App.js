import React from "react";
import { Switch, Route } from 'react-router-dom';
import NavBar from "./NavBar";
import Cart from "./Cart";
import Register from "./Register";
import Login from "./Login";
import Logout from "./Logout";

function App() {



    return (
        <div className="App">
            <NavBar />
            <Switch>
                <Route exact path="/cart">
                    <Cart />
                </Route>
                <Route exact path="/register">
                    <Register />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/logout">
                    <Logout />
                </Route>
            </Switch>
        </div>
    )
}

export default App;
