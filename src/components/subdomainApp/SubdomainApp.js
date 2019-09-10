import React, { Component } from 'react'
import Graph from '../graph/Graph'


export class SubdomainApp extends Component {
  render() {
    return (
      <div>
        <h1 className="is-size-1">Welcome to my subdomain</h1>
        <Graph />
      </div>
    )
  }
}

export default SubdomainApp
