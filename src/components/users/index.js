import React,{useEffect} from 'react'
import {connect} from 'react-redux';
import Spinner from '../general/Spinner'
import Fatal from '../general/Fatal'
import Tabla from './Tabla'

import * as usersActions from '../../actions/usersActions'

const Users = (props) => {
    useEffect(()=>{
        const {users} = props
        if(!users.length){
            props.getAll()
        }
    
    },[props.users])

    const AllContent =()=>{

        if(props.cargando){
            return <Spinner/>
        }
        if(props.error){
            return <Fatal message={props.error}/>
        }
        return <Tabla/>
    }

    return (
        
        <div className="App">
            
            {
                AllContent()
            }
            
        </div>
    )
}

const mapStateToProps =( reducers)=>{
    return reducers.usersReducer;
}

export default connect(mapStateToProps, usersActions )(Users);
