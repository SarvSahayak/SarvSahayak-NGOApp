import React from 'react'
import { fetchUtils, Admin, Resource, Title, Logout, Toolbar, SortButton, SelectInput} from 'react-admin'
import { ReferenceInput } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest'
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
// import { a } from './popup'
import { FormDialog } from './popup'
// <Title id= "main-title" title= "SarvSahayak"/>

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  const { token } = JSON.parse(localStorage.getItem('auth'));
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};

function dash() {
  return (
    <Admin loginPage={Main} dataProvider={simpleRestProvider('https://sarvsahayakapi.herokuapp.com/ngos', httpClient)} authProvider={authProvider} >
      <Resource
        name='complaints'
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
