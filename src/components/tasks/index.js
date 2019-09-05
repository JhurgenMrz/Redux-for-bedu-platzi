import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import * as tasksActions from '../../actions/tasksActions';
import Spinner from '../general/Spinner'
import Fatal from '../general/Fatal'

const Tasks = (props) => {

    useEffect(()=>{
        props.getAllTasks();
        console.log(props)
    },[])
    
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
        const {tasks} = props;
        const by_User = {
            ...tasks[userId]
        };
        
        return Object.keys(by_User).map((task_Id,index)=>(
            <div key={index}>
                <input type='checkbox' defaultChecked={by_User[task_Id].completed} />
                {
                by_User[task_Id].title
                }
            </div>
        ))
    }

    return (
        <div className="task-page">
            <button>
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

