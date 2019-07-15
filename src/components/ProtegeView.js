import React from 'react';
import { Link, Redirect } from "react-router-dom";
import axios from 'axios'


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
          {console.log('item')}
        {console.log(item)}
        </ul>
      </div>
    )
  })
} 

const calculateExpenditure = (items) => items.reduce((total, item) => total + item.expenditure, 0)


const deleteProtege = (e, protege) => {
  e.preventDefault();
  console.log(protege) 
  
  axios.delete(`http://localhost:5000/proteges/${protege._id}`).then (res => {
    if (res.ok) {
      return <Redirect to="/proteges"/>
  }
})
}


const ProtegeView = (props) => {
  // console.log(props)
  const {protege, items} = props.protege
  console.log(protege)
  return (
    <>
      <h1>Name: {protege.protegename}</h1>
      <h2>Items purchased: {renderItems(items)}</h2>
      <h2>Total spent: {calculateExpenditure(items)}</h2>
      <h2>Balance: {1000 - calculateExpenditure(items)}</h2>
      <Link to= {{
            pathname: "/create",
            state: {
              props
            }
          }}>Add Item
          </Link> 
          <p></p>
          <Link to= {{
            pathname: `/editprotege/${protege._id}`
          }}>
          Edit protege details
          </Link> 
          <p></p>
          <button type="submit" onClick={e => deleteProtege(e, protege)}>
              Delete
            </button>
    </>
  )
}

export default ProtegeView;