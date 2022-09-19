import { Component } from "react";
import React from "react";
import firebaseAuth from "./fire";
import { signOut } from "firebase/auth";

  const Logout = () => {
    console.log("Logging out", this.props);
    // firebaseAuth.signOut();
    signOut(firebaseAuth)
      .then((sucess) => {
        console.log(sucess);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>You are logged in !!!</h1>
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }

export default Logout;
