import * as React from "react";
import { Show, SimpleShowLayout, TextField, DateField, RichTextField, useMutation, useNotify, useRedirect, Button } from 'react-admin';
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import * as React from "react";
// import {  } from 'react-admin';

// import Button from '@material-ui/core/Button';
// import { EditButton, TopToolbar } from 'react-admin';

// const PostShowActions = ({ basePath, data, resource }) => (
//     <TopToolbar>
//         <EditButton basePath={basePath} record={data} />
//         {/* Add your custom actions */}
//         function customAction() =>{

//         }
//         <Button color="primary" onClick={customAction}>Custom Action</Button>
//     </TopToolbar>
// );

// const ApproveButton = ({ record }) => {
//     const notify = useNotify();
//     const redirect = useRedirect();
//     const [approve, { loading }] = useMutation(
//         {
//             type: 'update',
//             resource: 'comments',
//             payload: { id: record.id, data: { isApproved: true } },
//         },
//         {
//             onSuccess: ({ data }) => {
//                 redirect('/comments');
//                 notify('Comment approved');
//             },
//             onFailure: (error) => notify(`Comment approval error: ${error.message}`, 'warning'),
//         }
//     );
//     return <Button label="Approve" onClick={approve} disabled={loading} />;
// };

// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& > *': {
//             margin: theme.spacing(1),
//         },
//     },
// }));

// export default function ContainedButtons() {
//     const classes = useStyles();
//     return (
//         <div className={classes.root}>
//             <Button variant="contained">Default</Button>
//             <Button variant="contained" color="primary">
//                 Primary
//           </Button>
//             <Button variant="contained" color="secondary">
//                 Secondary
//           </Button>
//             <Button variant="contained" disabled>
//                 Disabled
//           </Button>
//             <Button variant="contained" color="primary" href="#contained-buttons">
//                 Link
//           </Button>
//         </div>
//     );
// }


const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

const PostShow = (props) => (
    <Show title={<PostTitle />}  {...props}>
        {/* actions={<PostShowActions />}
        actions={<ApproveButton />} */}
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="title" />
            <RichTextField source="body" />
            <DateField label="Publication date" source="publishedAt" />
        </SimpleShowLayout>
    </Show>
);

export default PostShow;