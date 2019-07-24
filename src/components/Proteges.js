// Renders a list of all proteges with details, using props passed down through Routes from App.js
import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Table, Container } from 'reactstrap'


const expenditure = (items) => items.reduce((total, item) => total + item.expenditure, 0)
const renderProteges = (protegeData) => {
  return (
    <Container>
      <br></br>
      <br></br>
      <Table bordered hover >
        <thead className="thead-light">
          <tr align="center">
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
              <td>{protege.protege.protegename}</td>
              <td>{protege.protege.protegeemail}</td>
              <td align="right"> $ {expenditure(protege.items)}</td>
              <td align="right"> $ {1000 - expenditure(protege.items)}</td>
              <td align="center">
                <Link to={"/proteges/" + protege.protege._id}>
                  <button className="button1"><FontAwesomeIcon icon={faEdit} background-color="purple" />
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}

const Proteges = (props) => {
  const protegeData = props.proteges
  const displayProteges = renderProteges(protegeData)
  return displayProteges
}

export default Proteges;