// import Button from '@material-ui/core/Button';
// import { EditButton, TopToolbar } from 'react-admin';

// const PostShowActions = ({ basePath, data, resource }) => (
//     <TopToolbar>
//         <EditButton basePath={basePath} record={data} />
//         {/* Add your custom actions */}
//         <Button color="primary" onClick={customAction}>Custom Action</Button>
//     </TopToolbar>
// );

// export const PostShow = (props) => (
//     <Show actions={<PostShowActions />} {...props}>
//         ...
//     </Show>
// );
import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

export default function MenuPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
         Complaint Status
          </Button>
          <Menu {...bindMenu(popupState)}>
          <MenuItem onClick={popupState.close}>Received</MenuItem>
            <MenuItem onClick={popupState.close}>In Progress</MenuItem>
            <MenuItem onClick={popupState.close}>Resolved</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
