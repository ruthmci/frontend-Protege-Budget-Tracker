import React from 'react';
import { Link} from "react-router-dom";
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
          
        </ul>
      </div>
    )
  })
} 

const calculateExpenditure = (items) => items.reduce((total, item) => total + item.expenditure, 0)

const ProtegeView = (props) => {
  console.log(props)
  return (
    <>
      <h1>Name: {props.protege.protege.protegename}</h1>
      <h2>Items purchased: {renderItems(props.protege.items)}</h2>
      <h2>Total spent: {calculateExpenditure(props.protege.items)}</h2>
      <h2>Balance: {1000 - calculateExpenditure(props.protege.items)}</h2>
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