// import React from 'react'

// const dash = () => {
//     return(
//         <h1>dashboard</h1>
//     );   
// }

// export default dash
import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import PostList from './PostList'
import BlockList from './Blockedusers'
// import PostCreate from './components/PostCreate'
// import PostEdit from './components/PostEdit'
import UserList from './UserList'
// import UserCreate from './components/UserCreate'
import UserIcon from '@material-ui/icons/Group';
// import UserEdit from './components/UserEdit'
import PostShow from "./PostShow";

function dash() {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource
        name='messages'
        list={PostList}
        show={PostShow} 
        // create={PostCreate}
        // edit={PostEdit}
      />
      {/* <Resource
        name='users'
        list={UserList}
        // create={UserCreate}
        edit={UserEdit}
      /> */}
      {/* <Resource
        name='blocked Users'
        list={UserList}
        // create={UserCreate}
        edit={UserEdit}
      /> */}
         <Resource name="blockedusers" list={BlockList} icon={UserIcon} />
    </Admin>
  )
}

export default dash
