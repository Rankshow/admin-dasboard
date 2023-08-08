import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import "./Dougnut.css"

// doughnut
const data = {
  labels: [
    'Income',
    'Lost',
    'withdrawal'
  ],
  datasets: [{
    label: 'Revenue',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};
const config = {
  type: 'bar',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
};
function Revenue() {
  return (
    <>
      <div className='d-flex justify-content-center align-items-center'>
          <Doughnut className='dougnut' data={data}></Doughnut>
        </div>
    </>
  )
}

export default Revenue;