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
// import Show from "./PostShow"
//import MoreButton from './application_stats'
import CallReceivedIcon from '@material-ui/icons/CallReceived';
import LineChart from "./linecharts";
import SimpleMap from "./Map";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

// const postRowClick = (id, basePath, record) => record.editable ? 'edit' : 'show';

const PostList = (props) => {
  const classes = useStyles();
  return (
    <>
    <LineChart />
    <br />
    <List {...props}>
      <Datagrid rowClick="show">
        <TextField source='id' />
        <TextField source='name' />
        <EmailField source="email" />
        <TextField source='mobile_no' />
        <TextField source="location" />
        <DateField source='publishedAt' />
        {/* <EditButton basePath='/posts' /> */}
        {/* <DeleteButton basePath='/posts' /> */}
        {/* <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<CallReceivedIcon />}
        >
          Complaint recived
      </Button> */}
      {/* <MoreButton></MoreButton> */}
      </Datagrid>
    </List>
    
      
    </>
  )
}

export default PostList
