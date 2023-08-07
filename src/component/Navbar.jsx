import React from 'react';
import "bootstrap/dist/js/bootstrap.bundle.js"
import "./Navbar.css";


function Navbar({Toggle}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
     <div className="container-fluid">
      <a className="navbar-brand d-none d-md-block" href="#">Dashboard</a>
       <a className="navbar-brand d-block d-md-none" onClick={Toggle}><i className='hide bi bi-justify'></i></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav fw-bold ms-auto">
          <li className="nav-item border rounded me-2 my-3">
          <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1" />
          </li>
          {/* Account */}
          <li className="nav-item rounded me-2 ps-2">
            <a className="nav-link text-white" aria-current="page" href="#">Account</a>
          </li>
          {/* Logout */}
          <li className="nav-item ps-2 mb-0 rounded me-2">
            <a className="nav-link text-white" aria-current="page" href="#">Logout</a>
          </li>
        </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar;