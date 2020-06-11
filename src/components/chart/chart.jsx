import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import styles from './chart.module.css'

const Chart = ({ data }) => {

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
    <div className={styles.doughmutContainer} >
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
    </div>
  )
}

export default Chart
