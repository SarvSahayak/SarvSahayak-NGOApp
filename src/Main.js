import React from "react";
import { Button } from '@material-ui/core';
import './styles.css'
import  FormDialog  from './popup'

class Main extends React.Component{
    render(){
        return ( 
            <div id = "login">
                <h1>SarvSahayak</h1>
                <div id = "login-button">
                    <FormDialog/>
                </div>
            </div>
        )
    }
}

export default Main;