import React, {PropTypes} from 'react'
import {Button, Panel} from 'react-bootstrap';


const App = ({onClick, clicks}) => {
    return (
        <Panel header={`clicks: ${clicks}`}>
            <Button bsStyle="danger" onClick={onClick}>Success</Button>
        </Panel>
    );
}





App.propTypes = {
    onClick: PropTypes.func.isRequired,
    clicks: PropTypes.number.isRequired,
};

export default App





