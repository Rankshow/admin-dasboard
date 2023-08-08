import React from 'react';
import "./Home.css"
import Piechart from './Piechart';
import LineChart from './LineChart';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className='container-fluid h-auto'>
      <div className="row d-flex justify-content-center">
        <div className="main d-flex m-3 p-4 rounded justify-content-around align-items-center bg-primary col-10 col-sm-6 col-lg-3 border shadow-sm">
           <Link to="/finance" className='text-decoration-none text-warning'><div className='d-flex'>
              <div>
                <i className='bi bi-coin fs-1 me-4 text-white'></i>
              </div>
                <div>
                  <h2 className='fs-2'>Finance</h2>
                  <p className='text-white fw-bold fs-4'>78.45%</p>
                </div>
            </div></Link> 
          </div>
        <div className="main d-flex m-3 p-4 rounded justify-content-around align-items-center bg-danger col-10 col-sm-6 col-lg-3 bg-secondary shadow-sm">
          <i className='bi bi-bank2 fs-1 text-white'></i>
            <div>
              <h2 className='fs-2'>Debit</h2>
              <p className='fw-bold text-white fs-4'>12.33%</p>
              <p></p>
            </div>
          </div>
        <div className="main d-flex m-3 p-4 rounded justify-content-around align-items-center col-10  bg-secondary col-sm-6 col-lg-3 border-secondary shadow-sm">
          <i className='bi bi-card-heading fs-1 justify-content-center text-white'></i>
            <div>
              <h2 className='fs-2'>Revenue</h2>
              <p className='fw-bold fs-4 text-white'>89.30%</p>
            </div>
          </div>
      </div>
      <div className="row">
        <div className="flex-sm-column col-12 col-md-8 p-3">
           <LineChart />
        </div>
        <div className="flex-sm-column col-12 col-md-4 p-3">
           <Piechart />
        </div>
      </div>
    </div>
  )
}

export default Home