import { Card } from '@material-ui/core'
import React from 'react'
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';
import {
    List,
    Datagrid,
    TextField,
    EmailField,
    DeleteButton,
} from 'react-admin'
import '../css/contact.css'
//import InstagramIcon from '@material-ui/icons/Instagram';

const ContactList = (props) => {
    return (
        <Card>
            <Title title="Contact Us" />
            <CardContent>
                <h1 className = "email">Email Id</h1>
                <p>In case of any query, feel free to contact us at</p>
                <p><a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=sarvsahayak@gmail.com" target="_blank" >  sarvsahayak@gmail.com</a></p>
                <h1 className="email"> Instagram handle</h1>
            </CardContent>
        </Card>
    )
}

export default ContactList