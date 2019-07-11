import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import axios from 'axios'

class ProtegeForm extends Component {
    
  constructor(props) {
        super(props);
        
        this.state = { 
            protegename: '',
            protegeemail: '',
            expenditure: '',
            balance: 1000,
            date: '', 
            adding: true
        };
      }


    handleClick = (e) => {
      e.preventDefault();
      const newProtege = {
          protegename: this.state.protegename, 
          protegeemail: this.state.protegeemail,
          expenditure: this.state.expenditure, 
          balance: this.state.balance,
          date: this.state.date
      }
      console.log(newProtege)

      axios.post('http://localhost:5000/proteges/add', newProtege)
      .then(res => console.log(res.data));

      this.setState({
          protegename: '',
          protegeemail: '',
          expenditure: '', 
          balance: '',
          date: '', 
          adding: false
      })
    }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value})
  }

  render(){
    // console.log(this.state);
    if (this.state.adding === true) {
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
              <label htmlFor="expenditure">Expenditure</label>
              <input 
                onChange={this.handleChange} 
                type="number" 
                id="expenditure" 
                placeholder="expenditure" 
                value={this.state.expenditure} 
              />
              <label htmlFor="date">Date</label>
              <input 
                onChange={this.handleChange} 
                type="date" 
                id="date" 
                placeholder="date" 
                value={this.state.date} 
              />

              <button onClick={this.handleClick}>Save</button>
              <button onClick={this.handleCancel}>Cancel</button>
          </form>
        </div>
      );
    } else
      return (
        <Redirect to='/' />
      )
    }
}


  export default ProtegeForm;