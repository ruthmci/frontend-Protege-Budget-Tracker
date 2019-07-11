import React from 'react';
import ProtegeView from './ProtegeView'

class GetProtegeData extends React.Component {
  
  state = {
    protege: null
  }
  
  async componentDidMount() {
    const protegeId = this.props.match.params.id
    const getOneProtege = `http://localhost:5000/proteges/${protegeId}`

    // MAYBE NEED BACKEND ROUTE?  
    // const getProtegeItems = 'http://localhost:5000/items'

    const protegeResponse = await fetch(getOneProtege)
    const protegeData = await protegeResponse.json()

    // MAYBE NEED BACKEND ROUTE?  
    // const itemResponse = await fetch(getProtegeItems)
    // const itemData = await itemResponse.json()

    // const protegeItems = itemData.filter(item => item.protegename === protegeData.protegename)

    this.setState({
      protege: protegeData
      // items: protegeItems      
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