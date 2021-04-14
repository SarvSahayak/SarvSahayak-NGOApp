/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react';
import { useState } from 'react';
import { useLogin, useNotify, Notification, defaultTheme } from 'react-admin';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
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