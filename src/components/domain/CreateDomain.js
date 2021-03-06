import React, { Component } from 'react'
import { connect } from "react-redux";
import { checkAvailability, registerDomain } from "../../store/actions/domainActions";

class CreateDomain extends Component {
  state = {
    domain: ""
  }

  componentDidUpdate(prevProps) {
    const { status } = this.props;
    if (status !== prevProps.status) {
      this.setState({
        status: status
      });
    }
  }

  checkAvailable = (domain) => {
    this.props.checkAvailability(domain)
  }

  onChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
    setTimeout(this.checkAvailable(e.target.value), 2000);
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.registerDomain(this.state.domain);
  }

  render() {
    return (
      <div className="domain-section container box">
        <h2 className="is-size-2">Domain</h2>
        {this.props.status && this.props.id && this.props.name ? <div className="notification is-success">
          Your domain {this.state.domain} created successfully!
        </div> : null}
        <div className="field">
          <label className="label">Domain Name:</label>
          <div className="control">
            <input
              className="input"
              id="domain"
              type="text"
              placeholder="eg: mydomain "
              onChange={this.onChange}
            />
          </div>
          {this.state.domain && this.props.available ? <p className="help is-success is-size-6">Domain Available</p> : null}
          {this.state.domain && !this.props.available ? <p className="help is-danger is-size-6">Domain Unavailable</p> : null}
        </div>
        <button onClick={this.onSubmit} className=" button is-link is-fullwidth">Create Domain</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    domain: state.domain.domain,
    available: state.domain.available,
    status: state.domain.status,
    name: state.domain.name,
    id: state.domain.id
  };
};

export default connect(
  mapStateToProps,
  { checkAvailability, registerDomain }
)(CreateDomain);
