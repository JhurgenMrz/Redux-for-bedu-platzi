import React,{useEffect} from 'react'
import {connect} from 'react-redux'

import * as usersActions from '../../actions/usersActions'
import * as postsActions from '../../actions/postsActions'

const { getAll: usersGetAll} = usersActions;
const { getAllPosts: postsGetAll} = postsActions;

const Posts = (props) => {

    useEffect(()=>{
        if(!props.usersReducer.users.length){
            props.usersGetAll()

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

const mapStateToProps =({usersReducer, postsReducer})=>{
    return {usersReducer, postsReducer};
}

const mapDispatchToProps = {
    usersGetAll,
    postsGetAll
}

export default connect(mapStateToProps,mapDispatchToProps)(Posts)

