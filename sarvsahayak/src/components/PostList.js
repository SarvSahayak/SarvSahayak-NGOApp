import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  EmailField,
  DeleteButton,
} from 'react-admin'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
// import Icon from '@material-ui/core/Icon';
import BlockSharpIcon from '@material-ui/icons/BlockSharp';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const PostList = (props) => {
  const classes = useStyles();
  return (
    <List {...props}>
      <Datagrid rowClick="show">
        <TextField source='id' />
        <TextField source='name' />
        <EmailField source="email" />
        <TextField source='title' />
        <TextField source="location" />
        <DateField source='publishedAt' />
        <EditButton basePath='/posts' />
        {/* <DeleteButton basePath='/posts' /> */}
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<BlockSharpIcon />}
        >
          Block User
      </Button>
      </Datagrid>
    </List>
  )
}

export default PostList