import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './Menu'
import Users from './users'
import Tasks from './tasks/index'
import Posts from './posts/index'
import SaveTask from './tasks/Save'

export const App = () => {
    return (
        <BrowserRouter>
            <Menu/>
            <div className="margin">
            <Route exact path='/' component={Users}/>
            <Route exact path='/posts/:id' component={ Posts }/>
            <Route exact path='/tasks' component={ Tasks }/>
            <Route exact path='/tasks/save' component={ SaveTask }/>
            <Route exact path='/tasks/save/:userId/:task_Id' component={ SaveTask }/>
            </div>
        </BrowserRouter>
    )
}
