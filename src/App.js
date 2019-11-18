import React, { Component } from 'react';
import './App.css';
function Showlogin(props) {
  return (
    <>
      <h1>{props.message}</h1>
    </>
  )
}


export default class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      showMessage : false,
      email: "",
      password: "",
      users: [
        {
          email: "dao@gmail.com",
          password: '1234'
        },
        {
          email: 'dao1@gmai.com',
          password: '1224'
        },
        {
          email: 'dao2@gmail.com',
          password: '12345'
        }
      ]
    };
  }
  onHandleSubmit(e) {
    e.preventDefault();
    let Success = this.state.users.find(user =>
      user.email === e.target[0].value && user.password === e.target[1].value)
    if (Success) {
      alert('Đăng Nhập Thành Công')
      this.setState({
        errors: "Xin chào bạn",
        showMessage: true,
      })
    } else {
      alert('Đăng Nhập Thất Bại')
    }
  }


  render() {
    const { showMessage, errors, users } = this.state
    return (
      <div className="App">
        {showMessage ? <Showlogin message={errors} data={users} showMessage={showMessage} /> :
          <form className="form-signin" onSubmit={(e) => this.onHandleSubmit(e)}>
            {/* onSubmit={this.onHandleSubmit} */}
            <h1>ĐĂNG NHẬP</h1>
            <label htmlFor="email">Email</label>
            <input name="email" type="text" placeholder="Enter your email" required />
            <br></br>
            <label htmlFor="email">Password</label>
            <input name="password" type="password" placeholder="Enter your password" required />
            <span style={{ color: 'red' }} >{this.state.errors}</span>
            <br></br>
            <button className="btn" type="submit">Login</button>
          </form>
        }
      </div>
    )
  }
}

