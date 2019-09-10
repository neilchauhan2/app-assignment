import React from 'react'
import Login from "../auth/Login";
import SignUp from "../auth/SignUp";

function SubDomainNavs() {
  return (
    <div>
      <div className="navbar-item">
        <SignUp />
        <Login />
      </div>
    </div>
  )
}

export default SubDomainNavs
