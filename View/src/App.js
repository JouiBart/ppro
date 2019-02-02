import React, { Component } from "react";
import { Redirect, Link, Route, Switch } from "react-router-dom";
import Register from "./pages/Register";
import Items from "./pages/Items2";
import AddItem from "./pages/AddItem";
import Login, { fakeAuth } from "./pages/Login";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar">
          <ul className="nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/items">Items</Link>
            </li>
            <li>
              <Link to="/additem">Add Item</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <PrivateRoute path="/additem" component={AddItem} />
          <Route path="/items" component={Items} />
        </Switch>
      </div>
    );
  }
}

//Private router function
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

//Home component
const Home = props => (
  <div>
    <h2>Home {console.log(props)}</h2>
  </div>
);

export default App;
