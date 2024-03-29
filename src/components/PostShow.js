import * as React from "react";
import { Show, SimpleShowLayout, TextField, DateField, RichTextField, ImageField, useMutation, useNotify, useRedirect, Button } from 'react-admin';
import Ragging from "../photos/Ragging.jpg";
import Ragging2 from "../photos/Ragging2.jpg";
import '../css/styles.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import BackButton from "./BackButton";
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import { EditButton, TopToolbar } from 'react-admin';
import MenuPopupState from "./statusupdate";
import BlockButton from "./blockuserbutton";
import SimpleMap from "./Map";

// <SimpleMap
                // isMarkerShown
                // googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                // loadingElement={<div style={{ height: `100%` }} />}
                // containerElement={<div style={{ height: `400px` }} />}
                // mapElement={<div style={{ height: `100%` }} />}
                // />
                //<br />

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
// const PostTitle = ({ record }) => {
//     return <span>
//          <BackButton><ArrowBackIcon style={{ color: 'white' }} /></BackButton>
//         {/* Post {record ? `"${record.id}"` : ''} */}
//     </span>;
// };


const PostShowActions = () => (
    <TopToolbar>
        <BackButton id="back"><ArrowBackIcon style={{ color: 'black'}}/></BackButton>
        <BlockButton />
        <MenuPopupState />
    </TopToolbar>
);
const PostShow = (props) => (
    <Show actions={<PostShowActions />} {...props}>
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
                <img src={Ragging} />
                <img src={Ragging2} />
                
            </SimpleShowLayout>

        </Show>
);

export default PostShow;