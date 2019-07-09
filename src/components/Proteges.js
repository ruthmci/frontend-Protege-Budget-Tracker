import React from 'react';


const renderProteges = (proteges) => {
  return proteges.map((protege, index) => {
    return (
      <div key={index}>
        <h1>{protege.protegename}</h1>
        <ul>
          <li>Expenditure: {protege.expenditure}</li>
          <li>Balance: {protege.balance}</li>
          <li>View/edit</li>
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