import "./registerproperty.css"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React from 'react';
import { MDBFile } from 'mdb-react-ui-kit';
import { ReactDOM } from "react";

function Registerproperty() {
  return (
    <Form>
      <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Label>Name of the Property</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Select className="mb-4" aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">Hostel</option>
      <option value="2">Gym</option>
      <option value="3">Mess</option>
    </Form.Select>
    <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Row className="mb-4">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <div>
      <MDBFile label='Default file input example' id='customFile' />
    </div>
    <Form.Group className="mb-4">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      
    </Form>
  );
}

export default Registerproperty;