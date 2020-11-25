import React from 'react';
import Button from '@material-ui/core/Button';
import { TopToolbar } from "react-admin";
import { goBack, routerActions } from 'react-router-redux';
import { withRouter } from 'react-router'
import { IconButton } from '@material-ui/core';

const BackButton = ({ history: { goBack }, children, ...props }) => (
    <IconButton {...props} onClick={goBack}>
        {children}
    </IconButton>
)

export default withRouter(BackButton)