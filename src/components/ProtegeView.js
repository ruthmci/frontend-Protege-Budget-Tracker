import React from 'react';

const renderItems = (items) => {
  return items.map((item, index) => {
    return (
      <div key={index}>
        <ul>
          <li> {item.description} | $ {item.expenditure}</li>
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
    </>
  )
}

export default ProtegeView;