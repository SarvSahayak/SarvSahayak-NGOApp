import * as React from 'react';
import { useEffect, useState } from "react";
import '../css/complaints.css';
import stytab from '../css/table.module.css';
import { number, Title } from 'react-admin';
import { Card, CardContent } from '@material-ui/core';


const Complaints = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://sarvsahayakapi.herokuapp.com/ngos/complaints`, {
                method: "GET",
                contentType: 'application/json',
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('authToken')
                }
            });
            const newData = await response.json();
            setData(newData);
        };
        fetchData();
    })
    const statusNumToVal = (number) => {
        if (number === 0)
            number = "Created"
        else if (number === 1)
            number = "In process"
        else if (number === 2)
            number = "Accepted"
        return number
    }
    const categoryNumToVal = (number) => {
        if (number === 1)
            number = "Child Harrasment"
        else if (number === 2)
            number = "Domestic Violence"
        else if (number === 3)
            number = "Abuse"
        else if (number === 4)
            number = "Violence"
        return number
    }

    const renderRows = () => {
        return data.map(function (o) {
            return <tr key={"item-" + o._id}>
                <td>{o.description}</td>
                <td>{statusNumToVal(o.status)}</td>
                <td>{o.address}</td>
                <td>{categoryNumToVal(o.category)}</td>
                <td> {new Intl.DateTimeFormat('en-GB', {
                   year: 'numeric', 
                   month: '2-digit',
                   day: '2-digit', 
                   hour: '2-digit', 
                   minute: '2-digit', 
                   second: '2-digit'
                }).format(new Date((o.createdAt)))}</td>
                <td>{o.owner}</td>
                <td>
                {new Intl.DateTimeFormat('en-GB', {
                   year: 'numeric', 
                   month: '2-digit',
                   day: '2-digit', 
                   hour: '2-digit', 
                   minute: '2-digit', 
                   second: '2-digit'
                }).format(new Date((o.updatedAt)))}</td>
            </tr>
        })
    }

    if (data) {
        return (
            <Card>
                <Title title="Complaints" />
                <CardContent>
                    <table className={stytab["styled-table"]}>

                        <thead>
                            <tr>
                                <th>
                                    Description
                                </th>
                                <th>
                                    Application Status
                                </th>
                                <th>
                                    Address
                                </th>
                                <th>
                                    Category
                                 </th>
                                <th>
                                    Registration At
                                </th>
                                <th>
                                    Owner
                                </th>
                                <th>
                                    Update At
                                  </th>
                            </tr>
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