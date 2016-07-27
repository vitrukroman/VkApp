import React, {PropTypes} from 'react'
import {Panel} from 'react-bootstrap';
import Layout from './layout';


const App = ({onClick, clicks}) => {
    return (
      <Layout></Layout>
    );
};





App.propTypes = {
    onClick: PropTypes.func.isRequired,
    clicks: PropTypes.number.isRequired
};

export default App





