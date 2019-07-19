// Component for creating an item

import React, { Component } from 'react';
import axios from 'axios';

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
      this.setState({ [e.target.id]: e.target.value})
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
      this.setState({errorMessages: err.response.data.messages})
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
    <div>
      <h3>Create New Item </h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              id="description"
              className="form-control"
              value={this.state.description}
              onChange={this.onChange}
              />
        </div>
        <div className="form-group">
          <label>Expenditure: </label>
          <input 
              type="number" 
              id="expenditure"
              className="form-control"
              value={this.state.expenditure}
              onChange={this.onChange}
              />
        </div>

        <button onClick={this.handleClick}>Save</button>
        <button onClick={this.handleCancel}>Cancel</button>
      </form>
      <div><p>{this.displayErrors(errorMessages)}</p></div>
    </div>
    )
  }
}