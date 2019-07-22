// Renders a list of all proteges with details, using props passed down through Routes from App.js

import React from 'react';
import { Link } from "react-router-dom";
import './table.css'
import {Table} from 'reactstrap'

const expenditure = (items) => items.reduce((total, item) => total + item.expenditure, 0)

const renderProteges = (protegeData) => {
  // return protegeData.map((protege, index) => {
    return (
      <Table className="table">
       <thead className="thead-light">
            <tr>
              <th>Protege Name</th>
              <th>ProtegeEmail</th>
              <th>Expenditure</th>
              <th>Balance</th>
              <th>Actions</th>
            </tr>
          </thead>
      <tbody>
      {protegeData.map((protege, index) => (
        <tr>
          {/* <div className="protegelist" key={index}> */}
            <td>{protege.protege.protegename}</td>
              <td>{protege.protege.protegeemail}</td>
              <td>{expenditure(protege.items)}</td>
              <td>{1000 - expenditure(protege.items)}</td>
              <td>
              <Link to={"/proteges/"+protege.protege._id}>
              <button className="button1">Edit 
              </button></Link>
            </td>
          {/* </div> */}
        </tr>
      ))}
        
      </tbody>
      </Table>
    )
  // })
}

const Proteges = (props) => {
  const protegeData = props.proteges
  const displayProteges = renderProteges(protegeData)
  return displayProteges
}


export default Proteges;