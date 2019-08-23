import React,{useEffect} from 'react'
import {connect} from 'react-redux';
import Spinner from '../general/Spinner'
import Fatal from '../general/Fatal'
import Tabla from './Tabla'

import * as usersActions from '../../actions/usersActions'

const Users = (props) => {
    useEffect(()=>{
        if(!props.users.length){
            props.getAll()
        }
    
    },[])

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
                console.log(props)
            }
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
