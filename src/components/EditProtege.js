import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import axios from 'axios';

export default class EditProtege extends Component {
  state = {
    protegename: '',
    protegeemail: '',
    editing: true,
    filledForm: false,
    updatingDone: true
  }

  handleCancel = (e) => {
    e.preventDefault();
    window.location = '/';
  }

  async componentDidMount() {
    // console.log(this.props.location)
    // this.setState({
    //   protegename: this.props.location.state.protege.protegename,
    //   protegeemail: this.props.location.state.protege.protegename,
    //   protegeId: this.props.location.state.protege._id
    // })
    // console.log("here")
    // console.log(this.props.location.state.protege.protegename)
    const protegeId = this.props.match.params.id
    console.log(protegeId)
    const getOneProtege = `http://localhost:5000/proteges/${protegeId}`
    const protegeResponse = await fetch(getOneProtege)
    const protegeData = await protegeResponse.json()
    console.log(protegeData)
    this.setState({
      formFilled: true,
      protegename: protegeData.protege.protegename,
      protegeemail: protegeData.protege.protegeemail
    })
  }
  componentDidUpdate() {
    console.log('componentupdate')
    console.log(this.state.updatingDone)
    this.setState({
      // updatingDone:null
    })
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value})
  }

  handleClick = (e) => {
    e.preventDefault()
    // call func
    this.props.updateProtege(this.state.protegename, this.state.protegeemail, this.props.match.params.id)}
   
    render() {
    
    const { formFilled } = this.state
    console.log(this.props)
    if (!formFilled) {
      return null
    } else if (this.props.updatingDone === true) {
      return (
        <>
        <Redirect to={`/proteges/${this.props.match.params.id}`} />
        {console.log(this.props.updatingDone)}
        </>
        
      )
    } else {
        return (
          <div>
            <h3>Edit Protege 
            </h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group"> 
                <label>Name: </label>
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
    }
  }
 
}