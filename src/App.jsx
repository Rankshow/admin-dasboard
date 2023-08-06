import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./component/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Retail from "./component/Retail";
import Account from "./component/Account";
import Database from "./component/Database";
import Help from "./component/Help";
import Profile from "./component/Profile";



function App() {
 const [toggle, setToggle] = useState(false);

//  toggle function with conditional rendering 
  const Toggle = () => {
    setToggle(!toggle);
  }

  return (
        <BrowserRouter>
          <div className='d-flex'>
            {/* condition display and hide the sidebar once it is clicked */}
            <div className={toggle ? "bar d-none" : "w-auto"} >
              <Sidebar />
            </div>
             <div className="col overflow-auto">
                 <Navbar Toggle={Toggle}/>
                  <Routes>
                    <Route path="/" element={<><Home /></>} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/retail" element={<Retail />} />
                    <Route path="/database" element={<Database />} />
                    <Route path="/help" element={<Help />} />
                    <Route path="/profile" element={<Profile />} />
                  </Routes>
            </div>
          </div>
        </BrowserRouter>
  )
}

export default App
