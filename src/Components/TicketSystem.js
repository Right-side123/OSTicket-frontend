// import React, { useState } from 'react';
// import './TicketSystem.css'
// import {
//     PieChart,
//     Pie,
//     Cell,
//     Tooltip,
//     BarChart,
//     Bar,
//     XAxis,
//     YAxis,
//     CartesianGrid,
//     //    Legend 
// } from 'recharts';


// const TicketSystemCompo = () => {
//     const [sortBy, setSortBy] = useState('');
//     const [data, setData] = useState([
//         { name: 'Rohit', assigned: 50, closed: 30, closerrate: '70%', responsetime: '1.52h', resolutiontime: '2.5h' },
//         { name: 'Mohit', assigned: 40, closed: 30, closerrate: '80%', responsetime: '1.22h', resolutiontime: '1.5h' },
//         { name: 'Niraj', assigned: 20, closed: 15, closerrate: '85%', responsetime: '1.32h', resolutiontime: '2.2h' },
//         { name: 'Ajay', assigned: 80, closed: 40, closerrate: '50%', responsetime: '1.42h', resolutiontime: '1.2h' },
//         { name: 'Niraj', assigned: 20, closed: 15, closerrate: '85%', responsetime: '1.32h', resolutiontime: '2.2h' },
//         { name: 'Ajay', assigned: 80, closed: 40, closerrate: '50%', responsetime: '1.42h', resolutiontime: '1.2h' },
//         { name: 'Niraj', assigned: 20, closed: 15, closerrate: '85%', responsetime: '1.32h', resolutiontime: '2.2h' },
//         { name: 'Ajay', assigned: 80, closed: 40, closerrate: '50%', responsetime: '1.42h', resolutiontime: '1.2h' },
//         { name: 'Niraj', assigned: 20, closed: 15, closerrate: '85%', responsetime: '1.32h', resolutiontime: '2.2h' },
//         { name: 'Ajay', assigned: 80, closed: 40, closerrate: '50%', responsetime: '1.42h', resolutiontime: '1.2h' },
//         { name: 'Niraj', assigned: 20, closed: 15, closerrate: '85%', responsetime: '1.32h', resolutiontime: '2.2h' },
//         { name: 'Ajay', assigned: 80, closed: 40, closerrate: '50%', responsetime: '1.42h', resolutiontime: '1.2h' }
//     ])

//     const barColors = ['#dbf2f2', '#d7ecfb', '#d5bfff', '#fff5dd', '#ffecd9', '#ffe0e6', '#f4f4f4'];

//     const barData = [
//         { name: '< 1 hour', value: 10 },
//         { name: '1-4 hours', value: 20 },
//         { name: '4-8 hours', value: 50 },
//         { name: '8-24 hours', value: 40 },
//         { name: '1-3 days', value: 22 },
//         { name: '3-7 days', value: 20 },
//         { name: '> 7 days', value: 10 },
//     ];

//     const generateTicks = (maxValue, step = 5) => {
//         const roundedMax = Math.ceil(maxValue / step) * step;
//         const ticks = [];
//         for (let i = 0; i <= roundedMax; i += step) {
//             ticks.push(i);
//         }
//         return ticks;
//     };


//     const handleSort = (value) => {
//         setSortBy(value);
//         const sortedData = [...data];

//         if (value === 'name') {
//             sortedData.sort((a, b) => a.name.localeCompare(b.name));
//         } else if (value === 'tickets') {
//             sortedData.sort((a, b) =>
//                 b.assigned - a.assigned);
//         } else if (value === 'time') {
//             sortedData.sort((a, b) =>
//                 parseFloat(a.resolutiontime) -
//                 parseFloat(b.resolutiontime));
//         }
//         setData(sortedData);
//     };
//     return (
//         <div className='parent_container'>
//             <div className='parent_container_top'>
//                 <div className='parent_container_top_left'>

//                     <h5 className='card_heading'>Tickets by Category</h5>
//                     <hr />
//                     <div className='parent_container_top_left_peichart'>
//                         <div>
//                             <PieChart width={400} height={400}
//                                 margin={{ top: 0, right: 0, left: 80, bottom: 80 }}
//                                 className="PieChart_left">
//                                 <Pie
//                                     dataKey="value"
//                                     data={[
//                                         { name: 'Technical Support', value: 20 },
//                                         { name: 'Service Outages', value: 10 },
//                                         { name: 'Bug Reports', value: 15 },
//                                         { name: 'General Inquiries', value: 10 },
//                                         { name: 'Account Management', value: 15 },
//                                         { name: 'Feature Requests', value: 10 },
//                                         { name: 'Billing Issues', value: 5 },


//                                     ]}
//                                     cx="50%"
//                                     cy="50%"
//                                     innerRadius={80}
//                                     outerRadius={150}
//                                     fill="#8884d8"
//                                     label={false}
//                                 >
//                                     {
//                                         ['#ffe0e6', '#f4f4f4', '#ffecd9', '#ebe0ff', '#dbf2f2', '#fff5dd', '#d7ecfb'].map((color, index) => (
//                                             <Cell key={`cell-${index}`} fill={color} />
//                                         ))
//                                     }
//                                 </Pie>
//                                 <Tooltip />
//                             </PieChart>
//                         </div>
//                         <div className='parent_container_top_left_peichart_content'>
//                             <div className='parent_container_top_left_peichart_content__first'>
//                                 <div className='parent_container_top_left_peichart_content_technicalissues'></div>
//                                 <span>Technical Support</span>
//                             </div>
//                             <div className='parent_container_top_left_peichart_content__first'>
//                                 <div className='parent_container_top_left_peichart_content_billing'></div>
//                                 <span>Billing Issues</span>
//                             </div>
//                             <div className='parent_container_top_left_peichart_content__first'>
//                                 <div className='parent_container_top_left_peichart_content_features'></div>
//                                 <span>Feature Requests</span>
//                             </div>
//                             <div className='parent_container_top_left_peichart_content__first'>
//                                 <div className='parent_container_top_left_peichart_content_account'></div>
//                                 <span>Account Management</span>
//                             </div>
//                             <div className='parent_container_top_left_peichart_content__first'>
//                                 <div className='parent_container_top_left_peichart_content_general'></div>
//                                 <span>General Inquiries</span>
//                             </div>
//                             <div className='parent_container_top_left_peichart_content__first'>
//                                 <div className='parent_container_top_left_peichart_content_bugreport'></div>
//                                 <span>Bug Reports</span>
//                             </div>
//                             <div className='parent_container_top_left_peichart_content__first'>
//                                 <div className='parent_container_top_left_peichart_content_service'></div>
//                                 <span>Service Outages</span>
//                             </div>
//                         </div>
//                     </div>
//                     {/* <hr />
//                     <PieChart width={300} height={300} className='PieChart_left'>
//                         <Pie
//                             dataKey="value"
//                             isAnimationActive={false}
//                             data={[
//                                 { name: 'Technical Support', value: 30 },
//                                 { name: 'Billing Issues', value: 5 },
//                                 { name: 'Feature Requests', value: 10 },
//                                 { name: 'Account Management', value: 15 },
//                                 { name: 'General Inquiries', value: 20 },
//                                 { name: 'Bug Reports', value: 25 },
//                                 { name: 'Service Outages', value: 10 },
//                             ]}
//                             cx="50%"
//                             cy="50%"
//                             outerRadius={70}
//                             fill="#8884d8"
//                             label
//                         >
//                             {
//                                 ['#f87171', '#60a5fa', '#34d399', '#fbbf24', '#a78bfa', '#f59e0b', '#d1d5db'].map((color, index) => (
//                                     <Cell key={`cell-${index}`} fill={color} />
//                                 ))
//                             }
//                         </Pie>
//                         <Tooltip />
//                     </PieChart> */}

//                 </div>
//                 <div className='parent_container_top_right'>
//                     <h5 className='card_heading'>Resolution Time Distribution</h5>
//                     <hr />
//                     <BarChart
//                         width={900}
//                         height={350}
//                         data={barData}
//                         layout="vertical"
//                         margin={{ top: 5, right: 30, left: 50, bottom: 30 }}
//                     >
//                         <CartesianGrid strokeDasharray="0.5 1" />
//                         <XAxis
//                             type="number"
//                             ticks={generateTicks(Math.max(...barData.map(d => d.value)))}
//                             domain={0 - 50}
//                         />

//                         <YAxis
//                             dataKey="name"
//                             type="category"
//                             tickFormatter={(value) => value.replace(/ /g, '\u00A0')}
//                         />


//                         <Tooltip cursor={{ fill: 'transparent' }} />
//                         {/* <Legend /> */}
//                         <Bar dataKey="value">
//                             {barData.map((entry, index) => (
//                                 <Cell key={`cell-${index}`} fill={barColors[index % barColors.length]} />
//                             ))}
//                         </Bar>
//                     </BarChart>


//                     {/* <BarChart
//                         width={800}
//                         height={350}
//                         data={[
//                             { name: '< 1 hour', value: 10 },
//                             { name: '1-4 hours', value: 20 },
//                             { name: '4-8 hours', value: 48 },
//                             { name: '8-24 hours', value: 40 },
//                             { name: '1-3 days', value: 22 },
//                             { name: '3-7 days', value: 20 },
//                             { name: '> 7 days', value: 10 },
//                         ]}
//                         layout="vertical"
//                         margin={{ top: 5, right: 30, left: 50, bottom: 25 }}
//                     >
//                         <CartesianGrid strokeDasharray="5 8" />
//                         <XAxis type="number" />
//                         <YAxis dataKey="name" type="category" />
//                         <Tooltip />
//                         <Legend />
//                         <Bar dataKey="value" fill="#8884d8" />
//                     </BarChart> */}

//                 </div>
//             </div>
//             <div className='parent_container_bottom'>
//                 <div className='parent_container_bottom_inner'>
//                     <div className='card_header'>
//                         <h5 className='card_heading'>Agent Performance</h5>
//                         <select className='sort_dropdown'
//                             value={sortBy}
//                             onChange={(e) => handleSort(e.target.value)}>
//                             <option value="" disabled>Sort By</option>
//                             <option value="name">Name</option>
//                             <option value="tickets">Ticket</option>
//                             <option value="time">Time</option>
//                         </select>
//                     </div>
//                     <hr />
//                     <table className='parent_container_bottom_table'>
//                         <thead>
//                             <tr>
//                                 <th className='agent_name parent_container_bottom_table_thead_th'>Agent</th>
//                                 <th className='parent_container_bottom_table_thead_th'>Tickets Assigned</th>
//                                 <th className='parent_container_bottom_table_thead_th'>Tickets Closed</th>
//                                 <th className='parent_container_bottom_table_thead_th'>Closure Rate</th>
//                                 <th className='parent_container_bottom_table_thead_th'>Avg. Response Time</th>
//                                 <th className='parent_container_bottom_table_thead_th'>Avg. Resolution Time</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {data.map((item, index) => (
//                                 <tr key={index}>
//                                     <td className='agent_name'>{item.name}</td>
//                                     <td>{item.assigned}</td>
//                                     <td>{item.closed}</td>
//                                     <td>{item.closerrate}</td>
//                                     <td>{item.responsetime}</td>
//                                     <td>{item.resolutiontime}</td>
//                                 </tr>
//                             ))}

//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default TicketSystemCompo;



import React, { useState, useEffect } from 'react';
import './TicketSystem.css'
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    //    Legend 
} from 'recharts';
import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;


const TicketSystemCompo = () => {
    const [sortBy, setSortBy] = useState('');
    const [data, setData] = useState([]);
    const [barData, setBarData] = useState([]);
    const [pieData, setPieData] = useState([]);
    const maxValue = Math.max(...barData.map(d => d.value));
    const finalMax = maxValue > 0 ? Math.ceil(maxValue / 10) * 10 : 50;


    //   ****************     Get  Agent Name and Data  **************
    useEffect(() => {
        axios.get(`${API_URL}/agentperformance`)
            .then(response => setData(response.data))
            .catch(error => console.error('Error:', error));
    }, []);



    //   ******************     Get  Resolution Time Distribution Data
    useEffect(() => {
        const fetchResolutionData = async () => {
            try {
                const response = await axios.get(`${API_URL}/resolutiontimedistribution`);
                setBarData(response.data);
            } catch (error) {
                console.error('Error fetching resolution data:', error);
            }
        };

        fetchResolutionData();
    }, []);




    //    ****************************     Get Ticket Category  Data **************

    useEffect(() => {
        axios.get(`${API_URL}/categoryTicket`)
            .then(response => setPieData(response.data))
            .catch(error => console.error('Error:', error));
    }, [])



    // const [data, setData] = useState([
    //     { name: 'Rohit', assigned: 50, closed: 30, closerrate: '70%', responsetime: '1.52h', resolutiontime: '2.5h' },
    //     { name: 'Mohit', assigned: 40, closed: 30, closerrate: '80%', responsetime: '1.22h', resolutiontime: '1.5h' },
    //     { name: 'Niraj', assigned: 20, closed: 15, closerrate: '85%', responsetime: '1.32h', resolutiontime: '2.2h' },
    //     { name: 'Ajay', assigned: 80, closed: 40, closerrate: '50%', responsetime: '1.42h', resolutiontime: '1.2h' },
    //     { name: 'Niraj', assigned: 20, closed: 15, closerrate: '85%', responsetime: '1.32h', resolutiontime: '2.2h' },
    //     { name: 'Ajay', assigned: 80, closed: 40, closerrate: '50%', responsetime: '1.42h', resolutiontime: '1.2h' },
    //     { name: 'Niraj', assigned: 20, closed: 15, closerrate: '85%', responsetime: '1.32h', resolutiontime: '2.2h' },
    //     { name: 'Ajay', assigned: 80, closed: 40, closerrate: '50%', responsetime: '1.42h', resolutiontime: '1.2h' },
    //     { name: 'Niraj', assigned: 20, closed: 15, closerrate: '85%', responsetime: '1.32h', resolutiontime: '2.2h' },
    //     { name: 'Ajay', assigned: 80, closed: 40, closerrate: '50%', responsetime: '1.42h', resolutiontime: '1.2h' },
    //     { name: 'Niraj', assigned: 20, closed: 15, closerrate: '85%', responsetime: '1.32h', resolutiontime: '2.2h' },
    //     { name: 'Ajay', assigned: 80, closed: 40, closerrate: '50%', responsetime: '1.42h', resolutiontime: '1.2h' }
    // ])

    const pieFillColors = ['#ffe0e6', '#f4f4f4', '#ebe0ff', '#ffecd9', '#dbf2f2', '#fff5dd', '#d7ecfb'];
    const pieBorderColors = ['#e899a5', '#cccccc', '#bfa8f2', '#ffbb99', '#99d6d6', '#ffddaa', '#99c2f2'];


    const barColors = ['#dbf2f2', '#d7ecfb', '#d5bfff', '#fff5dd', '#ffecd9', '#ffe0e6', '#f4f4f4'];
    const barBorderColors = ['#bae7e7', '#a8d7f6', '#d2bcff', '#fff0ce', '#ffd6af', '#ffb9c8', '#e6e6e6'];
    const CustomBarShape = (props) => {
        const { x, y, width, height, index } = props;
        const fill = barColors[index % barColors.length];
        const stroke = barBorderColors[index % barBorderColors.length];

        return (
            <>
                <rect
                    x={x}
                    y={y}
                    width={width}
                    height={height}
                    fill={fill}
                    rx={3}
                />

                <line x1={x} y1={y} x2={x + width} y2={y} stroke={stroke} strokeWidth={1.5} />

                <line x1={x + width} y1={y} x2={x + width} y2={y + height} stroke={stroke} strokeWidth={1.5} />

                <line x1={x} y1={y + height} x2={x + width} y2={y + height} stroke={stroke} strokeWidth={1.5} />
            </>
        );
    };

    // const barData = [
    //     { name: '< 1 hour', value: 10 },
    //     { name: '1-4 hours', value: 20 },
    //     { name: '4-8 hours', value: 50 },
    //     { name: '8-24 hours', value: 40 },
    //     { name: '1-3 days', value: 22 },
    //     { name: '3-7 days', value: 20 },
    //     { name: '> 7 days', value: 10 },
    // ];

    // const generateTicks = (maxValue, step = 5) => {
    //     const roundedMax = Math.ceil(maxValue / step) * step;
    //     const ticks = [];
    //     for (let i = 0; i <= roundedMax; i += step) {
    //         ticks.push(i);
    //     }
    //     return ticks;
    // };

    const generateTicks = (max) => {
        const step = Math.ceil(max / 5);
        return Array.from({ length: 6 }, (_, i) => i * step);
    };


    const handleSort = (value) => {
        setSortBy(value);
        const sortedData = [...data];

        if (value === 'name') {
            sortedData.sort((a, b) => a.name.localeCompare(b.name));
        } else if (value === 'tickets') {
            sortedData.sort((a, b) =>
                b.assigned - a.assigned);
        } else if (value === 'time') {
            sortedData.sort((a, b) =>
                parseFloat(a.resolutiontime) -
                parseFloat(b.resolutiontime));
        }
        setData(sortedData);
    };

    return (
        <div className='parent_container'>
            <div className='parent_container_top'>
                <div className='parent_container_top_left'>

                    <h5 className='card_heading'>Tickets by Category</h5>
                    <hr />
                    <div className='parent_container_top_left_peichart'>
                        <div className='peichartresponsive'>
                            <PieChart width={400} height={400}
                                margin={{ top: 0, right: 0, left: 80, bottom: 80 }}
                                className="PieChart_left">
                                <Pie
                                    dataKey="value"
                                    // data={[
                                    //     { name: 'Technical Support', value: 20 },
                                    //     { name: 'Service Outages', value: 10 },
                                    //     { name: 'Bug Reports', value: 15 },
                                    //     { name: 'General Inquiries', value: 10 },
                                    //     { name: 'Account Management', value: 15 },
                                    //     { name: 'Feature Requests', value: 10 },
                                    //     { name: 'Billing Issues', value: 5 },


                                    // ]}
                                    data={pieData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={80}
                                    outerRadius={150}
                                    fill="#8884d8"
                                    label={false}
                                >
                                    {
                                        ['#ffe0e6', '#f4f4f4', '#ebe0ff', '#ffecd9', '#dbf2f2', '#fff5dd', '#d7ecfb'].map((color, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={pieFillColors[index % pieFillColors.length]}
                                                stroke={pieBorderColors[index % pieBorderColors.length]}
                                                strokeWidth={2}
                                            />

                                        ))
                                    }
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </div>
                        <div className='parent_container_top_left_peichart_content'>
                            <div className='parent_container_top_left_peichart_content__first'>
                                <div className='parent_container_top_left_peichart_content_technicalissues'></div>
                                <span>Technical Support</span>
                            </div>
                            <div className='parent_container_top_left_peichart_content__first'>
                                <div className='parent_container_top_left_peichart_content_billing'></div>
                                <span>Billing Issues</span>
                            </div>
                            <div className='parent_container_top_left_peichart_content__first'>
                                <div className='parent_container_top_left_peichart_content_features'></div>
                                <span>Feature Requests</span>
                            </div>
                            <div className='parent_container_top_left_peichart_content__first'>
                                <div className='parent_container_top_left_peichart_content_account'></div>
                                <span>Account Management</span>
                            </div>
                            <div className='parent_container_top_left_peichart_content__first'>
                                <div className='parent_container_top_left_peichart_content_general'></div>
                                <span>General Inquiries</span>
                            </div>
                            <div className='parent_container_top_left_peichart_content__first'>
                                <div className='parent_container_top_left_peichart_content_bugreport'></div>
                                <span>Bug Reports</span>
                            </div>
                            <div className='parent_container_top_left_peichart_content__first'>
                                <div className='parent_container_top_left_peichart_content_service'></div>
                                <span>Service Outages</span>
                            </div>
                        </div>
                    </div>


                </div>
                <div className='parent_container_top_right'>
                    <h5 className='card_heading'>Resolution Time Distribution</h5>
                    <hr />
                    <BarChart
                        className='barchart_ticketsystem'
                        width={900}
                        height={350}
                        data={barData}
                        layout="vertical"
                        margin={{ top: 5, right: 30, left: 50, bottom: 30 }}
                    >
                        <CartesianGrid strokeDasharray="0.5 1" />
                        <XAxis
                            type="number"
                            ticks={generateTicks(finalMax)}
                            domain={[0, finalMax]}
                        />


                        <YAxis
                            dataKey="name"
                            type="category"
                            tickFormatter={(value) => value.replace(/ /g, '\u00A0')}
                        />


                        <Tooltip cursor={{ fill: 'transparent' }} />
                        {/* <Legend /> */}
                        <Bar dataKey="value" minPointSize={5}
                            shape={(props) => <CustomBarShape {...props} index={props.index} />}>
                            {barData.map((entry, index) => (
                                <Cell key={`cell-${index}`} />
                            ))}
                        </Bar>

                    </BarChart>

                </div>
            </div>
            <div className='parent_container_bottom'>
                <div className='parent_container_bottom_inner'>
                    <div className='card_header'>
                        <h5 className='card_heading'>Agent Performance</h5>
                        <select className='sort_dropdown'
                            value={sortBy}
                            onChange={(e) => handleSort(e.target.value)}>
                            <option value="" disabled>Sort By</option>
                            <option value="name">Name</option>
                            <option value="tickets">Ticket</option>
                            <option value="time">Time</option>
                        </select>
                    </div>
                    <hr />
                    <table className='parent_container_bottom_table'>
                        <thead>
                            <tr>
                                <th className='agent_name parent_container_bottom_table_thead_th'>Agent</th>
                                <th className='parent_container_bottom_table_thead_th'>Tickets Assigned</th>
                                <th className='parent_container_bottom_table_thead_th'>Tickets Closed</th>
                                <th className='parent_container_bottom_table_thead_th'>Closure Rate</th>
                                <th className='parent_container_bottom_table_thead_th'>Avg. Response Time</th>
                                <th className='parent_container_bottom_table_thead_th'>Avg. Resolution Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td className='agent_name'>{item.name}</td>
                                    <td>{item.assigned}</td>
                                    <td>{item.closed}</td>
                                    <td>{item.closerrate}</td>
                                    <td>{item.avg_response}</td>
                                    <td>{item.avg_resolution_time}</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default TicketSystemCompo;
