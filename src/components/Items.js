import React from 'react';
// import { Link} from "react-router-dom";

const renderItems = (items) => {
  return items.map((item, index) => {
    return (
      <div key={index}>
        <h2>{item.protegename}</h2>
        <ul>
          <li>Description: {item.description}</li>
          <li>Amount: {item.amount}</li>
        </ul>
      </div>
    )
  })
}

const Items = (props) => {
  const displayItems = renderItems(props.items)
  return displayItems
}

export default Items;