import React from 'react';
import { Radar } from 'react-chartjs-2';
import "./Finance.css"

// Radar chart
const data = {
  labels: [
    'Debit',
    'Transaction',
    'Revenue',
    'Income',
    'Microrevenue',
    'payment',
    'Account opening'
  ],
  datasets: [{
    label: 'New Account',
    data: [65, 59, 90, 81, 56, 55, 40],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#800080',
    pointHoverBackgroundColor: '#800080',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }, {
    label: 'Fiscal Account',
    data: [28, 48, 40, 19, 96, 27, 100],
    fill: true,
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgb(54, 162, 235)',
    pointBackgroundColor: 'rgb(54, 162, 235)',
    pointBorderColor: '#000',
    pointHoverBackgroundColor: '#000',
    pointHoverBorderColor: 'rgb(54, 162, 235)'
  }]
};

const config = {
  type: 'radar',
  data: data,
  options: {
    elements: {
      line: {
        borderWidth: 3
      }
    }
  },
};


function Finance() {
  return (
    <>
      <div className='container-fluid d-flex justify-content-center py-3 text-center vh-50 p-1 mt-3'>
        <Radar data={data}></Radar>
      </div>
    </>
  )
}

export default Finance;