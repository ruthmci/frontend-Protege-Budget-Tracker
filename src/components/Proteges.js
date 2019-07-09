import React from 'react';


const renderProteges = (proteges) => {
  return proteges.map((protege, index) => {
    return (
      <div key={index}>
        <h1>{protege.name}</h1>
        <ul>
          <li>{protege.expenditure}</li>
          <li>{protege.balance}</li>
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