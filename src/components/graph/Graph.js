import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2';

export class Graph extends Component {
  state = {
    data: {
      labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
      datasets: [
        {
          label: 'Population',
          data: [
            617594,
            181045,
            153060,
            106519,
            105162,
            95072
          ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 99, 132, 0.6)'
          ]
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <h1 className="is-size-1">Graph</h1>
        <Bar
          data={this.state.data}
          width={100}
          height={50}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    )
  }
}

export default Graph
