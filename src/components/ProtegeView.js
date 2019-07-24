// This component contains the functions responsible for rendering the 'View protege' page

import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'
import './Buttons.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Table, Container, Row, Col } from 'reactstrap'
import { continueStatement } from '@babel/types';


// Renders the purchased items as a list. Called in the ProtegeView function below.

const renderItems = (items) => {
  // const buttonStyle = { backgroundColor: 'yellow' }
  // return items.map((item, index) => {
  return (
    <Col sm="12" md={{ size: 10, offset: 1 }}>
      <Table bordered hover >
        <thead className="thead-light">
          <tr align="center">
            <th>Purchased Item</th>
            <th>Expenditure</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <>
              <tr>
                <td>{item.description} </td>
                <td align="right"> $ {item.expenditure}</td>
                <td align="center"><Link to={{
                  pathname: "/edit",
                  state: {
                    item,
                  }
                }}>
                  <button className="button1">
                    <FontAwesomeIcon icon={faEdit} background-color="purple" />
                  </button>
                </Link> &nbsp;&nbsp;&nbsp;
                  <Link to={{
                    pathname: "/delete",
                    state: {
                      item,
                    }
                  }}>
                    <button className="button1"><FontAwesomeIcon icon={faTrash} /></button>
                  </Link></td>
              </tr>
            </>
          ))
          }
          <tr>
            <td></td>
            <td align="right"><b>Total:</b>&nbsp;&nbsp;&nbsp; $ {calculateExpenditure(items)}</td>
            {/* {checkExpenditure(protege, items)} */}
          </tr>
          <tr>
            <td></td>
            <td align="right"><b>Balance:</b>&nbsp;&nbsp;&nbsp; $ {1000 - calculateExpenditure(items)}</td>
          </tr>
        </tbody>
      </Table>
    </Col>
  )
}


// This function calculates the total Expenditure by adding the expenditure of each item. Called in the ProtegeView function below
const calculateExpenditure = (items) => items.reduce((total, item) => total + item.expenditure, 0)

// Checks the protege isn't over their limit
const checkExpenditure = (protege, items) => {
  if (calculateExpenditure(items) >= 1000) {
    return <p>Protege has reached their limit</p>
  } else
    return (<p><Link to={{
      pathname: `/create/${protege._id}`,
    }}>
      <button className="button1">
        Add Item <FontAwesomeIcon icon={faPlus} />
      </button>
    </Link></p>
    )
}

// This function validates the protege has no purchases before deleting the protege
const deleteProtege = (e, protege, items) => {
  e.preventDefault();
  console.log(protege)
  console.log(items)
  if (items.length !== 0) {
    return window.alert('Please delete all items before you delete the protege')
  } else {
    axios.delete(`${process.env.REACT_APP_BACKEND_URL}/proteges/${protege._id}`)
      .then(res => {
        console.log(res)
        if (res.status === 200) {
          window.location = '/';
        }
      })
  }
}

// Renders a page with one protege's details, using props passed down to it from the GetProtegeData component. This function calls the renderItems and the calculateExpenditure Functions
// It also calls the deleteProtege function on click

const ProtegeView = (props) => {
  const { protege, items } = props.protege

  return (
    <Container>
      <br></br>
      <br></br>
      <Col>
      <p><b>Name:</b> {protege.protegename}</p>
      <p><b>Email:</b> {protege.protegeemail}</p>
      </Col>
      <p>{renderItems(items)}</p>

      {checkExpenditure(protege, items)}
      
      <Row>
        <Col>
          <Link to={{
            pathname: '/'
          }}>
            <button className="button1">
              <FontAwesomeIcon icon={faChevronLeft} /> Back
          </button>
          </Link> &nbsp;&nbsp;&nbsp;
          </Col>
        <Col xs="6" align="center">
          <Link to={{
            pathname: `/editprotege/${protege._id}`
          }}>
            <button className="button1">
              Edit Protege <FontAwesomeIcon icon={faUserEdit} />
            </button>
          </Link> &nbsp;&nbsp;&nbsp;
          <button className="button2" type="submit" onClick={e => { if (window.confirm('Are you sure you want to delete protege')) deleteProtege(e, protege, items) }}>
            Delete Protege <FontAwesomeIcon icon={faTrash} />
          </button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProtegeView;