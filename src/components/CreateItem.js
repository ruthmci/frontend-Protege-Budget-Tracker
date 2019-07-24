// Component for creating an item

import React, { Component } from 'react';
import axios from 'axios';
import './form.css'

export default class CreateItem extends Component {

  // protege id is picked up from url
  state = {
    protegeId: this.props.match.params.id,
    description: '',
    date: new Date(),
    errorMessages: []
  }

  handleCancel = (e) => {
    window.location = `/proteges/${this.props.match.params.id}`;
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault();
    // collects data from state, sends post request and redirects back to the page where the protege where the item was added
    const newItem = {
      protegeId: this.state.protegeId,
      description: this.state.description,
      expenditure: this.state.expenditure,
      date: this.state.date
    }

    console.log(newItem);

    axios.post(`${process.env.REACT_APP_BACKEND_URL}/items/add`, newItem)
      .then(res => {
        console.log(res.data)
        window.location = `/proteges/${this.props.match.params.id}`
      })
      .catch((err) => {
        this.setState({ errorMessages: err.response.data.messages })
      })
  }

  // displays the error messages
  displayErrors = (errors) => {
    return errors.map((error, index) => {
      return (
        <div key={index}>
          <p>{error}</p>
        </div>
      )
    })
  }

  // Form for collecting item data
  render() {
    let errorMessages = this.state.errorMessages
    console.log(errorMessages)
    return (
      <div className="form-box">
        <div className="form-container-item">
          <div className="form-header-box">
            <h3 className="form-header"><b>Register a purchase</b></h3>
          </div>
          <form className="form" onSubmit={this.onSubmit}>
            <div className="form-group">
              <label className="label">Description </label>
              <input type="text"
                id="description"
                className="form-control"
                value={this.state.description}
                onChange={this.onChange}
                placeholder="description of purchase"
              />
            </div>
            <div className="form-group">
              <label className="label">Expenditure </label>
              <div class="input-icon">
                <input
                  type="number"
                  id="expenditure"
                  className="form-control"
                  value={this.state.expenditure}
                  onChange={this.onChange}
                  placeholder="price"
                />
                <i>$</i>
              </div>
            </div>
            <div className="buttons">
              <button className="purple-button-form" onClick={this.handleClick}>Save</button>
              <button className="pink-button-form" onClick={this.handleCancel}>Cancel</button>
            </div>
          </form>
          <div><p className="error-message">{this.displayErrors(errorMessages)}</p></div>
        </div>
      </div>
    )
  }
}