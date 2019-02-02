import React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
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
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit(event) {
    axios
      .post("http://localhost:8080/item/create", this.state)
      .then(function(response) {
        console.log(response);
        alert("Vasi predmet byl pridan");
      })
      .catch(function(error) {
        console.log(error);
        alert("Nepodarilo se pridat predmet");
      });
    
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
              name = "name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Popis:
            <input
              type="text"
              name = "description"
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
              name = "price_day"
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
              name = "price_hour"
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
              name = "price_month"
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
