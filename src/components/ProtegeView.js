import React from 'react';

const renderItems = (items) => {
  return items.map((item, index) => {
    return (
      <div key={index}>
        {/* <h2>{item.protegename}</h2> */}
        <ul>
          <li> {item.description} | $ {item.expenditure}</li>
        </ul>
      </div>
    )
  })
} 

// meals.reduce((totalCalories, meal) => totalCalories + meal.calorie, 0)

// this.state.meals.reduce((accumulator, currentValue)=> accumulator + accumulator, currentValue.calorie,0);

const convertedtoInt = (items) => items.map((item, index) => parseInt(item.expenditure, 10))

const calculateExpenditure = (convertedtoInt) => items.reduce((total, item) => total.expenditure + item.expenditure, 0)

const ProtegeView = (props) => {
  console.log(props)
  return (
    <>
      <h1>Name: {props.protege.protege.protegename}</h1>
      <h2>Items purchased: {renderItems(props.protege.items)}</h2>
      <h2>Total spent: {calculateExpenditure(props.protege.items)}</h2>
      <h2>Balance: {props.protege.protege.balance}</h2>
    </>
  )
}

export default ProtegeView;