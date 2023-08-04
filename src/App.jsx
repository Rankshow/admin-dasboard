import React from "react";
import Sidebar from "./component/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./component/Navbar";

function App() {


  return (
    <div className='d-flex'>
      <div className="w-auto">
        <Sidebar />
      </div>
      <div className="col">
        <Navbar />
      </div>
    </div>
  )
}

export default App
