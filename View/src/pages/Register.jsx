import React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      email: "",
      password: "",
      telephone: "",
      isdeleted: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  validateConfirmationForm() {
    return this.state.confirmationCode.length > 0;
  }

  handleChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const inputname = target.name;

    this.setState({
      [inputname]: value
    });
  };

  handleSubmit(event) {
    console.log(this.state);
    axios
      .post("http://localhost:8080/user/register", this.state)
      .then(function(response) {
        console.log(response);
        //Perform action based on response
      })
      .catch(function(error) {
        console.log(error);
        alert(
          "Bohuzel se nepovedlo prihlasit (spatne heslo nebo jmeno) : " +
            this.state.telephone
        );
      });

    event.preventDefault();
  }

  renderConfirmationForm() {
    return (
      <form onSubmit={this.handleConfirmationSubmit}>
        <h1> Dekujeme za vasi registraci</h1>
      </form>
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Name:
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
            Surname:
            <input
              type="text"
              name = "surname"
              value={this.state.surname}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name = "email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              name = "password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Telephone:
            <input
              type="text"
              name = "telephone"
              value={this.state.telephone}
              onChange={this.handleChange}
            />
          </label>
        </div>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Register;
