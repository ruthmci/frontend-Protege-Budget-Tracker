// This component contains the functions responsible for rendering the 'View protege' page

import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'
import './Buttons.css'
import './protegeview.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

// Renders the purchased items as a list. Called in the ProtegeView function below.

const renderItems = (items) => {
  // const buttonStyle = { backgroundColor: 'yellow' }
  return items.map((item, index) => {
    return (
      <div className= "List">
      <div key={index}>
        <ul>
       <li>{item.description} | $ {item.expenditure}</li> 
          <Link to= {{
            pathname: "/edit",
            state: {
              item,
            }
          }}>
          <button className="button1">
          Edit Item <FontAwesomeIcon icon={ faEdit }/>
          </button>
          </Link>  
          <Link to= {{
            pathname: "/delete",
            state: {
              item,
            }
          }}>
          <button className = "button1">Delete Item <FontAwesomeIcon icon={ faTrash }/></button>
          </Link>
        </ul>
      </div>
      </div>
    )
  })
  
} 

// This function calculates the total Expenditure by adding the expenditure of each item. Called in the ProtegeView function below
const calculateExpenditure = (items) => items.reduce((total, item) => total + item.expenditure, 0)

// Checks the protege isn't over their limit
const checkExpenditure = (protege, items) => {
  if (calculateExpenditure (items) >= 1000) {
      return <p>Protege has reached their limit</p>
  } else 
      return(<p><Link to= {{
        pathname: `/create/${protege._id}`,
        }}>
        <button className="button1">
          Add Item <FontAwesomeIcon icon={ faPlus }/>
          </button>
        </Link></p> )
}

// This function validates the protege has no purchases before deleting the protege
const deleteProtege = (e, protege, items) => {
  e.preventDefault();
  console.log(protege)
  console.log(items)
  if (items.length !== 0) {
    return window.alert('Please delete all items before you delete the protege')
  }
    else {
      axios.delete(`${process.env.REACT_APP_BACKEND_URL}/proteges/${protege._id}`)
    .then (res => {
      console.log(res)
    if (res.status === 200) {
      window.location = '/';
    }})
  } 
}

// Renders a page with one protege's details, using props passed down to it from the GetProtegeData component. This function calls the renderItems and the calculateExpenditure Functions
// It also calls the deleteProtege function on click

const ProtegeView = (props) => {
  const {protege, items} = props.protege

  return (
    <div className="list1">
      <p>Name: {protege.protegename}</p>
      <p>Email: {protege.protegeemail}</p>
      <p>Items purchased: {renderItems(items)}</p>
      <p>Total spent: {calculateExpenditure(items)}</p>
      <p>Balance: {1000 - calculateExpenditure(items)}</p>
      {checkExpenditure(protege, items)}
      <Link to= {{
            pathname: `/editprotege/${protege._id}`
          }}>
          <button className="button1">
          Edit protege details <FontAwesomeIcon icon={ faUserEdit }/>
          </button>
          </Link> 
          <button className="button1" type="submit" onClick={e => {if (window.confirm('Are you sure you want to delete protege')) deleteProtege(e, protege, items)}}>
          Delete Protege <FontAwesomeIcon icon={ faTrash }/>
            </button>
            
    </div>
  )
}

export default ProtegeView;