import React, { Component } from 'react';
import axios from 'axios';

export default class CreateItem extends Component {
  
  state = {
      protegeId: this.props.match.params.id,
      description: '',
      expenditure: '',
      date: new Date(),
    }
  
    handleCancel = (e) => {
      window.location = `/proteges/${this.props.match.params.id}`;
    }

    onChange = (e) => {
      this.setState({ [e.target.id]: e.target.value})
    }

  onSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      protegeId: this.state.protegeId,
      description: this.state.description,
      expenditure: this.state.expenditure,
      date: this.state.date
    }

    console.log(newItem);

    axios.post('http://localhost:5000/items/add', newItem)
      .then(res => console.log(res.data));

    window.location = `/proteges/${this.props.match.params.id}`;
  }

  render() {
    return (
    <div>
      <h3>Create New Item </h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              id="description"
              className="form-control"
              value={this.state.description}
              onChange={this.onChange}
              />
        </div>
        <div className="form-group">
          <label>Expenditure: </label>
          <input 
              type="text" 
              required
              id="expenditure"
              className="form-control"
              value={this.state.expenditure}
              onChange={this.onChange}
              />
        </div>

        <button onClick={this.handleClick}>Save</button>
        <button onClick={this.handleCancel}>Cancel</button>
      </form>
    </div>
    )
  }
}