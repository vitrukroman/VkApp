import React, {PropTypes} from 'react';
import {Grid, Col, Row} from 'react-bootstrap';


const Layout = () => {
  return (
    <Grid>
      <Row>
        <Col md={3}>
          <Row>Photo</Row>
          <Row>Menu</Row>
        </Col>

        <Col md={9}>
          Content
        </Col>
      </Row>
    </Grid>
  );
};


export default Layout;





