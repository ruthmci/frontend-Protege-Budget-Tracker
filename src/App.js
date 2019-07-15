import React from 'react';
import './App.css';
import Routes from './Routes'

class App extends React.Component {
  state = {
    proteges: []
  }
  
  async componentDidMount() {
    const getProteges = 'http://localhost:5000/proteges'
    
    const protegeResponse = await fetch(getProteges)
    const protegeData = await protegeResponse.json()
    
    this.setState({
      proteges: protegeData
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
