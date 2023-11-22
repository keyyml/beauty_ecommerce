import React, { useState, useEffect } from "react";
import { Switch, Route } from 'react-router-dom';
import NavBar from "./NavBar";
import Cart from "./Cart";
import User from "./User";
import Register from "./Register";

function App() {



    return (
        <div className="App">
            <NavBar />
            <Register />
            <Switch>
                <Route exact path="/cart">
                    <Cart />
                </Route>
                <Route exact path="/user">
                    <User />
                </Route>
            </Switch>
        </div>
    )
}

export default App;