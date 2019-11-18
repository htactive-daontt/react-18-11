import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      userId: 0,
      errors: []
    }
  }
  componentDidMount() {
    const axios = require('axios');
    axios.get("http://localhost:3000/user")
      .then(res => {
        const users = res.data;
        this.setState({
          users
        })
      })
  }
  handleInputEvent(event) {
    event.preventDefault();
    const { users } = this.state;
    const email = event.target[0].value;
    const password = event.target[1].value;
    const errors = [];
    let listUser = [...users];
    switch (true) {
      case (email.split("").length === 0):
        errors.push("Empty Email")
        this.setState({
          errors: errors
        })
        break;
      case (password.split("").length === 0):
        errors.push("Empty Password")
        this.setState({
          errors: errors
        })
        break;
      case (listUser.find((user) => user.email === email && user.password === password) !== undefined):
        const userid = listUser.find((user) => user.email === email && user.password === password).id;
        this.setState({
          userId: userid,
          errors: null
        });
        break;
      case (listUser.find((user) => user.email === email) !== undefined && listUser.find((user) => user.password === password) === undefined):
        errors.push("Wrong password")
        this.setState({
          errors: errors
        });
        break;
      case (listUser.find((user) => user.email === email) === undefined):
        errors.push("Wrong Email")
        this.setState({
          errors: errors
        });
        break;
      default:
        return;
    }
  }
  render() {

    return (
      <form className="form-signin">
        <h2 className="form-signin-heading"> Sign in </h2>
        <label for="inputEmail" className="sr-only"> Email address
                </label>
        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />


        <label for="inputPassword" className="sr-only"> Password</label>
        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
        <button className="btn btn-lg btn-primary btn-block" type="submit"> Sign in
                </button>
      </form>
    );
  }
}

export default App;
