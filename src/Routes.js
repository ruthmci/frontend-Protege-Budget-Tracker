import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav'
import GetProtegeData from './components/GetProtegeData'
import Items from './components/Items'
import CreateItem from "./components/CreateItem";
import EditItem from "./components/EditItem";
import DeleteItem from "./components/DeleteItem";
import Proteges from './components/Proteges'
import CreateProtege from './components/CreateProtege';
import EditProtege from './components/EditProtege';

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
        <Route path='/proteges/:id' component={GetProtegeData} />
        <Route path="/add" render={() => {
          return <CreateProtege addProtege={this.props.addProtege} addingUser={this.props.addingUser} />
        }} />
        <Route path='/editprotege/:id' render={(routeProps) => {
          return <EditProtege updateProtege={this.props.updateProtege} updatingDone={this.props.updatingDone} {...routeProps} /> }
        } />
        
        <Route path="/create" component={CreateItem} />
        <Route path='/edit/' component={EditItem} />
        <Route path='/delete/' component={DeleteItem} />
        <Route exact path="/" render={() => {
          return <Proteges proteges={proteges} />
        }}/>
      </Switch>
      </BrowserRouter>
    ) 
  }
}

export default Routes;