<<<<<<< HEAD
// import React, { useState } from 'react';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// // import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import LockOpenIcon from '@material-ui/icons/LockOpen';
// import authProvider from './authProvider;'
// //import data from '../data/db.json'
// //import PropTypes from 'prop-types';

// export default function FormDialog(props) {
//     const [open, setOpen] = useState(false);
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const handleClickOpen = () => {
//         setOpen(true);
//     };

//     // const handleSubmit = () => {
//     //     const data = {
//     //         email,
//     //         password
//     //     }

//     //     const axios = require("axios");

//     //     axios.post('https://sarvsahayakapi.herokuapp.com/ngos/login', data)
//     //     .then(response => {
//     //          console.log(response.status)
//     //         localStorage.setItem("authToken", response.data.token)
//     //         window.location.assign("/dashboard")
//     //     })
//     //     .catch(err => console.log(err))
        
//     // }

//     return (
//         <div id = "popup">
//             <Button id = "button" variant="contained" color="inherit" onClick={handleClickOpen}>
//                 LOGIN
//             </Button>
//             <Dialog open={open}  aria-labelledby="form-dialog-title">
//                 <DialogTitle id="form-dialog-title" >LOGIN
//                     <LockOpenIcon style={{ fontSize: 35 }} color = "secondary" id = "icon" />
//                 </DialogTitle>
//                     <DialogContent>
//                         <TextField
//                             autoFocus
//                             autoComplete = "off"
//                             margin="dense"
//                             label="Email Address"
//                             type="email"
//                             value = {email}
//                             onChange = {(e) => setEmail(e.target.value)}
//                             fullWidth
//                             required
//                         />
//                         <TextField
//                             margin="dense"
//                             autoComplete="off"
//                             label="Password"
//                             type="password"
//                             value = {password}
//                             onChange = {(e) => setPassword(e.target.value)}
//                             fullWidth
//                             required
//                         />
//                     </DialogContent>
//                     <DialogActions>
//                         <Button  color="primary" variant = "contained" onClick = {authProvider.login}>
//                             Login
//                         </Button><br />
//                     </DialogActions>
//             </Dialog>
//         </div>
//     );
// }

// in src/MyLoginPage.js
=======
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
>>>>>>> 9a763f69db4c1c298b928231ecc8d5acbb558a16
import * as React from 'react';
import { useState } from 'react';
import { useLogin, useNotify, Notification, defaultTheme } from 'react-admin';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import photo from '../photos/logo192.png';
import styles from '../css/popup.module.css';
import Backdrop from '../components/Background';


const MyLoginPage = ({ theme }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = useLogin();
    const notify = useNotify();
    const submit = e => {
        e.preventDefault();
        // will call authProvider.login({ email, password })
        login({ email, password }).catch(() =>
            notify('Invalid email or password')
        );
    };

    return (
        <>

            {/* <Container> */}
            <Backdrop />
            <div style={{position:"relative"}}>
                <div className={styles["login-img"]}>
                    <img src={photo} alt="photo" style={{ paddingTop: "50px", paddingRight: "50px" }} />
                    <h1 style={{fontFamily: 'Jost'}}>SarvSahayak</h1>
                </div>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "75vh",
                    width: "100%"
                }}>

                    <div style={{
                        border: "2px solid  #44c4e7",
                        backgroundColor:"white",
                        width: "380px",
                        height: "326px",
                        padding: "20px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        borderRadius: "2%"
                    }}>
                        <h1 className={styles["form-heading"]} style={{ display: "flex", justifyContent: "center",margin:"0" }}>LOGIN</h1>
                       <hr />
                        <div className={styles["login-form"]} >


                            <ThemeProvider theme={createMuiTheme(defaultTheme)}>
                                <form onSubmit={submit} className={styles["form"]} >
                                    <label>
                                    {/* <span>Email</span> */}
                                    <input
                                        name="email"
                                        type="email"
                                        value={email}
                                        placeholder="Email"
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                    
                                    </label>
                                    <label>
                                    {/* <span>Password</span> */}
                                    <input
                                        name="password"
                                        type="password"
                                        value={password}
                                        placeholder="Password"
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                    
                                    </label>
                                  
                                    <span >
                                        <button type="submit" className={styles["btn"]}>Login</button>
                                    </span>
                                </form>
                                <Notification />
                            </ThemeProvider>

                        </div>
                    </div>
                </div>
                </div >
    {/* </Container> */ }
           
        </>
    );
};

export default MyLoginPage;