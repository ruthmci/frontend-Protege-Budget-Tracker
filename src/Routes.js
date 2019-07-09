import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Proteges from './components/Proteges'
import Items from './components/Items'
import GetProtegeData from './components/GetProtegeData'

class Routes extends React.Component {
  render() {
    const { proteges, items } = this.props
    return (
      <BrowserRouter>
      <Switch>
        <Route path="/list" render={() => {
          return <Proteges proteges={proteges} />
        }}
        />
        <Route path="/items" render={() => {
          return <Items items={items} />
        }}
        />
        <Route path='/proteges/:id' component={GetProtegeData} />
        {/* <Route path="/login" exact component={Login} />
        <Route path="/" exact component={Home} /> */}
      </Switch>
      </BrowserRouter>
    ) 
  }
}

export default Routes;