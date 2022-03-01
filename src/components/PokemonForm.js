import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onAddItem }) {
  //set newForm
  const [newForm, setNewForm] = useState({
    name: "",
    hp: "",
    sprites: {
      front: "",
      back: "",
    },
  });

  // onChange handler
  const onChangeHandler = (event) => {
    if (event.target.name === "back" || event.target.name === "front") {
      setNewForm({
        ...newForm,
        ["sprites"]: {
          ...newForm.sprites,
          [event.target.name]: event.target.value,
        },
      });
    } else {
      setNewForm({
        ...newForm,
        [event.target.name]: event.target.value,
      });
    }
  };
  console.log(newForm);
  const onSubmitHandler = (event) => {
    event.preventDefault();
    fetch("http://localhost:3001/pokemon", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newForm),
    })
      .then((response) => response.json())
      .then((data) => {
        onAddItem(data);
      });
  };

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={onSubmitHandler}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            placeholder="Name"
            name="name"
            onChange={onChangeHandler}
          />
          <Form.Input
            fluid
            label="hp"
            placeholder="hp"
            name="hp"
            onChange={onChangeHandler}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="front"
            onChange={onChangeHandler}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="back"
            onChange={onChangeHandler}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
