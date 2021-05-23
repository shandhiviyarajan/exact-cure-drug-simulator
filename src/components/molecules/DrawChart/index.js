import React, { useEffect, useRef, useState } from 'react';
import Box from '../../atoms/Box';
import Container from '../../atoms/Container';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-moment';
import { useSelector } from 'react-redux';
import moment from 'moment';
import IconLoading from '../../../assets/IconLoading';
const Chart = (props) => (
    <Container className="mx-auto my-8">
        <Box className=" w-10/12 mx-auto">
            <Line data={props.data} options={props.options} />
        </Box>
    </Container>
);
const DrawChart = () => {
    const isSimulating = useSelector(state => state.simulator.isSimulating);
    const results = useSelector(state => state.simulator.results);
    const selectedDrug = useSelector(state => state.search.selectedDrug);
    const molecule = useSelector(state => state.simulator.molecule);
    const [data, setData] = useState();
    const [times, setTimes] = useState(
        results && results.data.data[molecule].times && results.data.data[molecule].times
    );
    const DATA_CURVE_COLORS = [
        {
            line: 'rgba(0,254,227,1)',
            bg: 'rgba(0,254,227,.2)'
        },
        {
            line: 'rgba(254,197,0,1)',
            bg: 'rgba(254,197,0,.2)'
        }, {
            line: 'rgba(254,197,0,1)',
            bg: 'rgba(254,197,0,.2)'
        },
        {
            line: 'rgba(254,197,0,1)',
            bg: 'rgba(254,197,0,.2)'
        },
        {
            line: 'rgba(254,197,0,1)',
            bg: 'rgba(254,197,0,.2)'
        },
        {
            line: 'rgba(80,80,80,1)',
            bg: 'rgba(80,80,80,.2)'
        }
    ]



    useEffect(() => {

        let dataArray = [];

        // create toxicity level
        let toxicity = new Array(results && results.data.data[molecule] && results.data.data[molecule].results[0].curves[0].values.length);
        toxicity.fill(results && results.data.data[molecule].results[0].thresholds[0].value);

        //create efficiancy level
        let efficiancy = new Array(results && results.data.data[molecule] && results.data.data[molecule].results[0].curves[0].values.length);
        efficiancy.fill(results && results.data.data[molecule].results[0].thresholds[1].value);


        dataArray.push(
            {
                data: toxicity,
                fill: false,
                label: 'Toxicity Level',
                borderColor: 'red',
                pointRadius: 0,
                pointHitRadius: 0,
                tension: 0.1,
                borderWidth: 1,
                hoverBorderWidth: 3,
                order: 1
            },
            {
                data: efficiancy,
                fill: false,
                label: 'Efficiancy Level',
                borderColor: 'green',
                pointRadius: 0,
                pointHitRadius: 0,
                tension: 0.1,
                borderWidth: 1,
                hoverBorderWidth: 3,
                order: 0
            }
        );

        results && results.data.data[molecule].results[0].curves.map((curve, i) => (
            dataArray.push({
                data: curve.values,
                fill: true,
                label: curve.legend,
                backgroundColor: DATA_CURVE_COLORS[i] && DATA_CURVE_COLORS[i] ? DATA_CURVE_COLORS[i].bg : 'rgba(0,0,0,0.25)',
                borderColor: DATA_CURVE_COLORS[i] && DATA_CURVE_COLORS[i] ? DATA_CURVE_COLORS[i].line : "#333",
                pointRadius: 0,
                pointHitRadius: 0,
                tension: 0.1,
                borderWidth: 1,
                hoverBorderWidth: 3,
                order: 2 + i
            })
        ));
        setData({
            labels: results && results.data.data[molecule].times && results.data.data[molecule].times.map(t => new Date(t * 1000)),
            datasets: dataArray
        });
    }, [results, isSimulating, molecule]);
    //
    const options = {
        reponsive: true,
        scales: {
            x: {
                type: 'time',
                time:{
                    unit:'hour'
                },
                adapter: {},
                ticks: {
                    callback: function (val, index, values) {

                        var time = results && results.data.data[molecule].times && results.data.data[molecule].times;
                        return moment(time[index] && time[index] * 1000).format("YYYY-MMM-DD hh:mm:ss: a")
                    },
                },
                title: {
                    display: true,
                    text: "Date Time",
                }
            },
            y: {
                min: 0,
                ticks: {
                    stepSize: 0.1
                },
                title: {
                    display: true,
                    text: "Concentration (mg/L)",
                    color: "#666",
                    font: {
                        size: 14,
                        weight: 'normal'
                    }
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: selectedDrug && selectedDrug.label,
                font: {
                    size: 14,
                    weight: 'normal'
                },
                padding: { bottom: 24, left: 0, right: 0, top: 0 }
            },
            legend: {
                align: 'right',
                reverse: true,
                boxWidth: 24,
                generateLabels(a, b) {
                    console.log(a);
                    console.log(b);
                }
                // display: false,
            }
        }
    }


    return (
        <>
            {
                (selectedDrug && selectedDrug.id && results) ?
                    (isSimulating) ?
                        <IconLoading></IconLoading>
                        :
                        <Chart data={data} options={options} />
                    : ''
            }

        </>
    )
};


export default DrawChart;