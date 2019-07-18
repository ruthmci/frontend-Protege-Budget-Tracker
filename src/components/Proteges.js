// Renders a list of all proteges with details, using props passed down through Routes from App.js

import React from 'react';
import { Link } from "react-router-dom";

const expenditure = (items) => items.reduce((total, item) => total + item.expenditure, 0)

const renderProteges = (protegeData) => {
  return protegeData.map((protege, index) => {
    return (
      <div className="protegelist" key={index}>
        <h2>{protege.protege.protegename}</h2>
        <ul>
          <li>Email: {protege.protege.protegeemail}</li>
          <li>Expenditure: {expenditure(protege.items)}</li>
          <li>Balance: {1000 - expenditure(protege.items)}</li>
          <li><Link to={"/proteges/"+protege.protege._id}>View/edit</Link></li>
        </ul>
      </div>
    )
  })
}

const Proteges = (props) => {
  const protegeData = props.proteges
  const displayProteges = renderProteges(protegeData)
  return displayProteges
}

export default Proteges;