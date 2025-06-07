import React, { useState, useEffect } from 'react';
import './Header.css';
import { NavLink, useLocation } from 'react-router-dom';

import rightsideLogo from './Assets/rightsidelogo.svg';
import dashboardicon from './Assets/dashbaordheadericon.png';
import reporticon from './Assets/reportheadericon.png';
import ticketicon from './Assets/ticketheadericon.png';
import supporticon from './Assets/supporticon.png'
import locationicon from './Assets/locationIcon.png';
import mailicon from './Assets/emailIcon.png';
import whatsappicon from './Assets/whatsappicon.png'
import callicon from './Assets/callIcon.png';

const HeaderCompo = () => {

  const [supportModel, setSupportModel] = useState(false)

  const location = useLocation();

  useEffect(() => {
    setSupportModel(false);
  }, [location]);


  // const handleSupportClick = () => {
  //   setSupportModel(true);
  // };

  const handleSupportClick = () => {
    setSupportModel(prev => !prev);
  };



  return (
    <div>
      <header>
        <div className='Parent_container'>
          <div className='Container_left'>
            <a href="https://www.rightside.co.in" target='blank' className="header_logo">
              <img src={rightsideLogo} alt='rightside_logo' className='header_rightside_logo' />
            </a>
            {/* <span>Helpdesk Analytics</span> */}
          </div>
          <div></div>
          <div className='Container_right'>
            <NavLink to="/" className='right_div'>
              <img src={dashboardicon} alt='dashboard' className='header_icon' />
              <span>Dashboard</span>
            </NavLink>
            <NavLink to="/reports" className='right_div'>
              <img src={reporticon} alt='reports' className='header_icon' />
              <span>Reports</span>
            </NavLink>
            <NavLink to="/tickets" className='right_div'>
              <img src={ticketicon} alt='tickets' className='header_icon' />
              <span>Ticket System</span>
            </NavLink>
            {/* <NavLink to="#" className='right_div'> */}
            <div className='right_div_button'>
              <img src={supporticon} alt='support' className='header_icon' />
              {/* <span> */}
              <button className="support_button"
                onClick={handleSupportClick}
              >
                Support
              </button>
              {/* </span> */}
            </div>
            {/* </NavLink> */}

          </div>
        </div>
      </header>
      {supportModel && (
        <div className='support_overlay'
          onClick={() => setSupportModel(false)}>
          <div className='support_page' onClick={(e) => e.stopPropagation()}>
            <div className='Support_Container' >
              <button
                className="close_btn"
                onClick={() => setSupportModel(false)}
              >
                ✖
              </button>
              <div className='contact_details_container'>
                <h1 className='contactdetails_heading'>Contact Details</h1>
                <div className='location_details'>
                  <img src={locationicon} alt='address' className='location_icon' />
                  <span className='contact_details'>10th Floor, Aston tower, Sundervan Complex, <br />
                    Shashtri Nagar, Andheri West, Mumbai, 4000053, <br />
                    Maharashtra, India.</span><br />
                </div>
                <div>
                  <img src={mailicon} alt='e-mail' className='mail_icon' />
                  <span className="contact_email">
                    <NavLink to="mailto:helpdesk@rightside.co.in" className="contact_email">helpdesk@rightside.co.in</NavLink>
                  </span><br />
                </div>
                <div className='phone_container'>
                  <img src={whatsappicon} alt='call' className='call_icon' />
                  <span className='contact_phone'>
                    <NavLink to="tel:9987324949" className="contact_phone">+91 99873 24949</NavLink>
                  </span>
                </div>
                <div className='phone_container'>
                  <img src={callicon} alt='landline' className='call_icon' />
                  <span className='contact_phone'>
                    <NavLink to="tel:2268996899" className="contact_phone"> +91 22 6899 6899</NavLink>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>

  );
}

export default HeaderCompo;
