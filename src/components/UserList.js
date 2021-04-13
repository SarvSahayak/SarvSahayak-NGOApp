import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  DeleteButton,
} from 'react-admin'
import Main from './Main'

const UserList = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick="show">
        <TextField source='id' />
        <TextField source='name' />
        <EmailField source='email' />
        <EditButton basePath='/users' />
        <DeleteButton basePath='/users' />
      </Datagrid>
    </List>
  )
}

export default UserList
