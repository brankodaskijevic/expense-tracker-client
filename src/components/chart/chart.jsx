import React, { Fragment } from 'react'
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
import styles from './chart.module.css'

const Chart = ({ data }) => {

  console.log(data)

  const chartData = {
    labels: [
      'Other',
      'Home',
      'Investments',
      'Groceries',
      'Entertainment',
      'Health',
      'Fees'
    ],
    datasets: [
      {
        label: 'Expenses and Incomes by Category',
        data: data,
        backgroundColor: [
          'rgba(0, 123, 255, 0.8)',
          'rgba(108, 117, 125, 0.8)',
          'rgba(40, 167, 69, 0.8)',
          'rgba(220, 53, 69, 0.8)',
          'rgba(255, 193, 7, 0.8)',
          'rgb(23, 162, 184, 0.8)',
          'rgba(52, 58, 64, 0.8)'
        ]
      }
    ]
  }

  return (
    <Fragment>
      <p className={styles.mainTitle}>Doughnut Chart based on Category Expenses/Incomes</p>
      <Doughnut 
        data={chartData}
        options={
          {
            display: true,
            title: 'Expenses/Incomes Doughnut'
          }
        }
      />
    </Fragment>
  )
}

export default Chart
