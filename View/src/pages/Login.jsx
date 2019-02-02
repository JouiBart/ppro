import React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      redirectToReferrer: false
    };
    this.login = this.login.bind(this);

    this.state = {
      password: '',
      email: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
     
  };

  handleSubmit(event) {
    console.log(this.state);
    axios
      .post("http://localhost:8080/user/login", this.state)
      .then(function(response) {
        console.log(response.data);
        if (response.data.id > 0) {
          this.login(); 
        } else {
          alert(
            "Bohuzel se nepovedlo prihlasit (spatne heslo nebo jmeno) : "
          );
        }
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

  login() {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Heslo:
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </label>
          </div>

          <input type="submit" value="Prihlasit" />
        </form>
      </div>
    );
  }
}

/* A fake authentication function */

export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  }
};

export default Login;
