// Component used for deleting an item

import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import axios from 'axios';
import './form.css'
import './DeleteItem.css'
export default class EditItem extends Component {
 
    state = {
      description: '',
      expenditure: '',
      adding: true
    }
  
  handleCancel = (e) => {
    e.preventDefault();
    window.location = `/proteges/${this.props.location.state.item.protege_id}`;
  }

  componentDidMount(){
    this.setState({
      description: this.props.location.state.item.description,
      expenditure: this.props.location.state.item.expenditure,
      itemId: this.props.location.state.item._id,
      protegeId: this.props.location.state.item.protege_id
    })
    console.log(this.props.location.state.item)
  }


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
    

    axios.delete(`${process.env.REACT_APP_BACKEND_URL}/items/${item.itemId}`, {data: item})
      .then(res => {
        window.location = `/proteges/${this.state.protegeId}`;
      });
  }
  render() {
    if (this.state.adding === true) {
    return (
      <div className= "delete">
      <h3> Are you sure you want to delete?</h3>
      <div className="delete-button">
        <button className ="button2" onClick={this.handleClick}>Delete</button>
        <button className ="button1" onClick={this.handleCancel}>Cancel</button>
        </div>
        </div>
    )
  } else
  return (
    <Redirect to='/' />
  )
}
}