import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  DeleteButton,
} from 'react-admin'
import BackButton from "./BackButton";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const BlockedUserTitle = () => {
  return <span>
    <BackButton><ArrowBackIcon style={{ color: 'white' }} /></BackButton>
        Blocked Users
    </span>;
};

const BlockList = (props) => {
  return (
    <List {...props} title={< BlockedUserTitle />} >
      <Datagrid rowClick="show">
        <TextField source='id' />
        <TextField source='name' />
        <EmailField source='email' />
        <DeleteButton basePath='/users' />
      </Datagrid>
    </List>
  )
}

export default BlockList
