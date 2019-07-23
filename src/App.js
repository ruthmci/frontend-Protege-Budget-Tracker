import React from 'react';
import './App.css';
import Routes from './Routes';
import axios from 'axios';
import Spinner from './spinner';
import Home from './components/Home';

class App extends React.Component {
  // These states allow for conditional rendering of the forms
  state = {
    addingUser: true,
    updatingDone: null,
    errorMessages: [],
    homeClick: false
  }
  
  // Gets all the protege data on mount and sets it in state
  async componentDidMount() {
    console.log(process.env.NODE_ENV)
    const getProteges = `${process.env.REACT_APP_BACKEND_URL}/proteges`
    const protegeResponse = await fetch(getProteges)
    console.log(protegeResponse);
    const protegeData = await protegeResponse.json()
    
    this.setState({
      proteges: protegeData,
      addingUser: true
    })
  }

  // Function used by the Update Protege Component to send an update request using the data and set the updating state to true
  updateProtege = (name, email, id) => {
    const protege = {
      protegename: name,
      protegeemail: email
    }
    axios.patch(`${process.env.REACT_APP_BACKEND_URL}/proteges/update/${id}`, protege)
      .then((res) => {
        console.log(res)
        this.setState({
          updatingDone: true,
          proteges: res.data.proteges
        })
        this.clearErrorMessages();
      })
      .catch( (err) => {
        this.errorMessages(err)
      })
    }

    // Ensures the state toggles back so the CreateProtege and updating protege form will show when needed again
  componentDidUpdate(prevProps, prevState) {
    if (prevState.addingUser !== this.state.addingUser) {
      this.setState({
        addingUser: true
      })
    }
    if (prevState.updatingDone !== this.state.updatingDone) {
      this.setState({
        updatingDone: false
      })
    }
    
  }

  // This function is called by CreateProtege component
  addProtege = (protegeData) => {
    const newProtege = {
        protegename: protegeData.protegename, 
        protegeemail: protegeData.protegeemail,
        expenditure: protegeData.expenditure, 
        balance: protegeData.balance
    }
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/proteges/add`, newProtege)
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
      this.clearErrorMessages();
    })
    .catch( (err) => {
      this.errorMessages(err)
      })
      // console.log(this.state.errorMessages)
  }

// Places the error messages into state so they can be rendered on the relevant form pages. 
// This functions is called in the catches above
  errorMessages = (err) => {
    this.setState({errorMessages: err.response.data.messages})
  }

  clearErrorMessages = () => {
    this.setState({
      errorMessages: []
    })
  }
  
homeClickFunction = () => {
  this.setState({
    homeClick: true
  })
}

  render() {
    const { proteges, addingUser, homeClick } = this.state
    if (!proteges) {
      return <Spinner/>
    // } else if (homeClick === false) {
    //   return <Home homeClickFunction={this.homeClickFunction}/>

    } else {
        return <Routes proteges={proteges} errorMessages={this.state.errorMessages} addProtege={this.addProtege} addingUser={addingUser} updateProtege={this.updateProtege} updatingDone={this.state.updatingDone} />
    }
  }
}

export default App;
