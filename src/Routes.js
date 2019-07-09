import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Proteges from './components/Proteges'

class Routes extends React.Component {
  render() {
    const { proteges } = this.props
    return (
      <BrowserRouter>
      <Switch>
        <Route path="/list" render={() => {
          return <Proteges proteges={proteges} />
        }}
        />
        {/* <Route path="/login" exact component={Login} />
        <Route path="/" exact component={Home} /> */}
      </Switch>
      </BrowserRouter>
    ) 
  }
}

export default Routes;