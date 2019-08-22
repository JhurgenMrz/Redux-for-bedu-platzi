import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './Menu'
import Users from './users'
import {Tasks} from './tasks'

export const App = () => {
    return (
        <BrowserRouter>
            <Menu/>
            <div className="margin">
            <Route exact path='/' component={Users}/>
            <Route exact path='/tareas' component={ Tasks }/>
            </div>
        </BrowserRouter>
    )
}
