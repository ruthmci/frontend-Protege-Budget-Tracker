import React from 'react';
import './App.css';
import Routes from './Routes'
import axios from 'axios'


class App extends React.Component {
  state = {
    proteges: []
    // items: []
  }
  
  async componentDidMount() {
    const getProteges = 'http://localhost:5000/proteges'
    // const getItems = 'http://localhost:5000/items'
    
    const protegeResponse = await fetch(getProteges)
    const protegeData = await protegeResponse.json()
    
    // const itemResponse = await fetch(getItems)
    // const itemData = await itemResponse.json()

    this.setState({
      proteges: protegeData,
      // items: itemData   
    })
  }


  render() {
    const { proteges } = this.state

    if (proteges.length === 0) {
      return null
    } else {
        return <Routes proteges={proteges}/>
    }
  }
}

export default App;
