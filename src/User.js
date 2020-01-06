import React, {useEffect} from 'react';
import {useUsersState, useUsersDispatch, getUser} from './UsersContext';

function User({id}){

    const state = useUsersState();
    const dispatch = useUsersDispatch();

    useEffect(() => {
        getUser(dispatch, id);
    }, [dispatch, id])

    const {loading, data : user, error} = state.user;

    if(loading) return <div>loading...</div>;
    if(error) return <div>error...</div>;
    if(!user) return null;

    return (
        <div>
            <h2>{user.username}</h2>
            <p>
                <b>Email</b> : {user.email}
            </p>
        </div>
    );
}

export default User;