import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Fab from "@mui/material/Fab";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import firebaseAuth from "../Firebase/fire";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: "",
      password: "",
    };
  }

  login(e) {
    //e.preventDefault();

    signInWithEmailAndPassword(
      firebaseAuth,
      this.state.email,
      this.state.password
    )
      .then((u) => {
        console.log(u);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  signup(e) {
    // e.preventDefault();

    createUserWithEmailAndPassword(
      firebaseAuth,
      this.state.email,
      this.state.password
    )
      .then((u) => {
        console.log(u);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  render() {
    return (
      <div className="page">
        {/* <form> */}

        <div className="container">
          <div class="overlay">
            <div class="text"></div>
            <h1>Zelar practise</h1>
            <input
              className="input1"
              name="email"
              type="email"
              id="email"
              placeholder="enter email adress"
              onChange={this.handleChange}
              value={this.state.email}
            />
            <br></br>

            <input
              className="input2"
              name="password"
              type="password"
              id="password"
              placeholder="enter password"
              onChange={this.handleChange}
              value={this.state.password}
            />
            <div className="btn">
              <button onClick={this.login}>LogIn</button>
            </div>
            {/* </form> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
