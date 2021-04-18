import React, { useEffect } from "react";
import { axiosWithAuth } from '../helpers/axiosWithAuth';


class Login extends React.Component {
  state = {
    error: "",
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    axiosWithAuth().post("/login", this.state.credentials)
      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.payload);
        console.log(this.props)
        this.props.history.push('/')
      })
      .catch(err => console.error('unable to login: ', err))
      this.setState({
        error: "Username or Password not valid"
      })
  };
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  //useEffect(()=>{
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route
 // });
  //replace with error state

  render() {
  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <div>
          <form onSubmit={this.login}>
            <input
              type="text"
              name="username"
              data-testid="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="password"
              data-testid="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
            <button>Log in</button>
          </form>
        </div>
      </div>

      <p data-testid="errorMessage" className="error">{this.state.error}</p>
    </div>
  );
  }
};

export default Login;

//Task List:
//1. Build a form containing a username and password field. X
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.