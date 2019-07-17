// This component contains the functions responsible for rendering the 'View protege' page

import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'

// Renders the purchased items as a list. Called in the ProtegeView function below.

const renderItems = (items) => {
  return items.map((item, index) => {
    return (
      <div key={index}>
        <ul>
          <li> {item.description} | $ {item.expenditure}</li>
          <Link to= {{
            pathname: "/edit",
            state: {
              item,
            }
          }}>Edit
          </Link>  
          <br/>
          <Link to= {{
            pathname: "/delete",
            state: {
              item,
            }
          }}>Delete Item
          </Link> 
        </ul>
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
          Add Item
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
      axios.delete(`http://localhost:5000/proteges/${protege._id}`)
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
    <>
      <h1>Name: {protege.protegename}</h1>
      <h2>Items purchased: {renderItems(items)}</h2>
      <h2>Total spent: {calculateExpenditure(items)}</h2>
      <h2>Balance: {1000 - calculateExpenditure(items)}</h2>
      {checkExpenditure(protege, items)}
      {/* <Link to= {{
            pathname: `/create/${protege._id}`,
          }}>Add Item
          </Link> 
          <p></p> */}
          <Link to= {{
            pathname: `/editprotege/${protege._id}`
          }}>
          Edit protege details
          </Link> 
          <p></p>
          <button type="submit" onClick={e => {if (window.confirm('Are you sure you want to delete')) deleteProtege(e, protege, items)}}>
              Delete protege
            </button>
    </>
  )
}

export default ProtegeView;