import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav'
import GetProtegeData from './components/GetProtegeData'
import CreateItem from "./components/CreateItem";
import EditItem from "./components/EditItem";
import DeleteItem from "./components/DeleteItem";
import Proteges from './components/Proteges'
import CreateProtege from './components/CreateProtege';
import EditProtege from './components/EditProtege';

class Routes extends React.Component {
  render() {
    const { proteges } = this.props
    return (
      <BrowserRouter>
      <Nav />
      <Switch>
        {/* Protege routes */}
        <Route path='/proteges/:id' component={GetProtegeData} /> 
        <Route path='/add' render={() => {
          return <CreateProtege addProtege={this.props.addProtege} addingUser={this.props.addingUser} errorMessages={this.props.errorMessages} />
        }} />
        <Route path='/editprotege/:id' render={(routeProps) => {
          return <EditProtege updateProtege={this.props.updateProtege} updatingDone={this.props.updatingDone} {...routeProps} /> }
        } />
        
        {/* Purchased items routes */}
        <Route path='/create/:id' component={CreateItem} />
        <Route path='/edit/' component={EditItem} />
        <Route path='/delete/' component={DeleteItem} />

        {/* Home */}
        <Route exact path='/' render={() => {
          return <Proteges proteges={proteges} />
        }}/>
      </Switch>
      </BrowserRouter>
    ) 
  }
}

export default Routes;