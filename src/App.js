import React from 'react';
import './App.css';
import Routes from './Routes';
import axios from 'axios';

class App extends React.Component {
  state = {
    addingUser: true,
    updatingDone: null
  }
  
  async componentDidMount() {
    const getProteges = 'http://localhost:5000/proteges'
    
    const protegeResponse = await fetch(getProteges)
    const protegeData = await protegeResponse.json()
    
    this.setState({
      proteges: protegeData,
      addingUser: true
    })
  }

  updateProtege = (name, email, id) => {
    const protege = {
      protegename: name,
      protegeemail: email
    }
    axios.patch(`http://localhost:5000/proteges/update/${id}`, protege)
      .then((res) => {
        this.setState({
          updatingDone: true
        })
      });
    }

  

  addProtege = (protegeData) => {
    const newProtege = {
        protegename: protegeData.protegename, 
        protegeemail: protegeData.protegeemail,
        expenditure: protegeData.expenditure, 
        balance: protegeData.balance
    }
    axios.post('http://localhost:5000/proteges/add', newProtege)
    .then((res) => {
      // we get protege array from state      
      const { proteges } = this.state
      // we change struture of new protege to match others, using res.data
      const mutatedProtege = {
        items: [],
        protege: res.data
      }
      // we add to the state with new protege 
      let updatedProtegeData;
      updatedProtegeData = proteges
      updatedProtegeData.push(mutatedProtege)
      this.setState({
        proteges: updatedProtegeData,
        addingUser: false
      })
    })
  }

  render() {
    const { proteges, addingUser } = this.state
    if (!proteges) {
      return null
    } else {
     
        return <Routes proteges={proteges} addProtege={this.addProtege} addingUser={addingUser} updateProtege={this.updateProtege} updatingDone={this.state.updatingDone} />
    }
  }
}

export default App;
