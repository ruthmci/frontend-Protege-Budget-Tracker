import React from 'react';
import { Link} from "react-router-dom";

const expenditure = (protege, items) => {
  const foundItems = items.filter(item => item.protege_id === protege._id)
  console.log(foundItems)
  const calculateExpenditure = (foundItems) => foundItems.reduce((total, item) => total + item.expenditure, 0)
  const calculatedExpenditure = calculateExpenditure(foundItems)
  console.log(calculatedExpenditure)
  return calculatedExpenditure
}

const renderProteges = (proteges, items) => {
  return proteges.map((protege, index) => {
    return (
      <div key={index}>
        <h2>{protege.protegename}</h2>
        <ul>
          <li>Email: {protege.protegeemail}</li>
          <li>Expenditure: {expenditure(protege, items)}</li>
          <li>Balance: {1000 - expenditure(protege, items)}</li>
          <li><Link to={"/proteges/"+protege._id}>View/edit</Link></li>
        </ul>
      </div>
    )
  })
}

const Proteges = (props) => {
  console.log(props)

  const displayProteges = renderProteges(props.proteges, props.items)
  return displayProteges
}

export default Proteges;