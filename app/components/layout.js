import React, {PropTypes} from 'react';
import {Grid, Col, Row, Image} from 'react-bootstrap';


const Layout = () => {
  return (
    <Grid>
      <Row>
        <Col md={3}>
          <Row>
            <Image src="http://cs631329.vk.me/v631329286/23f6d/yV0LrfbdgWk.jpg" rounded />
          </Row>
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





