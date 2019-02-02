import React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
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
    //alert("Vasi registraci vyrizujeme : " + this.state.email);
    this.setState({
      telephone: event.target.telephone,
      surname: event.target.surname,
      password: event.target.password,
      email: event.target.email,
      firstname: event.target.firstname
    });
  };

  handleSubmit(event) {
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
              value={this.state.firstname}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Surname:
            <input
              type="text"
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
