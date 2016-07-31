import React, {Component} from 'react';
import {Grid, Col, Row, Image, Nav, NavItem} from 'react-bootstrap';


class Layout extends Component {
  componentDidMount() {
    this.props.get_user();
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col md={3}>
            <Row>
              <Image src={this.props.photo_url} rounded/>
            </Row>
            <Row>
              <Nav bsStyle="pills" stacked activeKey={1}>
                <NavItem eventKey={1} href="/home">Домашня сторінка</NavItem>
                <NavItem eventKey={2} title="Item">Пошук</NavItem>
              </Nav>
            </Row>
          </Col>

          <Col md={9}>
            Content
          </Col>
        </Row>
      </Grid>
    );
  }
};

export default Layout;





