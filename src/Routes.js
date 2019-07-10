import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Proteges from './components/Proteges'
import Items from './components/Items'
import GetProtegeData from './components/GetProtegeData'
import ProtegeForm from './components/ProtegeForm'

class Routes extends React.Component {
  render() {
    const { proteges, items } = this.props
    return (
      <BrowserRouter>
      <Switch>
        <Route path="/items" render={() => {
          return <Items items={items} />
        }}
        />
        <Route path="/add" component={ProtegeForm}
        />
        <Route path='/proteges/:id' component={GetProtegeData} />
        <Route path="/" render={() => {
          return <Proteges proteges={proteges} />
        }}
        />
      </Switch>
      </BrowserRouter>
    ) 
  }
}

export default Routes;