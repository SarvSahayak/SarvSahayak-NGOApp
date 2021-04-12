import * as React from 'react';
import { useEffect, useState } from "react";
import PostList from "./PostList";
import '../css/complaints.css' 
import { Title } from 'react-admin';
import { Card, CardContent } from '@material-ui/core';

const Complaints = (props) => {
    const [data, setData] = useState([]);

    useEffect (() => {
        const fetchData = async () => {
            const response = await fetch(`https://sarvsahayakapi.herokuapp.com/ngos/complaints`, {
                method: "GET",
                contentType: 'application/json',
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('authToken')
                }
            });
            const newData = await response.json();
            newData.map(function (o) {
                if (o.status === 0) 
                    o.status = "Created"
                else if(o.status === 1)
                    o.status = "In process"
                else if (o.status === 2)
                    o.status = "Accepted"
            })
            newData.map(function (o) {
                if (o.category === 1)
                    o.category = "Child Harrasment"
                else if (o.category === 2)
                    o.category = "Domestic Violence"
                else if (o.category === 3)
                    o.category = "Abuse"
                else if (o.category === 4)
                    o.category = "Violence"
            })
            setData(newData);
        };
        fetchData();
    })

    const renderRows = () =>  {
        return data.map(function (o) {
            return  <tr key = {"item-" + o._id}>
                        <td>{o.description}</td>
                        <td>{o.status}</td> 
                        <td>{o.address}</td>
                        <td>{o.category}</td>
                        <td>{o.createdAt}</td>
                        <td>{o.owner}</td>
                        <td>{o.updatedAt}</td>
                    </tr>
        })
    }

    if (data) {
        return (
            <Card>
                <Title title = "Complaints"/>
                <CardContent>
           <table>
                <thead>
                    <th>
                        Description
                    </th>
                    <th>
                        Status
                    </th>
                    <th>
                        Address
                    </th>
                    <th>
                        Category
                    </th>
                    <th>
                        CreatedAt
                    </th>
                    <th>
                        Owner
                    </th>
                    <th>
                        UpdatedAt
                    </th>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
           </table> 
            </CardContent>
        </Card>
        )
    } 
    else {
        return <div>Nothing</div>;
    }

}
export default Complaints