import React from 'react';
import './Reports.css';
import addreporticon from './Assets/addnewreportbtn.png';
import dashboardicon from './Assets/dashbaordheadericon.png';
import agentperformance from './Assets/agentperformancereport.png';
import slaplan from './Assets/slaplan.png';
import customersatisfaction from './Assets/customersatisfaction.png';
import resolutiontime from './Assets/resolutiontime.png'
import tagicon from './Assets/tagIcon.png'

const ReportsCompo = () => {
    return (
        <div className='parent_container_report'>
            <div className='parent_container_report_top'>
                <div className='parent_container_report_heading_main'>
                    <h2 className='parent_container_report_heading'>Ticket Reports</h2>
                    <p className='parent_container_report_heading_h6'>Generate and download detailed ticket reports</p>
                </div>
                <div className='parent_container_report_top_btn_generate_report'>
                    <img src={addreporticon} alt='generate new report' className='generateNew_report_icon' />
                    <button className='parent_container_report_top_btn'>Generate New Report</button>
                </div>
            </div>
            <div className='parent_middel_container'>
                <div className='card'>
                    <div className='parent_middel_container_top'>
                        <div className='parent_middel_container_top_image' style={{ backgroundColor: '#0d6efd' }}><img src={dashboardicon} alt='Ticket Volume' /></div>
                        <h6 className='parent_middel_container_top_heading'>Ticket Volume</h6>
                    </div>
                    <p className='card_content_p'>Track ticket creation and resolution trends over time.</p>
                    <button className='card_button'>Generate Report</button>
                </div>
                <div className='card'>
                    <div className='parent_middel_container_top'>
                        <div className='parent_middel_container_top_image' style={{ backgroundColor: '#198754' }}><img src={agentperformance} alt='Ticket Volume' /></div>
                        <h6 className='parent_middel_container_top_heading'>Agent Performance</h6>
                    </div>
                    <p className='card_content_p'>Analyze agent productivity, response times, and closure rates.</p>
                    <button className='card_button'>Generate Report</button>
                </div>
                <div className='card'>
                    <div className='parent_middel_container_top'>
                        <div className='parent_middel_container_top_image' style={{ backgroundColor: '#ffc107' }}><img src={resolutiontime} alt='Ticket Volume' /></div>
                        <h6 className='parent_middel_container_top_heading'>Resolution Time</h6>
                    </div>
                    <p className='card_content_p'>Measure how long it takes to resolve different types of tickets.</p>
                    <button className='card_button'>Generate Report</button>
                </div>
                <div className='card'>
                    <div className='parent_middel_container_top'>
                        <div className='parent_middel_container_top_image' style={{ backgroundColor: '#0dcaf3' }}><img src={slaplan} alt='Ticket Volume' /></div>
                        <h6 className='parent_middel_container_top_heading'>SLA Compliance</h6>
                    </div>
                    <p className='card_content_p'>Monitor compliance with service level agreements by team and priority.</p>
                    <button className='card_button'>Generate Report</button>
                </div>
                <div className='card'>
                    <div className='parent_middel_container_top'>
                        <div className='parent_middel_container_top_image' style={{ backgroundColor: '#dc3545' }}><img src={customersatisfaction} alt='Ticket Volume' className='customer_satisfaction_png' /></div>
                        <h6 className='parent_middel_container_top_heading'>Customer Satisfaction</h6>
                    </div>
                    <p className='card_content_p'>Review customer feedback and satisfaction rating.</p>
                    <button className='card_button'>Generate Report</button>
                </div>
                <div className='card'>
                    <div className='parent_middel_container_top'>
                        <div className='parent_middel_container_top_image' style={{ backgroundColor: '#6c757d' }}><img src={tagicon} alt='Ticket Volume' /></div>
                        <h6 className='parent_middel_container_top_heading'>Help Topic Distribution</h6>
                    </div>
                    <p className='card_content_p'>Analyze distribution of ticket across different help topics.</p>
                    <button className='card_button'>Generate Report</button>
                </div>
            </div>
            <div className='parent_bottom_container'>
                <h5 className='parent_middel_container_heading'>Saved Reports</h5>
                <hr />
                <div className='parent_middel_container_table_parent'>
                    <table className='parent_bottom_container_table'>
                        <thead>
                            <tr>
                                <th className='agent_name parent_bottom_container_table_th'>Report Name</th>
                                <th className='parent_bottom_container_table_th'>Type</th>
                                <th className='parent_bottom_container_table_th'>Created</th>
                                <th className='parent_bottom_container_table_th'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr >
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ReportsCompo;
