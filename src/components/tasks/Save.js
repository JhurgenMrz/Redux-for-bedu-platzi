import React from 'react'
import {connect}from 'react-redux';
import * as tasksActions from '../../actions/tasksActions';

import Spinner from '../general/Spinner'
import Fatal from '../general/Fatal'
import {Redirect} from 'react-router-dom';

function Save(props) {

    const changeInput=(e)=>{
        props.changeInput(e.target.name, e.target.value)
    }

    const saveTask= (e)=>{
        const {user_Id, title, saveTask} =  props
        const newTask = {
            user_Id: user_Id,
            title: title,
            completed: false
        }

        saveTask(newTask);

    }

    const disable =()=>{
        const {user_Id,title, cargando} = props
        
        if(cargando){
            return true;
        }
        if(!user_Id || !title){
            return true;
        }

        return false;
    
    }

    const showAction =()=>{
        const {error, cargando} = props;

        if(cargando) return <Spinner/>
        if(error) return <Fatal message={error}/>
    }



    return (
        <div className="task-page">
            <h2>Save Task</h2>
            Usuario id:
            <input 
                type='number'
                value={props.user_Id}
                name="user_Id"
                onChange={ changeInput}
            />
            <br/>
            <br/>
            Titulo:
            <input 
                value={props.title}
                name='title'
                onChange={ changeInput}
                /> <br/><br/>
            <button
                onClick={ saveTask}
                disabled={disable()}
            >Save</button>

            {showAction()}
        </div>
    )
}

const mapStateToProps = ({tasksReducer}) => tasksReducer

export default connect(mapStateToProps,tasksActions)(Save)
