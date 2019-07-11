import React from 'react';
import { Link} from "react-router-dom";

const renderProteges = (proteges) => {
  return proteges.map((protege, index) => {
    return (
      <div key={index}>
        <h2>{protege.protegename}</h2>
        <ul>
          <li>Email: {protege.protegeemail}</li>
          <li>Expenditure: {protege.expenditure}</li>
          <li>Balance: {protege.balance}</li>
          <li><Link to={"/proteges/"+protege._id}>View/edit</Link></li>
        </ul>
      </div>
    )
  })
}

const Proteges = (props) => {
  const displayProteges = renderProteges(props.proteges)
  return displayProteges
}

export default Proteges;