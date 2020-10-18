import React from 'react'
import UserItem from './UserItem';
import Spinner from './spinner/Spinner';

const Users =({users, loading}) => {

    if(loading)
         return <Spinner />;  
        
    else{

        return (
            <div style={styleItem}>
               {
                   users.map(users=>
                       <UserItem key={users.id} users={users} />
                   )
               } 
            </div>
        )
    } 
 }

const styleItem={
    display:'grid',
    gridTemplateColumns : 'repeat(3, 1fr)',
    gridGap:'10px'
};
export default Users;
