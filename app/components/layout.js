import React, {Component} from 'react';
import {Grid, Col, Row, Image, Nav, NavItem} from 'react-bootstrap';
import {IndexLinkContainer} from 'react-router-bootstrap';

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
                <IndexLinkContainer to="/">
                  <NavItem>Домашня сторінка</NavItem>
                </IndexLinkContainer>

                <IndexLinkContainer to="/search">
                  <NavItem>Пошук</NavItem>
                </IndexLinkContainer>
              </Nav>
            </Row>
          </Col>

          <Col md={9}>
            {this.props.children}
          </Col>
        </Row>
      </Grid>
    );
  }
}
;

export default Layout;





