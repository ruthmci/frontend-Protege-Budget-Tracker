import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav'
import GetProtegeData from './components/GetProtegeData'
import Items from './components/Items'
import CreateItem from "./components/CreateItem";
import EditItem from "./components/EditItem";
import Proteges from './components/Proteges'
import CreateProtege from './components/CreateProtege';
import EditProtege from './components/EditProtege';

class Routes extends React.Component {
  render() {
    const { proteges, items } = this.props
    console.log(proteges)
    return (
      <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/items" render={() => {
          return <Items items={items} />
        }}
        />
        <Route path='/proteges/:id' component={GetProtegeData} />
        <Route path="/add" component={CreateProtege} />
        <Route path='/editprotege/' component={EditProtege} />
        
        <Route path="/create" component={CreateItem} />
        <Route path='/edit/' component={EditItem} />
        <Route path="/" render={() => {
          return <Proteges proteges={proteges}/>
        }}/>
      </Switch>
      </BrowserRouter>
    ) 
  }
}

export default Routes;