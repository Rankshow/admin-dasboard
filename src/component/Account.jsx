import React from 'react';

import "./Account.css";


function Account() {
  return (
    <>
      <div className='container mt-5'>
        <div>
         <caption className='fs-4 fw-bold'>Accounts</caption>
          <table class="table table-bordered table-striped table-success">
              <thead>
                <tr>
                  <th className='table-head text-white' scope="col">S/N</th>
                  <th className='table-head text-white' scope="col">FirstName</th>
                  <th className='table-head text-white' scope="col">LastName</th>
                  <th className='table-head text-white' scope="col">Email</th>
                  <th className='table-head text-white' scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>markotto@yahoo.com</td>
                  <td className='text-center'><i className='bi bi-three-dots'></i></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>jacobthornton@gmail.com</td>
                  <td className='text-center'><i className='bi bi-three-dots'></i></td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry the Bird</td>
                  <td>Larry the Bird</td>
                  <td>@twitter</td>
                  <td className='text-center'><i className='bi bi-three-dots'></i></td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>Jack</td>
                  <td>Doe</td>
                  <td>jackdoe@gmail.com</td>
                  <td className='text-center'><i className='bi bi-three-dots'></i></td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Philip</td>
                  <td>Jude</td>
                  <td>philipjude@gmail.com</td>
                  <td className='text-center'><i className='bi bi-three-dots'></i></td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>Larry the Bird</td>
                  <td>Larry the Bird</td>
                  <td>@twitter</td>
                  <td className='text-center'><i className='bi bi-three-dots'></i></td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry the Bird</td>
                  <td>Larry the Bird</td>
                  <td>@twitter</td>
                  <td className='text-center'><i className='bi bi-three-dots'></i></td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Bone</td>
                  <td>Luke</td>
                  <td>boneluck@gmail.com</td>
                  <td className='text-center'><i className='bi bi-three-dots'></i></td>
                </tr>
              </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Account