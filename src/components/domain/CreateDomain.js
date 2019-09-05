import React, { Component } from 'react'
import { connect } from "react-redux";
import { checkAvailability } from "../../store/actions/domainActions";

class CreateDomain extends Component {
  state = {
    domain: ""
  }

  onChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });

  };

  onSubmit = e => {
    e.preventDefault();
    this.props.checkAvailability(this.state.domain);
  }

  render() {
    console.log(window.location);
    console.log(this.props.domain);
    return (
      <div className="domain-section container box">
        <h2 className="is-size-2">Domain</h2>
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
          <p className="help is-success is-size-6">Domain available</p>
        </div>
        <button onClick={this.onSubmit} className=" button is-link is-fullwidth">Create Domain</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    domain: state.domain.domain,
    available: state.domain.available
  };
};

export default connect(
  mapStateToProps,
  { checkAvailability }
)(CreateDomain);
