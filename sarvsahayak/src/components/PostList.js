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
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));




// const postRowClick = (id, basePath, record) => record.editable ? 'edit' : 'show';

const PostList = (props) => {
  const [data, setData] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://sarvsahayakapi.herokuapp.com/ngos/complaints`, {
        method: "GET",
        contentType: 'application/json',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('authToken')
        }
      });
      const newData = await response.json();
      setData(Object.entries(newData[0]));
      console.log(data)
    };
    fetchData();
  })
  return (
    <>
    <LineChart />
    <br />
    <List {...props}>
      <Datagrid rowClick="show">
        <TextField source='status' />
        <TextField source='description' />
        {/*<EmailField source='email' />}*/}
          { /* <TextField source='mobile_no' />*/  }
        {/* <TextField source='location' /> */}
         {/* <DateField source='publishedAt' /> */}
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
