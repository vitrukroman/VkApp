import React, {Component} from 'react';
import {FormGroup, FormControl, Button} from 'react-bootstrap';

class Search extends Component {
  render() {
    return (
      <FormGroup controlId='searchQuery'>
        <FormControl inline/>
        <Button bsStyle="primary" inline>Пошук</Button>
      </FormGroup>
    );
  }
}

export default Search;





