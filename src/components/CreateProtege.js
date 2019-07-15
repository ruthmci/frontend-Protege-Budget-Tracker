import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
// import axios from 'axios'


class CreateProtege extends Component {
  state = { 
    protegename: '',
    protegeemail: '',
    expenditure: '',
    balance: 1000,
    addingUser: true
  }

  handleClick = (e) => {
    e.preventDefault()
    const protegeData = {
      protegename: this.state.protegename,
      protegeemail: this.state.protegeemail,
      expenditure: this.state.expenditure,
      balance: this.state.balance
    }
    this.props.addProtege(protegeData)
  }

  handleCancel = (e) => {
    e.preventDefault();
    window.location = '/proteges';
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value})
  }

  render(){
    // console.log(this.props.addingUser)
    if (!this.props.addingUser) {
      return <Redirect to='/' />
    } else {
      return (
        <div className="protege-form">
          <h1>Protege form</h1>
          <form>
            <label htmlFor="protegename">Protege name</label>
              <input 
                onChange={this.handleChange} 
                type="text" 
                id="protegename" 
                placeholder="protege name" 
                value={this.state.protegename} 
              />
              <label htmlFor="protegeemail">Email</label>
              <input 
                onChange={this.handleChange} 
                type="text" 
                id="protegeemail" 
                placeholder="email" 
                value={this.state.protegeemail} 
              />
              <button onClick={this.handleClick}>Save</button>
              <button onClick={this.handleCancel}>Cancel</button>
          </form>
        </div>
      )
    }
  }
}


  export default CreateProtege;