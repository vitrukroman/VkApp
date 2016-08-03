import React, {Component} from 'react';
import {
  FormGroup, FormControl, Button, Form,
  Grid, Row, Col, ControlLabel
} from 'react-bootstrap';

class Search extends Component {
  render() {
    return (
      <Form>
        <FormGroup controlId='searchQuery' inline>
          <FormControl inline/>
          <Button bsStyle="primary">Пошук</Button>
            <Row>
              <Col md={6}>Знайдені</Col>
              <Col md={6}>

                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    Email
                  </Col>
                  <Col sm={10}>
                    <FormControl type="email" placeholder="Email" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                  <Col componentClass={ControlLabel} sm={2}>
                    Password
                  </Col>
                  <Col sm={10}>
                    <FormControl type="password" placeholder="Password" />
                  </Col>
                </FormGroup>
              </Col>
            </Row>
        </FormGroup>

      </Form>
    );
  }
}

export default Search;





