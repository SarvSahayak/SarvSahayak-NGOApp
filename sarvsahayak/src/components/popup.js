import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import data from '../data/db.json'
import PropTypes from 'prop-types';

async function loginUser(credentials) {
    return fetch("https://sarvsahayakapi.herokuapp.com/ngos/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function FormDialog({ setToken }) {
    const [open, setOpen] = useState(false);
    const [Email, setEmail] = useState();
    const [password, setPassword] = useState();
    // const [emailError, setEmailError] = React.useState('');
    
    // const [passwordError, setPasswordError] = React.useState('');
    // const [submitError, setSubmitError] = React.useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    // const handleEmailChange = (function (e) {
    //     setEmail(e.target.value)
    //     validateEmail(e.target.value)
    //     return e.target.value
    // })

    // const handlePasswordChange = (function (e) {
    //     setPassword(e.target.value)
    //     validatePassword(e.target.value)
    // })    

    // const validateEmail = (value) => {
    //     const error = value ? "" : "You must enter your email address"
    //     setEmailError(error)
    //     return error
    // }

    // const validatePassword = (value) => {
    //     const error = value ? "" : "You must enter your Password"
    //     setPasswordError(error)
    //     return error
    // }    

    // const validateSubmit = (value) => {
    //     setSubmitError("Email entered is wrong")
    // }

    // const handleSubmit = (() => {
    //     const emailValidationError = validateEmail(email)
    //     const passwordValidationError = validatePassword(pwd)
    //     if (emailValidationError === "" && passwordValidationError === "") {
    //         const rightEmail = data.messages.find(function (message) {
    //             return email === message.email
    //         })
    //         if (rightEmail !== undefined) {
    //             window.location.assign('/dashboard')
    //         } else {
    //             validateSubmit()
    //         }
    //     } 
    // })
    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            Email,
            password
        });
        setToken(token);
        window.location.assign('/dashboard')
    }

    return (
        <div id = "popup">
            <Button id = "button" variant="contained" color="inherit" onClick={handleClickOpen}>
                LOGIN
            </Button>
            <Dialog open={open}  aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title" >LOGIN
                    <LockOpenIcon style={{ fontSize: 35 }} color = "secondary" id = "icon" />
                </DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Email Address"
                            type="email"
                            onChange = {e => setEmail(e.target.value)}
                            fullWidth
                            required
                        />
                        <TextField
                            margin="dense"
                            label="Password"
                            type="password"
                            onChange = {e => setPassword(e.target.value)}
                            fullWidth
                            required
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button  color="primary" variant = "contained" onClick = {handleSubmit}>
                            Login
                        </Button><br />
                    </DialogActions>
            </Dialog>
        </div>
    );
}

FormDialog.propTypes = {
    setToken: PropTypes.func.isRequired
}
