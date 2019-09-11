import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../../store/actions/authActions";
import { Link } from "react-router-dom";

class SignUp extends Component {
  state = {
    first_name: "",
    username: "",
    email: "",
    password: "",
    show: false,
    msg: ""
  };

  componentDidUpdate(prevProps) {
      if (this.state.show) {
      if (this.props.isAuthenticated) {
        this.toggle();
      }
    }
  }


  onToggle = e => {
    e.preventDefault();
    this.setState({
      show: !this.state.show
    });
  };

  onSubmit = e => {
    // this.props.clearErrors();
    e.preventDefault();
    const { first_name, username, email, password } = this.state;
    const user = {
      first_name,
      username,
      email,
      password
    };
    this.props.register(user);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="sign-up">
        <div className="Signup-modal">
          <Link to="#" className="navbar-item" onClick={this.onToggle}>
            Sign up
          </Link>
          <div className={"modal ".concat(this.state.show ? "is-active" : " ")}>
            <div className="modal-background" />
            <div className="modal-card">
              <div className="modal-card-head">
                <div className="modal-card-title">Sign up</div>
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
                  <label className="label">First Name</label>
                  <div className="control">
                    <input
                      name="first_name"
                      className="input"
                      type="text"
                      placeholder="First Name"
                      onChange={this.onChange}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Username</label>
                  <div className="control">
                    <input
                      name="username"
                      className="input"
                      type="text"
                      placeholder="Username"
                      onChange={this.onChange}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      name="email"
                      className="input"
                      type="email"
                      placeholder="Email"
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
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(
  mapStateToProps,
  { register }
)(SignUp);