import React from 'react';
import './Home.css';


// App runs every time you go to an endpoint 

class Home extends React.Component {

handleClick = () => {
  console.log(this.props)
  this.props.homeClickFunction()
}

  render() {
    return (
      <div className="containerHome">
        <div className="containerTextHome">
            <h2>Welcome to the protege budget tracker</h2>
            <p></p>
            <p>Track each MYOB protege's learning and development spend.</p>
            <p></p>
            <button className="buttonHome" onClick = {this.handleClick}>Get started</button>
        </div>
    </div>
    )
    
  }
}

export default Home;

