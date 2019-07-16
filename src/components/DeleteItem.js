import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import axios from 'axios';
export default class EditItem extends Component {
  // constructor(props) {
  //   super(props);

    state = {
      description: '',
      expenditure: '',
      adding: true
    }
  // } 
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
    

    axios.delete(`http://localhost:5000/items/${item.itemId}`, item)
      .then(res => console.log(res.data));
    window.location = `/proteges/${this.state.protegeId}`;
  }
  render() {
    if (this.state.adding === true) {
    return (
      <>
      <h3> Are you sure you want to delete?</h3>
        <button onClick={this.handleClick}>Delete</button>
        <button onClick={this.handleCancel}>Cancel</button>
        </>
    )
  } else
  return (
    <Redirect to='/' />
  )
}
}