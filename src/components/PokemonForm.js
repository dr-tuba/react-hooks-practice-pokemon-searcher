import React from "react";
import { Form } from "semantic-ui-react";
import { useState } from 'react';

function PokemonForm({ handleSubmit, handleChange }) {
  
  
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input onChange={handleChange} fluid label="Name" placeholder="Name" name="name" />
          <Form.Input onChange={handleChange} fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            onChange={handleChange}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            onChange={handleChange}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
