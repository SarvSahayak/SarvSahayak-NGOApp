import * as React from 'react';
// import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import { fetchUtils, Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

// import { PostList, PostEdit, PostCreate, PostShow } from './components/posts';
// import { UserList } from './components/users';
// import Dashboard from './components/Dashboard';
import authProvider from './components/authProvider';
import complaints from "./components/complaints";
import ContactList from "./components/ContactUs";
import MyLoginPage from './components/popup';
// import Error from "./components/Error";

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'Application/json' });
  }
  const { token } = localStorage.getItem('authToken');
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};
const App = () => (
    <Admin
        dataProvider={jsonServerProvider(
            'https://sarvsahayakapi.herokuapp.com/ngos'
            , httpClient)}
        authProvider={authProvider}
        loginPage = {MyLoginPage}
    >
        <Resource
            name="complaints"
            list = {complaints}
            //icon={PostIcon}
            //list={PostList}
            //edit={PostEdit}
            //create={PostCreate}
            //show={PostShow}
        />
        <Resource name="Contact Us" icon={UserIcon} list={ContactList} />
        <Resource name="comments" list={ListGuesser} />
    </Admin>
);
  
export default App;