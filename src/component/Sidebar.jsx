import React, { useState } from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import Polaris from "./image/POLARIS 2.png"
import "./sidebar.css"

const Sidebar = () => {
  const [active, setActive] = useState(1);

  return (
    <div className='d-flex justify-content-between flex-column bg-dark text-white p-3 vh-100'>
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
           <li className={active === 1 ? 'active nav-item mt-2 p-1' : 'nav-item mt-2 p-1'} onClick={(e) => setActive(1)}><span  className='text-decoration-none text-white'><i className='bi bi-bar-chart me-3 text-warning'>
          </i><span>Dashboard</span> </span></li>

       {/* +++++++++++ Atm Account +++++++++++++++ */}
           <li className={active === 2 ? 'active nav-item mt-2 p-1': 'nav-item mt-2 p-1'} onClick={(e) => setActive(2)}><span  className='text-decoration-none text-white'><i className='bi bi-credit-card me-3 text-warning'>
          </i><span>Atm Accounts</span> </span></li>

       {/* +++++++++++ Retails +++++++++++++++ */}
           <li className={active === 3 ? 'active nav-item mt-2 p-1': 'nav-item mt-2 p-1'} onClick={(e) => setActive(3)}><span  className='text-decoration-none text-white'><i className='bi bi-bag me-3 text-warning'>
          </i><span>Retail</span></span></li>

       {/* +++++++++++ Database +++++++++++++++ */}
           <li className={active === 4 ? 'active nav-item mt-2 p-1': 'nav-item mt-2 p-1'} onClick={(e) => setActive(4)}><span className='te4t-decoration-none text-white'><i className='bi bi-database-gear me-3 text-warning'>
          </i><span>Database</span> </span></li>

           <li className={active === 5 ? 'active nav-item mt-2 p-1': 'nav-item mt-2 p-1'} onClick={(e) => setActive(5)}><span  className='text-decoration-none text-white'><i className='bi bi-gear me-3 text-warning'>
          </i><span>Setting</span></span></li>
        </ul>
     </div>
           <div>
             <hr />
              <div className={active === 6 ? 'li nav-item mt-2 fs-5 p-1' : 'li nav-item mt-2 fs-5 p-1'} onClick={(e) => setActive(6)}><span  className='text-decoration-none text-white'><i className='bi bi-person-circle me-3 text-warning'>
              </i><span>Profile</span></span></div>
          </div>
  </div>
  )
}

export default Sidebar