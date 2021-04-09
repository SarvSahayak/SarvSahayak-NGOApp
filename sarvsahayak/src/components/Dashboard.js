// import React from 'react'
// import { fetchUtils, Admin, Resource, Title, Logout, Toolbar, SortButton, SelectInput} from 'react-admin'
// import { ReferenceInput } from 'react-admin';
// import simpleRestProvider from 'ra-data-simple-rest'
// import authProvider from './authProvider'
// import PostList from './PostList'
// import BlockList from './Blockedusers'
// import ContactList from './ContactUs'
// // import PostCreate from './components/PostCreate'
// // import PostEdit from './components/PostEdit'
// import UserList from './UserList'
// // import UserCreate from './components/UserCreate'
// import UserIcon from '@material-ui/icons/Group';
// import ContactSupportIcon from '@material-ui/icons/ContactSupport';
// // import UserEdit from './components/UserEdit'
// import PostShow from "./PostShow";
// import '../css/styles.css';
// import Main from './Main'
// // import { a } from './popup'
// import { FormDialog } from './popup'
// // <Title id= "main-title" title= "SarvSahayak"/>

// import { useState } from 'react';



// // const url = "https://sarvsahayakapi.herokuapp.com/ngos";

// const httpClient = (url, options = {}) => {
//   if (!options.headers) {
//     options.headers = new Headers({ Accept: 'Application/json' });
//   }
//   const { token } = JSON.parse(localStorage.getItem('authToken'));
//   options.headers.set('Authorization', `Bearer ${token}`);
//   return fetchUtils.fetchJson(url, options);
// };

// function dash() {
//   return (
//     <Admin loginPage={Main} dataProvider={simpleRestProvider('https://sarvsahayakapi.herokuapp.com/ngos', httpClient)} authProvider={authProvider.checkAuth} >
//       <Resource
//         name='complaints'
//         list={PostList}
//         show={PostShow} 
//         // create={PostCreate}
//         // edit={PostEdit}
//         />
//       {/* <Resource
//         name='users'
//         list={UserList}
//         // create={UserCreate}
//         edit={UserEdit}
//       /> */}
//       {/* <Resource
//         name='blocked Users'
//         list={UserList}
//         // create={UserCreate}
//         edit={UserEdit}
//       /> */}
//          <Resource name="blockedusers" list={BlockList} icon={UserIcon} />
//          <Resource name="Contact us" list={ContactList} icon={ContactSupportIcon}/>
//     </Admin>
//   )
// }

// export default dash

import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

function dash() {
<<<<<<< HEAD
  return (
    <Admin loginPage={Main} dataProvider={simpleRestProvider('https://sarvsahayakapi.herokuapp.com/ngos', httpClient)} >
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
=======
   return (
    <Card>
        <CardHeader title="Welcome to the administration" />
        <CardContent>Lorem ipsum sic dolor amet...</CardContent>
    </Card>
)
   }
   
export default dash;
>>>>>>> 939056986925ccbc0d3699d0160a74d05c48f763
