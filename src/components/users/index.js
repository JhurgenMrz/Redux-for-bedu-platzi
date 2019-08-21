import React,{useState,useEffect} from 'react'
import axios from 'axios';

export const Users = () => {

    const [users,setUsers] = useState([])

    

    useEffect(()=>{
       (async function(){
            try{
                const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
                setUsers(data)
            } catch(err){
                console.log(err)
            }
       })()
    },[])

    return (
        <div className="App">
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
                        users.map((user, index)=>(
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
