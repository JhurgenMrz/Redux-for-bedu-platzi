import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import Eye from '../general/Eye'

function Tabla(props) {
    const ponerFilas = ()=> (
        props.users.map((user, index)=>(
            <tr key={`row-${index}`}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.website}</td>
            <td><Link to={`/posts/${user.id}`}><Eye/></Link></td>
            </tr>
        ))
    )
    
    return (            
    <div>
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
                        ponerFilas()
                    }
                </tbody>
            </table>
            </div>
        </div>
    )
}

const mapStateToProps = (reducers)=>{
    return reducers.usersReducer
}

export default connect(mapStateToProps)(Tabla)
