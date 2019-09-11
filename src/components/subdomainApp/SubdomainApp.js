import React, { Component } from 'react'
import Graph from '../graph/Graph'
import { connect } from "react-redux";



export class SubdomainApp extends Component {

  render() {
    return (
      <div>
        <h1 className="is-size-1">Welcome to my subdomain</h1>
            { this.props.isAuthenticated ?  <Graph /> : <h1 className="is-size-3" >Login to View your Workspace!</h1>}
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps)(SubdomainApp)
