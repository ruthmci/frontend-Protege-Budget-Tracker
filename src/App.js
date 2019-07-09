import React from 'react';
import './App.css';
// import Routes from './Routes'

class App extends React.Component {
  state = {
    proteges: []
  }
  
  async componentDidMount() {
    const response = await fetch('http://localhost:5000/proteges')
    const data = await response.json()
    console.log(data)
    this.setState({
      proteges: data      
    })
  }

  render() {
    const { proteges } = this.state
    console.log(proteges)

    if (proteges.length === 0) {
      return null
    } else {
      return (
        <div>there is data</div>
      )
    //  return <Recipes recipes={recipes} />
    // return <Routes recipes={recipes}/>
    }
  }
}

export default App;
