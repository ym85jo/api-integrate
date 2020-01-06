import React, {useState} from 'react';
import User from './User';
import {useUsersState, useUsersDispatch, getUsers} from './UsersContext'

function Users(){

    const [userId, setUserId] = useState(null);
    const state = useUsersState();
    const dispatch = useUsersDispatch();

    const {loading, data : users, error} = state.users;

    const fetchData = () => {
        getUsers(dispatch);
    }

    if(loading) return <div>loading...</div>;
    if(error) return <div>error...</div>;
    if(!users) return <button onClick={fetchData}>Load</button>;

    return (
        <>
            <ul>
                {users.map(user => (
                    <li key={user.id} onClick={() => setUserId(user.id)}>
                        {user.username} ({user.name})
                    </li>
                ))}
            </ul>
            <button onClick={fetchData}>Re Loading</button>
            
            {userId && <User id={userId} />}

        </>
        
    )
}

export default Users;