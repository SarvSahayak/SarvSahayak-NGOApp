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

const ContactList = (props) => {
    return (
        <Card>
            <Title title="Contact Us" />
            <CardContent>
                <h1 id = "email">Email Id</h1>
                <ul>
                    <li><h3>Pranshu Pareek:  <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=pranshupareek47@gmail.com" target="_blank" >  pranshupareek47@gmail.com</a></h3></li>
                    <li><h3>Kushagra Gupta:  <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=kushagragupta6038@gmail.com" target="_blank" >  kushagragupta6038@gmail.com</a></h3></li>
                    <li><h3>Kumud:  <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=kumudsharma246@gmail.com" target="_blank" >  kumudsharma246@gmail.com</a></h3></li>
                    <li><h3>Sakshi Tomar:  <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=sakshiyukta564@gmail.com" target="_blank" >  sakshiyukta564@gmail.com</a></h3></li>
                    <li><h3>Simran:  <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=simranchauhan85802@gmail.com" target="_blank" >  simranchauhan85802@gmail.com</a></h3></li>
                    <li><h3>Krishnan Poddar:  <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=krishnanpoddar28@gmail.com" target="_blank" >  krishnanpoddar28@gmail.com</a></h3></li>
                </ul>
                <h4>Creeping Spiders</h4>
            </CardContent>
        </Card>
    )
}

export default ContactList