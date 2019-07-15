import React from 'react';
import { Link} from "react-router-dom";
import axios from 'axios';


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
          }}>Delete
          </Link> 
          {console.log('item')}
        {console.log(item)}
        </ul>
      </div>
    )
  })
} 

const calculateExpenditure = (items) => items.reduce((total, item) => total + item.expenditure, 0)

const ProtegeView = (props) => {
  console.log(props)
  const {protege, items} = props.protege
  
  return (
    <>
      <h1>Name: {protege.protegename}</h1>
      <h2>Items purchased: {renderItems(items)}</h2>
      <h2>Total spent: {calculateExpenditure(items)}</h2>
      <h2>Balance: {1000 - calculateExpenditure(items)}</h2>
      <Link to= {{
            pathname: "/create",
            state: {
              props,
            }
          }}>Add Item
          </Link> 
    </>
  )
}

export default ProtegeView;