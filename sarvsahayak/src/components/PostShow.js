import * as React from "react";
import { Show, SimpleShowLayout, TextField, DateField, RichTextField, ImageField, useMutation, useNotify, useRedirect, Button } from 'react-admin';
import logo from "../photos/logo.png";
import '../css/styles.css';
import '../css/styles.css'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import BackButton from "./BackButton";
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import { EditButton, TopToolbar } from 'react-admin';
import MenuPopupState from "./statusupdate";
import BlockButton from "./blockuserbutton";


// const PostTitle = ({ record }) => {
//     return <span>{record ? `${record.category}` : ''}</span>;
// };



// const PostShowActions = () => (
//     <TopToolbar>
//         {/* { basePath, data, resource } */}
//         {/* <EditButton basePath={basePath} record={data} /> */}
//         {/* Add your custom actions */}
//         {/* hello = () ={
//             console.log(">")
//         } */}
//         {/* <Button color="primary" onClick={update}>Custom Action</Button> */}
//     </TopToolbar>
// );
const PostTitle = ({ record }) => {
    return <span>
        <BackButton><ArrowBackIcon style={{ color: 'white' }} /></BackButton>
        Post {record ? `"${record.id}"` : ''}
    </span>;
};


const PostShowActions = () => (
    <TopToolbar>
        <BlockButton />
        <MenuPopupState />
    </TopToolbar>
);
const PostShow = (props) => (
    <Show title={<PostTitle />} actions={<PostShowActions />} {...props}>
        {/* <TopToolbar>
             { basePath, data, resource } 
         <EditButton basePath={basePath} record={data} />
             Add your custom actions
            hello = () ={
            console.log(">")
        }
            <Button color="primary" onClick={MenuPopupState}>Custom Action</Button>
            
        </TopToolbar> */}
        {/* actions={<ApproveButton />}    */}

        {/* <Show title={<PostTitle />}  {...props} > */}
            {/* actions={<PostShowActions />}
        actions={<ApproveButton />} */}
            <SimpleShowLayout>
                <TextField source="id" />
                {/* <TextField source="title" /> */}
                <TextField source="location" />
                <TextField label="Mobile number" source="mobile_no" />
                <RichTextField source="body" />
                <DateField label="Publication date" source="publishedAt" />
                <img src={logo} />
            </SimpleShowLayout>

        </Show>
);

export default PostShow;