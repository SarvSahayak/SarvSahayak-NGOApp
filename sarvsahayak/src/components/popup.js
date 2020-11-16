import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import '../css/styles.css'
import { createBrowserHistory } from 'history'
import { browserHistory } from "react-router";
import data from '../data/db.json'


export default function FormDialog() {
    const [open, setOpen] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [emailError, setEmailError] = React.useState('');
    const [pwd, setPassword] = React.useState('');
    const [passwordError, setPasswordError] = React.useState('');
    const [submitError, setSubmitError] = React.useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleEmailChange = (function (e) {
        setEmail(e.target.value)
        validateEmail(e.target.value)
    })

    const handlePasswordChange = (function (e) {
        setPassword(e.target.value)
        validatePassword(e.target.value)
    })    

    const validateEmail = (value) => {
        const error = value ? "" : "You must enter your email address"
        setEmailError(error)
        return error
    }

    const validatePassword = (value) => {
        const error = value ? "" : "You must enter your Password"
        setPasswordError(error)
        return error
    }    

    const validateSubmit = (value) => {
        setSubmitError("Email entered is wrong")
    }

    const handleSubmit = (() => {
        const emailValidationError = validateEmail(email)
        const passwordValidationError = validatePassword(pwd)
        if (emailValidationError === "" && passwordValidationError === "") {
            const rightEmail = data.messages.find(function (message) {
                return email === message.email
            })
            if (rightEmail !== undefined) {
                window.location.assign('/dashboard')
            } else {
                validateSubmit()
            }
        } 
    })
    
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
                            id="name"
                            label="Email Address"
                            type="email"
                            value= {email}
                            onChange = {handleEmailChange}
                            fullWidth
                            required
                        />
                        <p className = "error">{emailError}</p>
                        <TextField
                            margin="dense"
                            id="pwd"
                            label="Password"
                            type="password"
                            onChange={handlePasswordChange}
                            value={pwd}
                            fullWidth
                            required
                        />
                        <p className="error">{passwordError}</p>
                    </DialogContent>
                    <DialogActions>
                        <Button  color="primary" variant = "contained" onClick = {handleSubmit}>
                            Login
                        </Button>
                        <p className = "error">{submitError}</p>
                    </DialogActions>
            </Dialog>
        </div>
    );
}
