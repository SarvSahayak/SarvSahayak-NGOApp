import * as React from 'react';
import { useEffect, useState } from "react";
// import PostList from "./PostList";
import '../css/complaints.css';
import stytab from '../css/table.module.css';
import { Title } from 'react-admin';
import { Card, CardContent } from '@material-ui/core';

const Complaints = (props) => {
    const [data, setData] = useState([]);
    const statusData = [
        {id: 0, status: 0},
        {id: 1, status: 1},
        {id: 2, status: 2}
    ]

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
    const categoryNumToVal  = (number) => {
        if (number === 1)
            number = "Child Harrasment"
        else if (number === 2)
            number = "Domestic Violence"
        else if (number=== 3)
            number = "Abuse"
        else if (number === 4)
            number = "Violence"
        return number
    }

    const statusValToNum = (val) => {
        if (val === "created")
            val = 0
        else if (val === "inProcess")
            val = 1
        else if (val === "accepted")
            val = 2
        return val
    }

    const handleChange = (e, id) => {
        e = e.target.value
        const url = 'https://sarvsahayakapi.herokuapp.com/ngos/complaints/' + encodeURIComponent(id)
        const fetchData = async () => {
            const response = await fetch(url, {
                method: 'PATCH',
                body: JSON.stringify({
                    status: e
                }),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + localStorage.getItem('authToken')
                })
            });
            const newData = await response.json();
            console.log(newData)
        };
        fetchData();
    }

    const renderRows = () => {
        return data.map(function (o) {
            //setOption(statusNumToVal(o.status))
            return <tr key={"item-" + o._id}>
                <td>{o.description}</td>
                <td>
                    <select value = {o.status} onChange = {(e) => handleChange(e, o._id)}>
                        {statusData.map((e) => {
                            return <option key = {e.id} value= {e.status}>{statusNumToVal(e.status)}</option>
                        })}
                    </select>
                </td>
                <td>{o.address}</td>
                <td> {categoryNumToVal(o.category)}</td>
                <td>{o.createdAt}</td>
                <td>{o.owner}</td>
                <td>{o.updatedAt}</td>
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