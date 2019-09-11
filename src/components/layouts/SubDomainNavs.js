import React, { Component } from 'react'
import Login from "../auth/Login";
import SignUp from "../auth/SignUp";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../store/actions/authActions";

class SubDomainNavs extends Component {

  handleLogout = () => {
    this.props.logout();
  }

  render() {
    return (
      <div>
        {
          this.props.isAuthenticated ?
          <div className="navbar-item" >
          <Link to="#" onClick={this.handleLogout}> Logout </Link>
          </div>
          :
        <div className="navbar-item">
        <SignUp />
        <Login />
        </div>
        }

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps, { logout })(SubDomainNavs)
