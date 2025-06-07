// import React, { useState } from 'react';
// import './Dashboard.css';
// import ticketicon from './Assets/ticketsblue.png';
// import resolvedicon from './Assets/resolveddashboard.png';
// import resolutiontimeicon from './Assets/hoursglassyellow.png';
// import responsetimeicon from './Assets/leftturnblue.png';
// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';

// const DashboardCompo = () => {

//     const [period, setPeriod] = useState('weekly');
//     const [dateRange, setDateRange] = useState('30');

//     const parseDate = (dateStr) => {

//         const currentYear = new Date().getFullYear();
//         return new Date(`${dateStr} ${currentYear}`);
//     };

//     const today = new Date();

//     const filterByDateRange = (data, range) => {
//         return data.filter(item => {
//             const itemDate = parseDate(item.name);
//             const diffTime = today - itemDate;
//             const diffDays = diffTime / (1000 * 60 * 60 * 24);
//             return diffDays <= range;
//         });
//     };


//     const dailyData = [
//         { name: 'Apr 28', tickets: 20, resolved: 18, avgResolutionTime: 26.4, firstResponseTime: 1.2 },
//         { name: 'Apr 29', tickets: 18, resolved: 16, avgResolutionTime: 25.1, firstResponseTime: 1.0 },
//         { name: 'Apr 30', tickets: 22, resolved: 20, avgResolutionTime: 30.0, firstResponseTime: 1.4 },
//         { name: 'May 1', tickets: 25, resolved: 21, avgResolutionTime: 28.5, firstResponseTime: 1.1 },
//         { name: 'May 2', tickets: 15, resolved: 12, avgResolutionTime: 24.3, firstResponseTime: 0.9 },
//         { name: 'May 24', tickets: 10, resolved: 9, avgResolutionTime: 20.8, firstResponseTime: 1.3 },
//         { name: 'May 25', tickets: 20, resolved: 18, avgResolutionTime: 29.2, firstResponseTime: 1.5 },
//     ];


//     const weeklyData = [
//         { name: 'Apr 28 - May 5', tickets: 130, resolved: 120, avgResolutionTime: 27.5, firstResponseTime: 1.1 },
//         { name: 'May 5 - May 12', tickets: 150, resolved: 135, avgResolutionTime: 29.0, firstResponseTime: 1.0 },
//         { name: 'May 12 - May 19', tickets: 130, resolved: 110, avgResolutionTime: 26.3, firstResponseTime: 1.2 },
//         { name: 'May 19 - May 26', tickets: 50, resolved: 45, avgResolutionTime: 22.4, firstResponseTime: 1.3 },
//         { name: 'May 26 - May 28', tickets: 90, resolved: 85, avgResolutionTime: 24.8, firstResponseTime: 1.1 },
//     ];


//     const monthlyData = [
//         { name: 'Jan', tickets: 450, resolved: 420, avgResolutionTime: 30.2, firstResponseTime: 1.3 },
//         { name: 'Feb', tickets: 560, resolved: 530, avgResolutionTime: 29.5, firstResponseTime: 1.2 },
//         { name: 'Mar', tickets: 600, resolved: 580, avgResolutionTime: 28.7, firstResponseTime: 1.1 },
//         { name: 'Apr', tickets: 700, resolved: 660, avgResolutionTime: 27.4, firstResponseTime: 1.0 },
//         { name: 'May', tickets: 500, resolved: 470, avgResolutionTime: 25.9, firstResponseTime: 1.0 },
//     ];


//     let dataToShow;
//     if (period === 'daily') {
//         dataToShow = filterByDateRange(dailyData, Number(dateRange));
//     } else if (period === 'weekly') {
//         dataToShow = weeklyData;
//     } else if (period === 'monthly') {
//         dataToShow = monthlyData;
//     }

//     const totalTickets = dataToShow.reduce((acc, curr) => acc + curr.tickets, 0);
//     const totalResolved = dataToShow.reduce((acc, curr) => acc + (curr.resolved || 0), 0);
//     const avgResolutionTime = dataToShow.length
//         ? (dataToShow.reduce((acc, curr) => acc + (curr.avgResolutionTime || 0), 0) / dataToShow.length).toFixed(2)
//         : '0';
//     const avgFirstResponseTime = dataToShow.length
//         ? (dataToShow.reduce((acc, curr) => acc + (curr.firstResponseTime || 0), 0) / dataToShow.length).toFixed(2)
//         : '0';





//     // let dataToShow;
//     // if (period === 'daily') dataToShow = dailyData;
//     // else if (period === 'weekly') dataToShow = weeklyData;
//     // else if (period === 'monthly') dataToShow = monthlyData;


//     // const data = [
//     //     { name: 'Apr 28 - May 5', tickets: 130 },
//     //     { name: 'May 5 - May 12', tickets: 150 },
//     //     { name: 'May 12 - May 19', tickets: 130 },
//     //     { name: 'May 19 - May 26', tickets: 50 },
//     //     { name: 'May 26 - May 28', tickets: 90 },
//     // ];

//     const CustomBar = ({ x, y, width, height, fill }) => (
//         <>
//             <rect x={x} y={y} width={width} height={height} fill={fill} />
//             <line x1={x} y1={y} x2={x + width} y2={y} stroke="#4aabed" strokeWidth={2} />
//             <line x1={x} y1={y} x2={x} y2={y + height} stroke="#4aabed" strokeWidth={2} />
//             <line x1={x + width} y1={y} x2={x + width} y2={y + height} stroke="#4aabed" strokeWidth={2} />
//         </>
//     );

//     return (
//         <div className='parent_container_dashboard'>
//             <div className='parent_container_dashboard_heading'>
//                 <h2 className='parent_container_dashboard_heading_h2'>Ticket Analytics Dashboard</h2>
//                 <div className='parent_container_dashboard_top'>
//                     <h6 className='parent_container_dashboard_heading_h6'>Analyzing data from 2025-04-28 to 2025-05-28</h6>
//                     <div className='parent_container_dashboard_top_right_button'>
//                         <select
//                             className='sort_dropdown'
//                             value={dateRange}
//                             onChange={(e) => setDateRange(e.target.value)}
//                         >
//                             <option value="30">Last 30 Days</option>
//                             <option value="15">Last 15 Days</option>
//                             <option value="7">Last 7 Days</option>
//                         </select>
//                         <button
//                             className='parent_container_dashboard_top_right_button_btn'
//                             onClick={() => {

//                             }}
//                         >
//                             Update
//                         </button>

//                     </div>
//                 </div>

//             </div>
//             <div className='middle_container_parent'>
//                 <div className='cards'>
//                     <img src={ticketicon} alt='total ticket' />
//                     <h6 className='cards_heading'>Total Ticket</h6>
//                     <h4 className='cards_heading_heading'>{totalTickets}</h4>
//                     <p className='cards_content'>Created in this period</p>
//                 </div>
//                 <div className='cards'>
//                     <img src={resolvedicon} alt='total ticket' />
//                     <h6 className='cards_heading'>Resolved</h6>
//                     <h4 className='cards_heading_heading'>{totalResolved}</h4>
//                     <p className='cards_content' style={{ backgroundColor: '#198754', color: '#fff' }}>
//                         {totalTickets ? ((totalResolved / totalTickets) * 100).toFixed(1) + '%' : '0%'} rate
//                     </p>
//                 </div>
//                 <div className='cards'>
//                     <img src={resolutiontimeicon} alt='total ticket' />
//                     <h6 className='cards_heading'>Avg. Resolution time</h6>
//                     <h4 className='cards_heading_heading'>{avgResolutionTime}h</h4>
//                     <p className='cards_content'>From ticket creation</p>
//                 </div>
//                 <div className='cards'>
//                     <img src={responsetimeicon} alt='total ticket' />
//                     <h6 className='cards_heading'>First Response Time</h6>
//                     <h4 className='cards_heading_heading'>{avgFirstResponseTime}h</h4>
//                     <p className='cards_content'>Average time to respond</p>
//                 </div>

//             </div>
//             <div className='bottom_conatiner_parent'>
//                 <div className='bottom_conatiner_parent_card_header'>
//                     <h5 className='bottom_conatiner_parent_heading'>Ticket Volume Over Time</h5>
//                     <div className='report_filter_tabs'>
//                         <button
//                             className={`tab_btn ${period === 'daily' ? 'active' : ''}`}
//                             onClick={() => setPeriod('daily')}
//                         >
//                             Daily
//                         </button>

//                         <button
//                             className={`tab_btn ${period === 'weekly' ? 'active' : ''}`}
//                             onClick={() => setPeriod('weekly')}
//                         >
//                             Weekly
//                         </button>

//                         <button
//                             className={`tab_btn ${period === 'monthly' ? 'active' : ''}`}
//                             onClick={() => setPeriod('monthly')}
//                         >
//                             Monthly
//                         </button>

//                     </div>
//                 </div>
//                 <hr />
//                 <div style={{ width: '100%', height: 450 }} className='bottom_conatiner_parent_barchart'>
//                     <Legend />
//                     <ResponsiveContainer>
//                         <BarChart data={dataToShow}
//                             margin={{ top: 10, right: 30, left: 30, bottom: 80 }}>
//                             <CartesianGrid strokeDasharray="1 1" />
//                             <XAxis dataKey="name"
//                                 angle={-45}
//                                 textAnchor="end"
//                                 interval={0} />
//                             <YAxis
//                                 tickCount={9}
//                                 domain={[0, 'auto']} />
//                             <Tooltip cursor={{ fill: 'transparent' }} />
//                             {/* <Tooltip cursor={{ fill: '#ccc', opacity: 0.2, width: 2 }} /> */}

//                             <Bar dataKey="tickets" fill="#d7ecfb" barSize={200} shape={<CustomBar />} />
//                         </BarChart>
//                     </ResponsiveContainer>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default DashboardCompo;







// import React, { useState, useEffect } from 'react';
// import './Dashboard.css';
// import ticketicon from './Assets/ticketsblue.png';
// import resolvedicon from './Assets/resolveddashboard.png';
// import resolutiontimeicon from './Assets/hoursglassyellow.png';
// import responsetimeicon from './Assets/leftturnblue.png';
// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';

// const DashboardCompo = () => {
//     const [period, setPeriod] = useState('weekly');
//     const [dateRange, setDateRange] = useState('30');

//     const [dashboardData, setDashboardData] = useState({
//         totalTickets: 0,
//         totalResolved: 0,
//         avgResolutionTime: '0',
//         avgFirstResponseTime: '0',
//     });


//     useEffect(() => {

//         const endDate = new Date();
//         const startDate = new Date();
//         startDate.setDate(endDate.getDate() - Number(dateRange));


//         const formatDate = (date) => {
//             const d = date.getDate().toString().padStart(2, '0');
//             const m = (date.getMonth() + 1).toString().padStart(2, '0');
//             const y = date.getFullYear();
//             return `${y}-${m}-${d}`;
//         };

//         const formattedStartDate = formatDate(startDate);
//         const formattedEndDate = formatDate(endDate);

//         // Fetch karo data
//         fetch(`http://localhost:8500/api/dashboard?startDate=${formattedStartDate}&endDate=${formattedEndDate}`)
//             .then((res) => res.json())
//             .then((data) => {
//                 setDashboardData({
//                     totalTickets: data.totalTickets,
//                     totalResolved: data.totalResolved,
//                     avgResolutionTime: data.avgResolutionTime,
//                     avgFirstResponseTime: data.avgFirstResponseTime,
//                 });
//             })
//             .catch((err) => {
//                 console.error('Error fetching dashboard data:', err);
//             });
//     }, [dateRange]);


//     const totalTickets = dashboardData.totalTickets;
//     const totalResolved = dashboardData.totalResolved;
//     const avgResolutionTime = dashboardData.avgResolutionTime;
//     const avgFirstResponseTime = dashboardData.avgFirstResponseTime;

//     const parseDate = (dateStr) => {

//         const currentYear = new Date().getFullYear();
//         return new Date(`${dateStr} ${currentYear}`);
//     };


//     const today = new Date();

//     const filterByDateRange = (data, range) => {
//         return data.filter(item => {
//             const itemDate = parseDate(item.name);
//             const diffTime = today - itemDate;
//             const diffDays = diffTime / (1000 * 60 * 60 * 24);
//             return diffDays <= range;
//         });
//     };


//     const dailyData = [
//         { name: 'Apr 28', tickets: 20, resolved: 18, avgResolutionTime: 26.4, firstResponseTime: 1.2 },
//         { name: 'Apr 29', tickets: 18, resolved: 16, avgResolutionTime: 25.1, firstResponseTime: 1.0 },
//         { name: 'Apr 30', tickets: 22, resolved: 20, avgResolutionTime: 30.0, firstResponseTime: 1.4 },
//         { name: 'May 1', tickets: 25, resolved: 21, avgResolutionTime: 28.5, firstResponseTime: 1.1 },
//         { name: 'May 2', tickets: 15, resolved: 12, avgResolutionTime: 24.3, firstResponseTime: 0.9 },
//         { name: 'May 24', tickets: 10, resolved: 9, avgResolutionTime: 20.8, firstResponseTime: 1.3 },
//         { name: 'May 25', tickets: 20, resolved: 18, avgResolutionTime: 29.2, firstResponseTime: 1.5 },
//     ];


//     const weeklyData = [
//         { name: 'Apr 28 - May 5', tickets: 130, resolved: 120, avgResolutionTime: 27.5, firstResponseTime: 1.1 },
//         { name: 'May 5 - May 12', tickets: 150, resolved: 135, avgResolutionTime: 29.0, firstResponseTime: 1.0 },
//         { name: 'May 12 - May 19', tickets: 130, resolved: 110, avgResolutionTime: 26.3, firstResponseTime: 1.2 },
//         { name: 'May 19 - May 26', tickets: 50, resolved: 45, avgResolutionTime: 22.4, firstResponseTime: 1.3 },
//         { name: 'May 26 - May 28', tickets: 90, resolved: 85, avgResolutionTime: 24.8, firstResponseTime: 1.1 },
//     ];


//     const monthlyData = [
//         { name: 'Jan', tickets: 450, resolved: 420, avgResolutionTime: 30.2, firstResponseTime: 1.3 },
//         { name: 'Feb', tickets: 560, resolved: 530, avgResolutionTime: 29.5, firstResponseTime: 1.2 },
//         { name: 'Mar', tickets: 600, resolved: 580, avgResolutionTime: 28.7, firstResponseTime: 1.1 },
//         { name: 'Apr', tickets: 700, resolved: 660, avgResolutionTime: 27.4, firstResponseTime: 1.0 },
//         { name: 'May', tickets: 500, resolved: 470, avgResolutionTime: 25.9, firstResponseTime: 1.0 },
//     ];

//     let dataToShow;
//     if (period === 'daily') {
//         dataToShow = filterByDateRange(dailyData, Number(dateRange));
//     } else if (period === 'weekly') {
//         dataToShow = weeklyData;
//     } else if (period === 'monthly') {
//         dataToShow = monthlyData;
//     }


//     const CustomBar = ({ x, y, width, height, fill }) => (
//         <>
//             <rect x={x} y={y} width={width} height={height} fill={fill} />
//             <line x1={x} y1={y} x2={x + width} y2={y} stroke="#4aabed" strokeWidth={2} />
//             <line x1={x} y1={y} x2={x} y2={y + height} stroke="#4aabed" strokeWidth={2} />
//             <line x1={x + width} y1={y} x2={x + width} y2={y + height} stroke="#4aabed" strokeWidth={2} />
//         </>
//     );
//     return (
//         <div className='parent_container_dashboard'>
//             <div className='parent_container_dashboard_heading'>
//                 <h2 className='parent_container_dashboard_heading_h2'>Ticket Analytics Dashboard</h2>
//                 <div className='parent_container_dashboard_top'>
//                     <h6 className='parent_container_dashboard_heading_h6'>
//                         Analyzing data from last {dateRange} days
//                     </h6>
//                     <div className='parent_container_dashboard_top_right_button'>
//                         <select
//                             className='sort_dropdown'
//                             value={dateRange}
//                             onChange={(e) => setDateRange(e.target.value)}
//                         >
//                             <option value="30">Last 30 Days</option>
//                             <option value="15">Last 15 Days</option>
//                             <option value="7">Last 7 Days</option>
//                         </select>
//                         <button
//                             className='parent_container_dashboard_top_right_button_btn'
//                             onClick={() => {
//                                 // API call useEffect me dateRange ke change se automatic ho jaega, isliye kuch karne ki zarurat nahi
//                             }}
//                         >
//                             Update
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             <div className='middle_container_parent'>
//                 <div className='cards'>
//                     <img src={ticketicon} alt='total ticket' />
//                     <h6 className='cards_heading'>Total Ticket</h6>
//                     <h4 className='cards_heading_heading'>{totalTickets}</h4>
//                     <p className='cards_content'>Created in this period</p>
//                 </div>
//                 <div className='cards'>
//                     <img src={resolvedicon} alt='total ticket' />
//                     <h6 className='cards_heading'>Resolved</h6>
//                     <h4 className='cards_heading_heading'>{totalResolved}</h4>
//                     <p className='cards_content' style={{ backgroundColor: '#198754', color: '#fff' }}>
//                         {totalTickets ? ((totalResolved / totalTickets) * 100).toFixed(1) + '%' : '0%'} rate
//                     </p>
//                 </div>
//                 <div className='cards'>
//                     <img src={resolutiontimeicon} alt='total ticket' />
//                     <h6 className='cards_heading'>Avg. Resolution time</h6>
//                     <h4 className='cards_heading_heading'>{avgResolutionTime}h</h4>
//                     <p className='cards_content'>From ticket creation</p>
//                 </div>
//                 <div className='cards'>
//                     <img src={responsetimeicon} alt='total ticket' />
//                     <h6 className='cards_heading'>First Response Time</h6>
//                     <h4 className='cards_heading_heading'>{avgFirstResponseTime}h</h4>
//                     <p className='cards_content'>Average time to respond</p>
//                 </div>
//             </div>

//             <div className='bottom_conatiner_parent'>
//                 <div className='bottom_conatiner_parent_card_header'>
//                     <h5 className='bottom_conatiner_parent_heading'>Ticket Volume Over Time</h5>
//                     <div className='report_filter_tabs'>
//                         <button
//                             className={`tab_btn ${period === 'daily' ? 'active' : ''}`}
//                             onClick={() => setPeriod('daily')}
//                         >
//                             Daily
//                         </button>

//                         <button
//                             className={`tab_btn ${period === 'weekly' ? 'active' : ''}`}
//                             onClick={() => setPeriod('weekly')}
//                         >
//                             Weekly
//                         </button>

//                         <button
//                             className={`tab_btn ${period === 'monthly' ? 'active' : ''}`}
//                             onClick={() => setPeriod('monthly')}
//                         >
//                             Monthly
//                         </button>

//                     </div>
//                 </div>
//                 <hr />
//                 <div style={{ width: '100%', height: 450 }} className='bottom_conatiner_parent_barchart'>
//                     <Legend />
//                     <ResponsiveContainer>
//                         <BarChart data={dataToShow}
//                             margin={{ top: 10, right: 30, left: 30, bottom: 80 }}>
//                             <CartesianGrid strokeDasharray="1 1" />
//                             <XAxis dataKey="name"
//                                 angle={-45}
//                                 textAnchor="end"
//                                 interval={0} />
//                             <YAxis
//                                 tickCount={9}
//                                 domain={[0, 'auto']} />
//                             <Tooltip cursor={{ fill: 'transparent' }} />
//                             {/* <Tooltip cursor={{ fill: '#ccc', opacity: 0.2, width: 2 }} /> */}

//                             <Bar dataKey="tickets" fill="#d7ecfb" barSize={200} shape={<CustomBar />} />
//                         </BarChart>
//                     </ResponsiveContainer>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default DashboardCompo;






// import React, { useState, useEffect } from 'react';
// import './Dashboard.css';
// import ticketicon from './Assets/ticketsblue.png';
// import resolvedicon from './Assets/resolveddashboard.png';
// import resolutiontimeicon from './Assets/hoursglassyellow.png';
// import responsetimeicon from './Assets/leftturnblue.png';
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   CartesianGrid,
//   Legend,
// } from 'recharts';

// const DashboardCompo = () => {
//   const [period, setPeriod] = useState('weekly');
//   const [dateRange, setDateRange] = useState('30');

//   const [dashboardData, setDashboardData] = useState({
//     totalTickets: 0,
//     totalResolved: 0,
//     avgResolutionTime: '0',
//     avgFirstResponseTime: '0',
//   });

//   const [chartData, setChartData] = useState([]);

//   useEffect(() => {
//     // Calculate start and end dates based on selected dateRange
//     const endDate = new Date();
//     const startDate = new Date();
//     startDate.setDate(endDate.getDate() - Number(dateRange));

//     const formatDate = (date) => {
//       const d = date.getDate().toString().padStart(2, '0');
//       const m = (date.getMonth() + 1).toString().padStart(2, '0');
//       const y = date.getFullYear();
//       return `${y}-${m}-${d}`;
//     };

//     const formattedStartDate = formatDate(startDate);
//     const formattedEndDate = formatDate(endDate);

//     // Fetch summary dashboard data (cards)
//     fetch(
//       `http://localhost:8500/api/dashboard?startDate=${formattedStartDate}&endDate=${formattedEndDate}`
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         setDashboardData({
//           totalTickets: data.totalTickets,
//           totalResolved: data.totalResolved,
//           avgResolutionTime: data.avgResolutionTime,
//           avgFirstResponseTime: data.avgFirstResponseTime,
//         });
//       })
//       .catch((err) => {
//         console.error('Error fetching dashboard data:', err);
//       });

//     // Fetch chart data
//     fetch(
//       `http://localhost:8500/api/dashboardchart?startDate=${formattedStartDate}&endDate=${formattedEndDate}&period=${period}`
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         console.log('chartData:', chartData);

//         setChartData(data);
//       })
//       .catch((err) => {
//         console.error('Error fetching chart data:', err);
//       });
//   }, [dateRange, period]);

//   const {
//     totalTickets,
//     totalResolved,
//     avgResolutionTime,
//     avgFirstResponseTime,
//   } = dashboardData;

//   // Prepare data for the chart
//   const dataToShow = chartData.map((item) => ({
//     name: item.period,
//     tickets: Number(item.tickets),
//     resolved: Number(item.resolved),
//     avgResolutionTime: Number(item.avgResolutionTime).toFixed(2),
//     firstResponseTime: Number(item.avgFirstResponseTime).toFixed(2),
//   }));

//   // Custom bar shape with borders
//   const CustomBar = ({ x, y, width, height, fill }) => (
//     <>
//       <rect x={x} y={y} width={width} height={height} fill={fill} />
//       <line x1={x} y1={y} x2={x + width} y2={y} stroke="#4aabed" strokeWidth={2} />
//       <line x1={x} y1={y} x2={x} y2={y + height} stroke="#4aabed" strokeWidth={2} />
//       <line
//         x1={x + width}
//         y1={y}
//         x2={x + width}
//         y2={y + height}
//         stroke="#4aabed"
//         strokeWidth={2}
//       />
//     </>
//   );

//   return (
//     <div className="parent_container_dashboard">
//       <div className="parent_container_dashboard_heading">
//         <h2 className="parent_container_dashboard_heading_h2">
//           Ticket Analytics Dashboard
//         </h2>
//         <div className="parent_container_dashboard_top">
//           <h6 className="parent_container_dashboard_heading_h6">
//             Analyzing data from last {dateRange} days
//           </h6>
//           <div className="parent_container_dashboard_top_right_button">
//             <select
//               className="sort_dropdown"
//               value={dateRange}
//               onChange={(e) => setDateRange(e.target.value)}
//             >
//               <option value="30">Last 30 Days</option>
//               <option value="15">Last 15 Days</option>
//               <option value="7">Last 7 Days</option>
//             </select>
//             <button
//               className="parent_container_dashboard_top_right_button_btn"
//               onClick={() => {
//                 // No need to manually call API here because useEffect reacts to dateRange changes
//               }}
//             >
//               Update
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="middle_container_parent">
//         <div className="cards">
//           <img src={ticketicon} alt="total ticket" />
//           <h6 className="cards_heading">Total Ticket</h6>
//           <h4 className="cards_heading_heading">{totalTickets}</h4>
//           <p className="cards_content">Created in this period</p>
//         </div>
//         <div className="cards">
//           <img src={resolvedicon} alt="resolved tickets" />
//           <h6 className="cards_heading">Resolved</h6>
//           <h4 className="cards_heading_heading">{totalResolved}</h4>
//           <p className="cards_content" style={{ backgroundColor: '#198754', color: '#fff' }}>
//             {totalTickets ? ((totalResolved / totalTickets) * 100).toFixed(1) + '%' : '0%'} rate
//           </p>
//         </div>
//         <div className="cards">
//           <img src={resolutiontimeicon} alt="avg resolution time" />
//           <h6 className="cards_heading">Avg. Resolution time</h6>
//           <h4 className="cards_heading_heading">{avgResolutionTime}h</h4>
//           <p className="cards_content">From ticket creation</p>
//         </div>
//         <div className="cards">
//           <img src={responsetimeicon} alt="first response time" />
//           <h6 className="cards_heading">First Response Time</h6>
//           <h4 className="cards_heading_heading">{avgFirstResponseTime}h</h4>
//           <p className="cards_content">Average time to respond</p>
//         </div>
//       </div>

//       <div className="bottom_conatiner_parent">
//         <div className="bottom_conatiner_parent_card_header">
//           <h5 className="bottom_conatiner_parent_heading">Ticket Volume Over Time</h5>
//           <div className="report_filter_tabs">
//             <button
//               className={`tab_btn ${period === 'daily' ? 'active' : ''}`}
//               onClick={() => setPeriod('daily')}
//             >
//               Daily
//             </button>

//             <button
//               className={`tab_btn ${period === 'weekly' ? 'active' : ''}`}
//               onClick={() => setPeriod('weekly')}
//             >
//               Weekly
//             </button>

//             <button
//               className={`tab_btn ${period === 'monthly' ? 'active' : ''}`}
//               onClick={() => setPeriod('monthly')}
//             >
//               Monthly
//             </button>
//           </div>
//         </div>
//         <hr />
//         <div style={{ width: '100%', height: 450 }} className="bottom_conatiner_parent_barchart">
//           <ResponsiveContainer>
//             <BarChart
//               data={dataToShow}
//               margin={{ top: 10, right: 30, left: 30, bottom: 80 }}
//             >
//               <CartesianGrid strokeDasharray="1 1" />
//               <XAxis dataKey="name" angle={-45} textAnchor="end" interval={0} />
//               <YAxis tickCount={9} domain={[0, 'auto']} />
//               <Tooltip cursor={{ fill: 'transparent' }} />
//               <Legend />
//               <Bar dataKey="tickets" fill="#d7ecfb" barSize={50} shape={<CustomBar />} />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardCompo;





// *********************************************************************
//                      ************************************************************



import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import ticketicon from './Assets/ticketsblue.png';
import resolvedicon from './Assets/resolveddashboard.png';
import resolutiontimeicon from './Assets/hoursglassyellow.png';
import responsetimeicon from './Assets/leftturnblue.png';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, } from 'recharts';
import { format, startOfWeek, endOfWeek } from 'date-fns';

const API_URL = process.env.REACT_APP_API_URL;


const DashboardCompo = () => {
    const [period, setPeriod] = useState('weekly');
    const [dateRange, setDateRange] = useState('30');

    const [dashboardData, setDashboardData] = useState({
        totalTickets: 0,
        totalResolved: 0,
        avgResolutionTime: '0',
        avgFirstResponseTime: '0',
    });

    const [chartData, setChartData] = useState([]);


    useEffect(() => {

        const endDate = new Date();
        const startDate = new Date();
        startDate.setDate(endDate.getDate() - Number(dateRange));


        const formatDate = (date) => {
            const d = date.getDate().toString().padStart(2, '0');
            const m = (date.getMonth() + 1).toString().padStart(2, '0');
            const y = date.getFullYear();
            return `${y}-${m}-${d}`;
        };

        const formattedStartDate = formatDate(startDate);
        const formattedEndDate = formatDate(endDate);

        fetch(`${API_URL}/dashboard?startDate=${formattedStartDate}&endDate=${formattedEndDate}`)
            .then((res) => res.json())
            .then((data) => {
                setDashboardData({
                    totalTickets: data.totalTickets,
                    totalResolved: data.totalResolved,
                    avgResolutionTime: data.avgResolutionTime,
                    avgFirstResponseTime: data.avgFirstResponseTime,
                });
            })
            .catch((err) => {
                console.error('Error fetching dashboard data:', err);
            });
    }, [dateRange]);


    const totalTickets = dashboardData.totalTickets;
    const totalResolved = dashboardData.totalResolved;
    const avgResolutionTime = dashboardData.avgResolutionTime;
    const avgFirstResponseTime = dashboardData.avgFirstResponseTime;

    // const parseDate = (dateStr) => {

    //     const currentYear = new Date().getFullYear();
    //     return new Date(`${dateStr} ${currentYear}`);
    // };


    // const today = new Date();

    // const filterByDateRange = (data, range) => {
    //     return data.filter(item => {
    //         const itemDate = parseDate(item.name);
    //         const diffTime = today - itemDate;
    //         const diffDays = diffTime / (1000 * 60 * 60 * 24);
    //         return diffDays <= range;
    //     });
    // };


    useEffect(() => {
        const endDate = new Date();
        const startDate = new Date();
        startDate.setDate(endDate.getDate() - Number(dateRange));

        const formatDate = (date) => {
            const d = date.getDate().toString().padStart(2, '0');
            const m = (date.getMonth() + 1).toString().padStart(2, '0');
            const y = date.getFullYear();
            return `${y}-${m}-${d}`;
        };

        const formattedStartDate = formatDate(startDate);
        const formattedEndDate = formatDate(endDate);

        fetch(`${API_URL}/chartdata?startDate=${formattedStartDate}&endDate=${formattedEndDate}&groupBy=${period}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log("Fetched Chart Data: ", data);
                const formatted = data.map((item) => ({
                    name: item.period,
                    tickets: item.totalTickets,
                    resolved: item.resolvedTickets,
                    avgResolutionTime: parseFloat(item.avgResolutionTime),
                    firstResponseTime: parseFloat(item.avgFirstResponseTime),
                }));
                setChartData(formatted);
            })
            .catch((err) => {
                console.error('Error fetching chart data:', err);
            });
    }, [period, dateRange]);


    // let dataToShow;
    // if (period === 'daily') {
    //     dataToShow = filterByDateRange(dailyData, Number(dateRange));
    // } else if (period === 'weekly') {
    //     dataToShow = weeklyData;
    // } else if (period === 'monthly') {
    //     dataToShow = monthlyData;
    // }

    let dataToShow = chartData;

    // let dataToShow = filterByDateRange(chartData, Number(dateRange));

    // let dataToShow = period === 'daily' ? filterByDateRange(chartData, Number(dateRange)) : chartData;





    const CustomBar = ({ x, y, width, height, fill }) => (
        <>
            <rect x={x} y={y} width={width} height={height} fill={fill} />
            <line x1={x} y1={y} x2={x + width} y2={y} stroke="#4aabed" strokeWidth={2} />
            <line x1={x} y1={y} x2={x} y2={y + height} stroke="#4aabed" strokeWidth={2} />
            <line x1={x + width} y1={y} x2={x + width} y2={y + height} stroke="#4aabed" strokeWidth={2} />
        </>
    );

    const CustomLegend = (props) => {
        const { payload } = props;
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '10px 0' }}>
                {payload.map((entry, index) => (
                    <div
                        key={`item-${index}`}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginRight: 20,
                            cursor: 'pointer',
                        }}
                    >
                        <div
                            style={{
                                width: 30,
                                height: 8,
                                backgroundColor: entry.color,
                                border: `2px solid #4aabed`,
                                marginRight: 8,

                            }}
                        />
                        <span style={{ color: '#333', fontSize: 12 }}>{entry.value}</span>
                    </div>
                ))}
            </div>
        );
    };


    return (
        <div className='parent_container_dashboard'>
            <div className='parent_container_dashboard_heading'>
                <h2 className='parent_container_dashboard_heading_h2'>Ticket Analytics Dashboard</h2>
                <div className='parent_container_dashboard_top'>
                    <h6 className='parent_container_dashboard_heading_h6'>
                        Analyzing data from last {dateRange} days
                    </h6>
                    <div className='parent_container_dashboard_top_right_button'>
                        <select
                            className='sort_dropdown'
                            value={dateRange}
                            onChange={(e) => setDateRange(e.target.value)}
                        >
                            <option value="30">Last 30 Days</option>
                            <option value="15">Last 15 Days</option>
                            <option value="7">Last 7 Days</option>
                        </select>
                        <button
                            className='parent_container_dashboard_top_right_button_btn'
                            onClick={() => {
                                // API call useEffect me dateRange ke change se automatic ho jaega, isliye kuch karne ki zarurat nahi
                            }}
                        >
                            Update
                        </button>
                    </div>
                </div>
            </div>

            <div className='middle_container_parent'>
                <div className='cards'>
                    <img src={ticketicon} alt='total ticket' />
                    <h6 className='cards_heading'>Total Ticket</h6>
                    <h4 className='cards_heading_heading'>{totalTickets}</h4>
                    <p className='cards_content'>Created in this period</p>
                </div>
                <div className='cards'>
                    <img src={resolvedicon} alt='total ticket' />
                    <h6 className='cards_heading'>Resolved</h6>
                    <h4 className='cards_heading_heading'>{totalResolved}</h4>
                    <p className='cards_content' style={{ backgroundColor: '#198754', color: '#fff' }}>
                        {totalTickets ? ((totalResolved / totalTickets) * 100).toFixed(1) + '%' : '0%'} rate
                    </p>
                </div>
                <div className='cards'>
                    <img src={resolutiontimeicon} alt='total ticket' />
                    <h6 className='cards_heading'>Avg. Resolution time</h6>
                    <h4 className='cards_heading_heading'>{avgResolutionTime}h</h4>
                    <p className='cards_content'>From ticket creation</p>
                </div>
                <div className='cards'>
                    <img src={responsetimeicon} alt='total ticket' />
                    <h6 className='cards_heading'>First Response Time</h6>
                    <h4 className='cards_heading_heading'>{avgFirstResponseTime}h</h4>
                    <p className='cards_content'>Average time to respond</p>
                </div>
            </div>

            <div className='bottom_conatiner_parent'>
                <div className='bottom_conatiner_parent_card_header'>
                    <h5 className='bottom_conatiner_parent_heading'>Ticket Volume Over Time</h5>
                    <div className='report_filter_tabs'>
                        <button
                            className={`tab_btn ${period === 'daily' ? 'active' : ''}`}
                            onClick={() => setPeriod('daily')}
                        >
                            Daily
                        </button>

                        <button
                            className={`tab_btn ${period === 'weekly' ? 'active' : ''}`}
                            onClick={() => setPeriod('weekly')}
                        >
                            Weekly
                        </button>

                        <button
                            className={`tab_btn ${period === 'monthly' ? 'active' : ''}`}
                            onClick={() => setPeriod('monthly')}
                        >
                            Monthly
                        </button>

                    </div>
                </div>
                <hr />

                <div style={{ width: '100%', height: 450 }} className='bottom_conatiner_parent_barchart'>

                    <CustomLegend
                        payload={[
                            { value: 'New Tickets', color: '#d7ecfb' }
                        ]}
                    />


                    <ResponsiveContainer>

                        <BarChart
                            className='barchart_dashboard'
                            data={dataToShow}
                            margin={{ top: 10, right: 30, left: 30, bottom: 80 }}>
                            <CartesianGrid strokeDasharray="1 1" />
                            {/* <Legend content={<CustomLegend />} /> */}
                            {/* <XAxis dataKey="name"
                                angle={-45}
                                textAnchor="end"
                                interval={0} /> */}


                            <XAxis
                                dataKey="name"
                                angle={-45}
                                textAnchor="end"
                                interval={0}
                                tickFormatter={(value) => {
                                    if (period === 'daily') {
                                        return value;
                                    }

                                    if (period === 'monthly') {
                                        try {
                                            const date = new Date(`${value}-01`);
                                            return format(date, 'MMM yyyy');
                                        } catch (e) {
                                            console.error('Invalid date in monthly:', value);
                                            return value;
                                        }
                                    }

                                    if (period === 'weekly') {

                                        const [yearStr, weekStrNum] = value.split('-');
                                        const year = parseInt(yearStr);
                                        const week = parseInt(weekStrNum);


                                        const jan4 = new Date(year, 0, 4);
                                        const week1Start = startOfWeek(jan4, { weekStartsOn: 1 });
                                        const weekStart = new Date(week1Start);
                                        weekStart.setDate(week1Start.getDate() + (week - 1) * 7);
                                        const weekEnd = endOfWeek(weekStart, { weekStartsOn: 1 });

                                        return `${format(weekStart, 'dd MMM')} - ${format(weekEnd, 'dd MMM')}`;
                                    }

                                    return value;
                                }}
                                tick={{ fontSize: 12 }}
                            />

                            <YAxis
                                tickCount={9}
                                domain={[0, 'auto']} />
                            <Tooltip cursor={{ fill: 'transparent' }} />
                            {/* <Tooltip cursor={{ fill: '#ccc', opacity: 0.2, width: 2 }} /> */}


                            <Bar dataKey="tickets" fill="#d7ecfb" barSize={200} shape={<CustomBar />} />

                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

        </div>
    );
};

export default DashboardCompo;
