import React, { useState } from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import Polaris from "./image/POLARIS 2.png"
import "./sidebar.css";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [active, setActive] = useState(1);

  return (
    <div className='d-flex justify-content-between flex-column bg-dark text-white p-2 vh-100'>
      <div>
       <span  className='p-3 text-decoration-none text-white'>
        {/* =========== Logo ==================== */}
        <img className='border border-white rounded-circle me-4 fw-[20px]' src={Polaris} alt="polaris.img" />
          {/* +++++++++++++ header ++++++++++++++++++++++ */}
         <span className='fs-3'>Bank with us</span>
       </span>

       <hr className='text-secondary'/>
       
       {/* +++++++++++ Dashboard +++++++++++++++ */}
        <ul className='nav nav-pill flex-column fs-5'>
          <Link to="/" className='text-decoration-none'><li className={active === 1 ? 'active nav-item mt-2 p-1' : 'nav-item mt-2 p-1'} onClick={(e) => setActive(1)}><span  className='text-decoration-none text-white'><i className='bi bi-grid me-3 text-warning'>
          </i><span>Dashboard</span> </span></li></Link>

       {/* +++++++++++ Atm Account +++++++++++++++ */}
          <Link to="/account" className='text-decoration-none'> <li className={active === 2 ? 'active nav-item mt-2 p-1': 'nav-item mt-2 p-1'} onClick={(e) => setActive(2)}><span  className='text-decoration-none text-white'><i className='bi bi-credit-card me-3 text-warning'>
          </i><span>Accounts</span> </span></li></Link>

       {/* +++++++++++ Retails +++++++++++++++ */}
          <Link to="/finance" className='text-decoration-none'><li className={active === 3 ? 'active nav-item mt-2 p-1': 'nav-item mt-2 p-1'} onClick={(e) => setActive(3)}><span  className='text-decoration-none text-white'><i className='bi bi-currency-dollar me-3 text-warning'>
          </i><span>Finance</span></span></li></Link> 

       {/* +++++++++++ Database +++++++++++++++ */}
          <Link to="/revenue" className='text-decoration-none'><li className={active === 4 ? 'active nav-item mt-2 p-1': 'nav-item mt-2 p-1'} onClick={(e) => setActive(4)}><span className='te4t-decoration-none text-white'><i className='bi bi-database-gear me-3 text-warning'>
          </i><span>Revenue</span> </span></li></Link>
{/* 
           <Link to="/help" className='text-decoration-none'><li className={active === 5 ? 'active nav-item mt-2 p-1': 'nav-item mt-2 p-1'} onClick={(e) => setActive(5)}><span  className='text-decoration-none text-white'><i className='bi bi-gear me-3 text-warning'>
          </i><span>Help</span></span></li></Link> */}
        </ul>
     </div>
           <div>
             <hr />
             <Link to="/profile" className='text-decoration-none'><div className={active === 6 ? 'li nav-item mt-2 fs-5 p-1' : 'li nav-item mt-2 fs-5 p-1'} onClick={(e) => setActive(6)}><span  className='text-decoration-none text-white'><i className='bi bi-person-circle me-3 text-warning'>
              </i><span>Profile Feedback</span></span></div></Link> 
          </div>
  </div>
  )
}

export default Sidebar