import React from 'react';
import { Chart } from 'chart.js/auto';
import { Pie } from 'react-chartjs-2';
import "./PieChart.css"

const labels = ["Januaru", "February", "March", "April", "May", "June", "July"];

const data = {
  labels: labels,
  datasets: [
    {
      labels: "Transaction Analysis",
      backgroundColor: "rgba(87, 9, 87, 0.644)",
      data: [0, 10, 5, 2, 20, 30, 45, 60]
    },
  ],
};

const Piechart = () => {
  return (
    <div className='pie border p-1 mt-3'>
      <Pie data={data}></Pie>
    </div>
  )
}

export default Piechart;