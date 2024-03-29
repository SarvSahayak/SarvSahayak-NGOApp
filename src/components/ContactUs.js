import { Card } from '@material-ui/core'
import React from 'react'
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';
// import BackButton from "./BackButton";
// import ArrowBackIcon from '@material-ui/icons/ArrowBack';
// import insta from "../photos/insta.png";
import '../css/contact.css'
import InstagramIcon from '@material-ui/icons/Instagram';


const ContactList = (props) => {
    return(
        <Card>
            <Title title= "Contact us" />
            <CardContent>
                <h1 className = "email">Email Id</h1>
                <p>In case of any query, feel free to contact us at</p>
                <p><a href="mailto:sarvsahayak@gmail.com">sarvsahayak@gmail.com</a></p>
                <a href="http://www.instagram.com/sarvsahayak">
                    <InstagramIcon fontSize = "large"/>
                </a>
            </CardContent>
        </Card>)
}

export default ContactList