import React,{useEffect} from 'react'
import {connect} from 'react-redux'

import * as usersActions from '../../actions/usersActions'

const Posts = (props) => {

    useEffect(()=>{
        if(!props.users.length){
            props.getAll()
        }
    },[])

    return (
        <div>
            {console.log(props)}
            <h1>Publicaciones de {}</h1>
            {props.match.params.id}
        </div>
    )
}

const mapStateToProps =(reducers)=>{
    return reducers.usersReducer
}

export default connect(mapStateToProps,usersActions)(Posts)

