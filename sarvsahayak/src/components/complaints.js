import * as React from 'react';
import { useEffect, useState } from "react";
import PostList from "./PostList";


const Complaints = () => {
    const [id, setId] = useState(null)
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [mobile_no, setMno] = useState(null)
    const [location, setLocation] = useState(null)
    const [publishedAt, setPubad] = useState(null)

    useEffect (() => {
    fetch("https://sarvsahayakapi.herokuapp.com/ngos/complaints", {
            method: "GET",
            contentType: 'application/json',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('authToken')
            }
        })
    .then((res) => {
        const response = res.json()
        console.log(response)
    })
})
return (
    <div>Hello complaints</div>
)
}
export default Complaints