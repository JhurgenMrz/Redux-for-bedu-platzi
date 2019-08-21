import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './Menu'
import {Users} from './users'

export const App = () => {
    return (
        <BrowserRouter>
            <Menu/>
            <Route exact path='/' component={Users}/>
        </BrowserRouter>
    )
}
