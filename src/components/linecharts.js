import React, { useEffect, useState } from "react";
import { Line } from 'react-chartjs-2';
import axios from "axios";
// import data from "../../../db.json"


const LineChart = () => {
    const [chartData, setChartData] = useState({});
    // const [employeeSalary, setEmployeeSalary] = useState({});
    // const [employeeAge, setEmployeeAge] = useState({});

    const chart = () => {
        const empAge = [];
        const empSal = [];
        const ax = axios.create({
            baseURL: "https://sarvsahayakapi.herokuapp.com/ngos"
        })

        ax.get("/complaints")
            .then(res => {
                console.log(res)
                for (const dataObj of res.data) {
                    empSal.push(dataObj.id);
                    empAge.push(dataObj.publishedAt);
                }
                setChartData({
                    labels: empAge,
                    datasets: [
                        {
                            label: 'No. of cases',
                            // barPercentage: 0.5,
                            // barThickness: 6,
                            // maxBarThickness: 8,
                            // minBarLength: 2,
                            data: empSal,
                            backgroundColor:"rgba(75, 192, 192, 0.6)",
                            borderWidth: 4

                        }
                    ]
                })
            })
            .catch(err => {
                console.log(err)
            });
        console.log(empSal, empAge);

    }

    useEffect(() => {
        chart()
    }, [])
    return (
        <div>
            <Line data={chartData} options={{
                responsive: true,
                title: { text: "Complaints Recived", display: true },
                scales: {
                    yAxes: [{
                        ticks: {
                            autoSkip: true,
                            maxTicksLimit: 10,
                            beginAtZero: true
                        },
                        gridLines: {
                            display: false
                        }
                    }
                    ],
                    xAxes: [{
                        gridLines: {
                            display: false
                        }
                    }]
                }
            }} />
        </div >
    )
}

export default LineChart;