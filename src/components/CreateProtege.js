// Component for creating a protege

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'


class CreateProtege extends Component {
  state = { 
    protegename: '',
    protegeemail: '',
    expenditure: '',
    balance: 1000,
    addingUser: true
  }

  // HandleClick collects the information from state (via the form) and sends it to the addProtege function, which has been passed in from App.js

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
    window.location = '/';
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value})
  }

  // The form renders if the addingUser state is false. addingUser is set in App.js
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
              <button className ="button2" onClick={this.handleClick}>Save</button>
              <button className ="button1" onClick={this.handleCancel}>Cancel</button>
          </form>
        </div>
      )
    }
  }
}


  export default CreateProtege;