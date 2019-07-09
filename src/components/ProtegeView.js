import React from 'react';

const renderItems = (items) => {
  return items.map((item, index) => {
    return (
      <div key={index}>
        {/* <h2>{item.protegename}</h2> */}
        <ul>
          <li>Description: {item.description} | Spent: {item.amount}</li>
        </ul>
      </div>
    )
  })
} 

 

const ProtegeView = (props) => {
  console.log(props)
  return (
    <>
      <h1>Name: {props.protege.protegename}</h1>
      <h2>Items purchased: {renderItems(props.items)}</h2>
      <h2>Total spent: {props.protege.expenditure}</h2>
      <h2>Balance: {props.protege.balance}</h2>
    </>
  )
}

export default ProtegeView;