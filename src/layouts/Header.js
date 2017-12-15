import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import AppBar from 'material-ui/AppBar';
import { Grid, Row, Col } from 'react-flexbox-grid'
import FlatButton from 'material-ui/FlatButton';
import './index.css';

const mystyles = {
  main: {
    margin: '0 auto',
    maxWidth: 960,
    height: 300,
    padding: '1.45rem 1.0875rem',
  },
  h1: {
    margin: 0
  },
  a: {
    textDecoration: 'none',
    color: 'black'
  },
  Link: {
    color: 'white',
    fontSize: '70px',
    textDecoration: 'none'
  },
  text: {
    color: 'white',
  },
  img: {
    width: '100%',
    height: 'auto'
  },


}

const Header = () => (
  <div className="header" >
    <div style={mystyles.main}>
    <Grid>
      <Row>
        <Col xs={12} sm={12} mdOffset={6} md={6} lgOffset={6} lg={6} >
          <h1 className="myheading">
            <Link to="/" style={mystyles.Link} >
              I Shall Be
            </Link>
          </h1>
        </Col>
        <Col xs={6} sm={4} md={4} lg={4}>
          <div style={mystyles.img}>
          
          </div>
        </Col>
        </Row>
        <Row>
        <Col xs={12} sm={12} mdOffset={6} md={6} lgOffset={6} lg={6}>
          <div style={mystyles.text} >
            <h4 className="myheading" >Regina Jonas (1902-1944)</h4>
           
          </div>
        </Col>
        </Row>
      </Grid>
    </div>
  </div>
)

export default Header;
