import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'

export default class EditProtege extends Component {
  state = {
    protegename: '',
    protegeemail: '',
    editing: true,
    filledForm: false
  }

  handleCancel = (e) => {
    e.preventDefault();
    window.location = `/proteges/${this.props.match.params.id}`;
  }

  async componentDidMount() {
    const protegeId = this.props.match.params.id
    console.log(protegeId)
    const getOneProtege = `${process.env.REACT_APP_BACKEND_URL}/proteges/${protegeId}`
    const protegeResponse = await fetch(getOneProtege)
    const protegeData = await protegeResponse.json()
    console.log(protegeData)
    this.setState({
      formFilled: true,
      protegename: protegeData.protege.protegename,
      protegeemail: protegeData.protege.protegeemail
    })
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value})
  }

  handleClick = (e) => {
    e.preventDefault()
    // call func
    this.props.updateProtege(this.state.protegename, this.state.protegeemail, this.props.match.params.id)
  }

  displayErrors = (errors) => {
    return errors.map((error, index) => {
      return (
        <div key={index}>
          <p>{error}</p>
        </div>
      )
    })
  } 

  
  render() {
     let errorMessages = this.props.errorMessages
    const { formFilled } = this.state
    console.log(this.props)
    if (!formFilled) {
      return null
    } else if (this.props.updatingDone) {
      return (
        <Redirect to={{
          pathname: `/proteges/${this.props.match.params.id}`
        }} />
      )
    } else {
        return (
          <div>
            <h3>Edit Protege 
            </h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group"> 
                <label>Name: </label>
                <input type="text"
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
                    required
                    id="protegeemail"
                    className="form-control"
                    value={this.state.protegeemail}
                    onChange={this.onChange}
                    />
              </div>
      
              <button onClick={this.handleClick}>Update</button>
              <button onClick={this.handleCancel}>Cancel</button>
            </form>
            <div><p>{this.displayErrors(errorMessages)}</p></div>
          </div>
        )
    }
  }
}