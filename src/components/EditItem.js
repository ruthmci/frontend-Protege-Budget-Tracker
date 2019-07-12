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
    window.location = '/proteges';
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

  // onChangeDate = (date) => {
  //   this.setState({
  //     date: date
  //   })
  
  // }
  

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
    

    axios.patch(`http://localhost:5000/items/update/${item.itemId}`, item)
      .then(res => console.log(res.data));
    window.location = '/';
  }
  render() {
    if (this.state.adding === true) {
    return (
    <div>
      <h3>Edit Item </h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>Expenditure: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.expenditure}
              onChange={this.onChangeExpenditure}
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