import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import Spinner from '../general/Spinner'
import Fatal from '../general/Fatal'

import * as usersActions from '../../actions/usersActions'
import * as postsActions from '../../actions/postsActions'
const { getAll: usersGetAll} = usersActions;
const { getByUser: postGetByUser} = postsActions;

const Posts = (props) => {

    useEffect(()=>{
        
        (async ()=>{
            const {
                usersGetAll,
                postGetByUser,
                match:{
                    params: {
                        id
                    }
                }
            } = props;
            if(props.usersReducer.error){return}
            if(!props.usersReducer.users.length){
                await usersGetAll()
                console.log(props.usersReducer.users[parseInt(id-1)])
             }
            // if(!(props.usersReducer.users[parseInt(id-1)])){
            //     await postGetByUser(id);
            //     return ;
            // };
            if(!('posts_key' in props.usersReducer.users[parseInt(id-1)])){
                await postGetByUser(id);
            }
        })()
    },[])

    const putUser=()=>{
        const {
            usersReducer,
            match:{ params:{id}}
        } = props
        if(usersReducer.error){
            return <Fatal message={usersReducer.error}/>
        }

        if(!usersReducer.users.length || usersReducer.cargando){
            return <Spinner/>
        }

        return (
            <h1>Publicaciones de {usersReducer.users[id-1].name} {id}</h1>
        )
    }

    const putPosts = ()=>{
        const {
            usersReducer,
            usersReducer: {users},
            postsReducer,
            postsReducer:{posts},
            match:{ params:{id}}
        } = props

        if(!users.length) return;
        if(users.error) return;
        if(postsReducer.cargando){
            return <Spinner/>
        }
        if(postsReducer.error){
            return <Fatal message={postsReducer.error}/>
        }
        if(!posts.length) return <h3>Cargando...</h3>;
        if(!('posts_key' in users[parseInt(id-1)])) return;

        const {posts_key} = users[parseInt(id-1)];

        return posts[posts_key].map((post)=>(
            <div className="post_title" key={post.id} onClick={()=>alert(post.id)}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        ))
    }

    return (
        <div>
            {console.log(props)}
            {putUser()}
            {putPosts()}
            
            {/* {(props.postsReducer.length) ? props.postsReducer.map((post,index)=>(
                <div key={`post-key-${index}`}>
                    
                </div>
            )) : <div>Cargando...</div>
            } */}

        </div>
    )
}

const mapStateToProps =({usersReducer, postsReducer})=>{
    return {usersReducer, postsReducer};
}

const mapDispatchToProps = {
    usersGetAll,
    postGetByUser
}

export default connect(mapStateToProps,mapDispatchToProps)(Posts)

