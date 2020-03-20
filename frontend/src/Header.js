import React from 'react';
import './header.css'
import { NavBar } from './Burger'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import logo from './logo-stat.png'

export const Header = () => {
    return(
        <BrowserRouter>
    <section className="header">
    <div>
         <img src={logo} alt="Logo"/>
         </div>
       
        <div>
        <h1>Statistics</h1>
        </div>
        <Route>
        <div className="navBar">
        < NavBar />
        </div>
        </Route>
        
    </section>

    </BrowserRouter>
        )
    }