import React from 'react';
import './header.css'
import { NavBar } from './Burger'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

export const Header = () => {
    return(
        <BrowserRouter>
<section className="header">
    <Route>
    <div className="navBar">
    < NavBar />
    </div>
    </Route>
    <div>
    <h1>Header</h1>
    </div>
</section>
</BrowserRouter>
    )
}