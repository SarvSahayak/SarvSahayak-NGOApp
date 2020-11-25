import React from 'react'
import { Admin, Resource, Title, Logout, Toolbar, SortButton, SelectInput } from 'react-admin'
import { ReferenceInput } from 'react-admin';
import restProvider from 'ra-data-simple-rest'
import authProvider from './authProvider'
import PostList from './PostList'
import BlockList from './Blockedusers'
import ContactList from './ContactUs'
// import PostCreate from './components/PostCreate'
// import PostEdit from './components/PostEdit'
import UserList from './UserList'
// import UserCreate from './components/UserCreate'
import UserIcon from '@material-ui/icons/Group';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
// import UserEdit from './components/UserEdit'
import PostShow from "./PostShow";
import '../css/styles.css';
import Main from './Main'
// <Title id= "main-title" title= "SarvSahayak"/>

function dash() {
  return (
    <Admin loginPage = {Main} dataProvider={restProvider('http://localhost:3000')}>
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
         <Resource name="Contact us" list={ContactList} icon={ContactSupportIcon}/>
    </Admin>
  )
}

export default dash
