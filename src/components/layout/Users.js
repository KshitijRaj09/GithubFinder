import React, { Component } from 'react'
import UserItem from './UserItem';

export class Users extends Component {

    state={
        users:[
        
            {
              "login": "mojombo",
              "id": 1,
              "avatar_url": "https://avatars0.githubusercontent.com/u/1?v=4",
              "gravatar_id": "",
              "url": "https://api.github.com/users/mojombo",
              "html_url": "https://github.com/mojombo"
            },
            {
              "login": "defunkt",
              "id": 2,
              "avatar_url": "https://avatars0.githubusercontent.com/u/2?v=4",
              "gravatar_id": "",
              "url": "https://api.github.com/users/defunkt",
              "html_url": "https://github.com/defunkt"
              
            },
            {
              "login": "pjhyett",
              "id": 3,
              "node_id": "MDQ6VXNlcjM=",
              "avatar_url": "https://avatars0.githubusercontent.com/u/3?v=4",
              "gravatar_id": "",
              "url": "https://api.github.com/users/pjhyett",
              "html_url": "https://github.com/pjhyett"
             
            },
            {
              "login": "wycats",
              "id": 4,
              "node_id": "MDQ6VXNlcjQ=",
              "avatar_url": "https://avatars0.githubusercontent.com/u/4?v=4",
              "gravatar_id": "",
              "url": "https://api.github.com/users/wycats",
              "html_url": "https://github.com/wycats"
            }
        ]
    }

    render() {
        return (
            <div style={styleItem}>
               {
                   this.state.users.map(users=>
                       <UserItem key={users.id} login={users.login} 
                       avatar_url={users.avatar_url} html_url={users.html_url} />
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
