// This component gets the protege data and sends it as props to the protegeView component

import React from 'react';
import ProtegeView from './ProtegeView'

class GetProtegeData extends React.Component {
  
  state = {
    protege: null
  }
  
  async componentDidMount() {
    const protegeId = this.props.match.params.id
    const getOneProtege = `http://localhost:5000/proteges/${protegeId}`
    const protegeResponse = await fetch(getOneProtege)
    const protegeData = await protegeResponse.json()

    this.setState({
      protege: protegeData    
    })
  }
  render() {
    const { protege } = this.state
    if (!protege) {
      return null
    }
    return (
      <ProtegeView protege={protege} />
    )
  }
}

export default GetProtegeData