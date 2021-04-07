import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import LockOpenIcon from '@material-ui/icons/LockOpen';
//import data from '../data/db.json'
//import PropTypes from 'prop-types';

export default function FormDialog(props) {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleSubmit = () => {
        const data = {
            email,
            password
        }

        const axios = require("axios");

        axios.post('https://sarvsahayakapi.herokuapp.com/ngos/login', data)
        .then(response => {
             console.log(response.status)
            localStorage.setItem("authToken", response.data.token)
            window.location.assign("/dashboard")
        })
        .catch(err => console.log(err))
        
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
                            autoComplete = "off"
                            margin="dense"
                            label="Email Address"
                            type="email"
                            value = {email}
                            onChange = {(e) => setEmail(e.target.value)}
                            fullWidth
                            required
                        />
                        <TextField
                            margin="dense"
                            autoComplete="off"
                            label="Password"
                            type="password"
                            value = {password}
                            onChange = {(e) => setPassword(e.target.value)}
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
