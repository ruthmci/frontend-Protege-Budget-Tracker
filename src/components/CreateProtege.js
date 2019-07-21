// Component for creating a protege
import './form.css'


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

// displays the error messsages
  displayErrors = (errors) => {
    return errors.map((error, index) => {
      return (
        <div key={index}>
          <p>{error}</p>
        </div>
      )
    })
  } 

  // The form renders if the addingUser state is false. addingUser is set in App.js
  render(){
    
    let errorMessages = this.props.errorMessages
    console.log(errorMessages)
    if (!this.props.addingUser) {
      return <Redirect to='/' />
    } else {
      return (
        <div className="form-box">
        <div className="form-container-protege">
          <div className="form-header-box">
            <h2 className="form-header">Register a protege</h2>
          </div>
          <form className="form" onSubmit={this.handleClick} >
           <div className="form-group"> 
              <label className="label" htmlFor="protegename">Protege name</label>   
                  <input className="form-control" 
                    onChange={this.handleChange} 
                    type="text" 
                    required
                    // className="form-control"
                    id="protegename" 
                    placeholder="protege name" 
                    value={this.state.protegename} 
                  />
           </div>
           <div className="form-group"> 
                <label  className="label" htmlFor="protegeemail">Email</label>
                <input className="form-control"    
                      onChange={this.handleChange} 
                      type="text" 
                      required
                      // className="form-control"
                      id="protegeemail" 
                      placeholder="email" 
                      value={this.state.protegeemail} 
                    />
         </div>
            <div className="buttons">
              <button className="purple-button-form" onClick={this.handleClick}>Save</button>  
              <button className="pink-button-form" onClick={this.handleCancel}>Cancel</button>
            </div>              
          </form> 
         {/* <FormFeedback>  */}
         <p className="error-message">{this.displayErrors(errorMessages)} </p>
         {/* </FormFeedback> */}
      </div>
      </div>
      )
    }
  }
}


  export default CreateProtege;