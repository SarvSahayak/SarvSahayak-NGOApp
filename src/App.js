import * as React from 'react';
import UserIcon from '@material-ui/icons/Group';
import { fetchUtils, Admin, Resource} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
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
        />
        <Resource name="Contact Us" icon={UserIcon} list={ContactList} />
    </Admin>
);
  
export default App;
