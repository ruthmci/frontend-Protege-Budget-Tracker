// Component used for updating an item 

import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import axios from 'axios';
import './form.css'

export default class EditItem extends Component {
    state = {
      description: '',
      expenditure: '',
      adding: true,
      errorMessages: []
    }
  
  handleCancel = (e) => {
    e.preventDefault();
    window.location = `/proteges/${this.props.location.state.item.protege_id}`;
  }

  // Sets the state from the props passed in via the link on the ProtegeView page
  componentDidMount(){
    this.setState({
      description: this.props.location.state.item.description,
      expenditure: this.props.location.state.item.expenditure,
      itemId: this.props.location.state.item._id,
      protegeId: this.props.location.state.item.protege_id
    })
    console.log(this.props.location.state.item)
  }

  // Handles changes in form and updates state
  onChangeDescription = (e) => {
    this.setState({
      description: e.target.value
    })
  }

  onChangeExpenditure = (e) => {
    this.setState({
      expenditure: e.target.value
    })
  }

// On click this function creates an item and sends it via a patch request 
  handleClick = (e) => {
    e.preventDefault();

    const item = {
      description: this.state.description,
      expenditure: this.state.expenditure,
      itemId: this.state.itemId,
      protegeId: this.state.protegeId
    }
    console.log('edit')
    console.log(item);

   axios.patch(`${process.env.REACT_APP_BACKEND_URL}/items/update/${item.itemId}`, item)
      .then(res => {
        console.log(res.data)
        window.location = `/proteges/${this.props.location.state.item.protege_id}`
      })
      .catch((err) => {
        this.setState({errorMessages: err.response.data.messages})
      })
    }

// Displays the error messages
  displayErrors = (errors) => {
    return errors.map((error, index) => {
      return (
        <div key={index}>
          <p>{error}</p>
        </div>
      )
    })
  } 


  // Form is rendered if adding state is true, else it redirects home
  render() {
     let errorMessages = this.state.errorMessages

    if (this.state.adding === true) {
    return (
    <div>
      <div className="form-box">
        <div className="form-container-item">
          <div className="form-header-box">
            <h2 className="form-header">Edit a purchase</h2>
          </div>
      <form className="form" onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label className="label">Description </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label className="label">Expenditure </label>
          <div class="input-icon">
          <input 
              type="number" 
              required
              className="form-control"
              value={this.state.expenditure}
              onChange={this.onChangeExpenditure}
              placeholder="price"
              />
              <i>$</i>
          </div>
        </div>
        <div className="buttons">
          <button className ="purple-button-form" onClick={this.handleClick}>Update</button>
          <button className ="pink-button-form" onClick={this.handleCancel}>Cancel</button>
        </div>
      </form>
      <div><p className="error-message">{this.displayErrors(errorMessages)}</p></div>
    </div>
    </div>
    </div>
    )
  } else
  return (
    <Redirect to='/' />
  )
}
}