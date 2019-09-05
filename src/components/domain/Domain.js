import React, { Component } from 'react'

class Domain extends Component {
    state = {
        domain : ""
    }

    onChange = e => {
        this.setState({
          [e.target.id]: e.target.value
        });
      };

      onSubmit = e => {
          e.preventDefault();
      }

    render() {
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

export default Domain
