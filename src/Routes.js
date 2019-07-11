import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Proteges from './components/Proteges'
import Items from './components/Items'
import GetProtegeData from './components/GetProtegeData'
import ProtegeForm from './components/ProtegeForm'
import Nav from './components/Nav'

class Routes extends React.Component {
  render() {
    const { proteges, items } = this.props
    return (
      <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/items" render={() => {
          return <Items items={items} />
        }}
        />
        <Route path="/add" component={ProtegeForm}
        />
        <Route path='/proteges/:id' component={GetProtegeData} />
        <Route path="/" render={() => {
          return <Proteges proteges={proteges} items={items}/>
        }}
        />
      </Switch>
      </BrowserRouter>
    ) 
  }
}

export default Routes;