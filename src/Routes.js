import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Proteges from './components/Proteges'
import Items from './components/Items'
import GetProtegeData from './components/GetProtegeData'
import ProtegeForm from './components/ProtegeForm'
import Nav from './components/Nav'
import CreateItem from "./components/CreateItem";
import EditItem from "./components/EditItem";
import DeleteItem from "./components/DeleteItem";

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
        <Route path="/add" component={ProtegeForm}
        />
        <Route path="/create" component={CreateItem} />
        <Route path='/proteges/:id' component={GetProtegeData} />
        <Route path='/edit/' component={EditItem} />
        <Route path='/delete/' component={DeleteItem} />
        <Route path="/" render={() => {
          return <Proteges proteges={proteges}/>
        }}
        />
      </Switch>
      </BrowserRouter>
    ) 
  }
}

export default Routes;