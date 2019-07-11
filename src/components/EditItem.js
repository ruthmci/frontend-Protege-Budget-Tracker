import React, { Component } from 'react';
// import {Redirect} from 'react-router-dom'
import axios from 'axios';

export default class EditItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      expenditure: '',
    }
  }

  // componentDidMount() {
  //   axios.get('http://localhost:5000/proteges/')
  //     .then(response => {
  //       if (response.data.length > 0) {
  //         this.setState({
  //           proteges: response.data.map(protege => protege.protegeId),
  //           protegeId: response.data[0].protegeId
  //         })
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })

  // }

  // onChangeProtegeId = (e) => {
  //   this.setState({
  //     protegeId: e.target.value
  //   })
  // }
  

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

  onSubmit = (e) => {
    e.preventDefault();

    const item = {
      description: this.state.description,
      expenditure: this.state.expenditure,
    }
    console.log('edit')
    console.log(item);
    

    axios.patch('http://localhost:5000/items/update/:id', item)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
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
  }
}