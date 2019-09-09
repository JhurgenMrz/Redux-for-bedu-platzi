import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import * as tasksActions from '../../actions/tasksActions';
import Spinner from '../general/Spinner'
import Fatal from '../general/Fatal'

const Tasks = (props) => {

    useEffect(()=>{
        const {tasks, cargando, getAllTasks } = props
        if(!Object.keys(tasks).length && !cargando){
            getAllTasks();
        }
    },[props.tasks])
    
    const showContent =()=>{
        const {tasks, cargando, error} = props;

        if(cargando) return <Spinner/>;
        if(error) return <Fatal message={error}/>

        return Object.keys(tasks).map((userId,index)=>(
            <div className="task" key={index}>
                <h3>
                    Usuario {userId}
                </h3>
                <div className="conteiner-tasks">
                    {putTasks(userId)}
                </div>
            </div>
        ))
    }

    const putTasks = (userId) => {
        const {tasks, changeCheck,deleteTask} = props;
        const by_User = {
            ...tasks[userId]
        };
        
        return Object.keys(by_User).map((task_Id,index)=>(
            <div key={index}>
                <input 
                    onChange={()=>changeCheck(userId, task_Id)}
                    type='checkbox' 
                    defaultChecked={by_User[task_Id].completed
                } />
                {
                by_User[task_Id].title
                }
                <button className="btn btn-edit">
                    <Link to={`/tasks/save/${userId}/${task_Id}`}>
                        Editar
                    </Link>
                </button>
                <button className="btn btn-delete" onClick={()=> deleteTask(task_Id)} >Eliminar</button>
            </div>
        ))
    }

    return (
        <div className="task-page">
            <button className="btn-add">
                <Link to='/tasks/save'>
                    Add task
                </Link>
            </button>
            {showContent()}
        </div>
    )
}

const mapStateToProps = ({tasksReducer})=> tasksReducer;

export default connect(mapStateToProps, tasksActions)(Tasks);

