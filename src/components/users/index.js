import React,{useEffect} from 'react'
import {connect} from 'react-redux';
import Spinner from '../general/Spinner'
import Fatal from '../general/Fatal'

import * as usersActions from '../../actions/usersActions'

const Users = (props) => {
    useEffect(()=>{
    props.getAll()
    
    },[])

    const AllContent =()=>{

        if(props.cargando){
            return <Spinner/>
        }
        if(props.error){
            return <Fatal message={props.error}/>
        }
        return (
        <div className="User">

            <h1>Usuarios</h1>
            
            <table className="table-users">
                    <thead>
                    <tr>
                        <th>User</th>
                        <th>address</th>
                        <th>website</th>
                    </tr>
                    </thead>
                <tbody>
                    {
                        props.users.map((user, index)=>(
                            <tr key={`row-${index}`}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.website}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        )
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
