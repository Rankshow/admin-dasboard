import React from 'react';
import { Chart } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import "./Piechart.css"

const labels = ["Januaru", "February", "March", "April", "May", "June", "July"];

const data = {
  labels: labels,
  datasets: [
    {
      labels: "Transaction Analysis",
      backgroundColor: "rgba(87, 9, 87, 0.644)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45, 60]
    },
  ],
};


const LineChart = () => {
  return (
    <div className='pie border shadow p-1 mt-3'>
    <Line data={data}></Line>
  </div>
  )
}

export default LineChart;