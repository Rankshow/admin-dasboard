import React from 'react';
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
          <li className="nav-item border rounded mx-auto me-2">
            <a className="nav-link text-white" aria-current="page" href="#">
              <i className='bi bi-search mx-3'>Search</i>
            </a>
          </li>
          <li className="nav-item border rounded mx-auto me-2">
            <a className="nav-link text-white" aria-current="page" href="#">Account</a>
          </li>
          <li className="nav-item border rounded mx-auto">
            <a className="nav-link text-white" aria-current="page" href="#">Logout</a>
          </li>
        </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar;