
import React, { Component } from "react";

import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    username: "",
    password: "",
    show: false
  };

  // componentDidUpdate(prevProps) {
  //   const { error } = this.props;
  //   if (error !== prevProps.error) {
  //     if (error.id === "LOGIN FAIL") {
  //       this.setState({
  //         msg: "Please enter the correct username and password!"
  //       });
  //     } else {
  //       this.setState({
  //         msg: null
  //       });
  //     }
  //   }
  // }

  onToggle = e => {
    e.preventDefault();
    this.setState({
      show: !this.state.show
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    const user = {
      username,
      password
    };
    // this.props.login(user);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="Login-modal">
        <Link to="#" className="navbar-item" onClick={this.onToggle}>
          Login
        </Link>
        <div className={"modal ".concat(this.state.show ? "is-active" : " ")}>
          <div className="modal-background" />
          <div className="modal-card">
            <div className="modal-card-head">
              <div className="modal-card-title">Login</div>
              <button
                className="delete"
                aria-label="close"
                onClick={this.onToggle}
              />
            </div>
            <div className="modal-card-body">
              <div className="error">
                {this.state.msg ? (
                  <div className="notification is-danger">
                    {" "}
                    {this.state.msg}{" "}
                  </div>
                ) : null}
              </div>
              <div className="field">
                <label className="label">Username</label>
                <div className="control">
                  <input
                    name="username"
                    className="input"
                    type="username"
                    placeholder="Username"
                    onChange={this.onChange}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    name="password"
                    className="input"
                    type="password"
                    placeholder="Password"
                    onChange={this.onChange}
                  />
                </div>
              </div>
            </div>

            <button className="is-success button" onClick={this.onSubmit}>
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}


export default Login;