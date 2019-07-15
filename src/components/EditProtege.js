import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import axios from 'axios';

export default class EditProtege extends Component {
  // constructor(props) {
  //   super(props);

    state = {
      protegename: '',
      protegeemail: '',
      editing: true
    }
  // } 
  handleCancel = (e) => {
    e.preventDefault();
    window.location = '/proteges';
  }

  componentDidMount(){
    this.setState({
      protegename: this.props.location.state.protege.protegename,
      protegeemail: this.props.location.state.protege.protegename,
      protegeId: this.props.location.state.protege._id
    })
    console.log(this.props.location.state.protege)
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value})
  }

  handleClick = (e) => {
    e.preventDefault();

    const protege = {
      protegename: this.state.protegename,
      protegeemail: this.state.protegeemail,
      protegeId: this.state.protegeId
    }
    console.log('edit')
    console.log(protege);
    

    axios.patch(`http://localhost:5000/proteges/update/${protege.protegeId}`, protege)
      .then(res => console.log(res.data));
    window.location = '/';
  }
  render() {
    if (this.state.edit === true) {
    return (
    <div>
      <h3>Edit Protege </h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              id="protegename" 
              className="form-control"
              value={this.state.protegename}
              onChange={this.onChange}
              />
        </div>
        <div className="form-group">
          <label>Email: </label>
          <input 
              type="text" 
              id="protegeemail"
              className="form-control"
              value={this.state.protegeemail}
              onChange={this.onChange}
              />
        </div>

        <button onClick={this.handleClick}>Update</button>
        <button onClick={this.handleCancel}>Cancel</button>
      </form>
    </div>
    )
  } else
  return (
    <Redirect to='/' />
  )
}
}