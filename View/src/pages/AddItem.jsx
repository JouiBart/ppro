import React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemname: "",
      description: "",
      price_day: "",
      price_hour: "",
      price_month: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    return 1;
  }

  validateConfirmationForm() {
    return 1;
  }

  handleChange = event => {
    this.setState({
      itemname: event.target.itemname,
      description: event.target.description,
      price_day: event.target.price_day,
      price_hour: event.target.price_hour,
      price_month: event.target.price_month
    });
  };

  handleSubmit(event) {
    axios
      .post("http://localhost:8080/item/create", this.state)
      .then(function(response) {
        console.log(response);
        //Perform action based on response
      })
      .catch(function(error) {
        console.log(error);
        //Perform action based on error
      });
    alert("Vasi registraci predmetu : " + this.state.itemname);
    event.preventDefault();
  }

  renderConfirmationForm() {
    return (
      <form onSubmit={this.handleConfirmationSubmit}>
        <h1> Dekujeme za registraci predmetu</h1>
      </form>
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Jmeno:
            <input
              type="text"
              value={this.state.itemname}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Popis:
            <input
              type="text"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Cena za den:
            <input
              type="text"
              value={this.state.price_day}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Cena za hodinu:
            <input
              type="text"
              value={this.state.price_hour}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Cena za mesic:
            <input
              type="text"
              value={this.state.price_month}
              onChange={this.handleChange}
            />
          </label>
        </div>

        <input type="submit" value="Vytvorit" />
      </form>
    );
  }
}

export default AddItem;
