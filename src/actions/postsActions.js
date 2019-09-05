import axios from 'axios';
import {GET_BY_USER,CARGANDO,ERROR} from '../types/postsTypes'
import * as usersTypes from '../types/usersTypes'

const { GET_ALL: USERS_GET_ALL  } = usersTypes;

export const getByUser =(id) => async (dispatch,getState)=> {
    const {users} = getState().usersReducer;
    const {posts} = getState().postsReducer;

    dispatch({
        type: CARGANDO,
    });

    try{
        const respuesta = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    
    const userIndex = users.findIndex(u => u.id === parseInt(id))

    const posts_Updated = [
        ...posts,
        respuesta.data
    ];
    dispatch({
        type: GET_BY_USER,
        payload: posts_Updated
    });

    const posts_key = posts_Updated.length -1;

    const users_Updated = [...users];
    
    users_Updated[userIndex] = {
        ...users[userIndex],
        posts_key
    };

    dispatch({
        type: USERS_GET_ALL,
        payload: users_Updated
    });    
    }catch(err){
        console.log(err.message);
        dispatch({
            type: ERROR,
            payload:'Publicaciones no disponibles', 
        })
    }

    
}