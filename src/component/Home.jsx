import React from 'react';
import "./Home.css"

function Home() {
  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="main d-flex m-3 p-4 rounded justify-content-around align-items-center bg-primary col-12 col-sm-6 col-lg-3 border shadow-sm">
            <div className='d-flex'>
              <div>
                <i className='bi bi-coin fs-1 me-4 text-white'></i>
              </div>
                <div>
                  <h2 className='fs-2'>Finance</h2>
                  <p className='text-white'>Tip</p>
                </div>
            </div>
          </div>
        <div className="main d-flex m-3 p-4 rounded justify-content-around align-items-center bg-danger col-12 col-sm-6 col-lg-3 bg-secondary shadow-sm">
          <i className='bi bi-bank2 fs-1 text-white'></i>
            <div>
              <h2 className='fs-2'>Debit</h2>
              <p className='fw-bold text-white'>Track</p>
              <p></p>
            </div>
          </div>
        <div className="main d-flex m-3 p-4 rounded justify-content-around align-items-center col-12 bg-secondary col-sm-6 col-lg-3 border-secondary shadow-sm">
          <i className='bi bi-card-heading fs-1 justify-content-center text-white'></i>
            <div>
              <h2 className='fs-2'>Revenue</h2>
              <p className='fw-bold text-white'>Income</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Home