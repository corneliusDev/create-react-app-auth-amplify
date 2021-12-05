import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import { Auth } from 'aws-amplify';
import { CognitoUserPool, CognitoUserAttribute, CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";


Amplify.configure(aws_exports);

signUp()
ngOnInit()

console.log("Hello Chang")

class App extends Component {
  render() {
    return (
      <div className="App">
        <AmplifySignOut />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

async function signUp() {
  try {
      const { user } = await Auth.signUp({
          username : "hello@jandplabs.com",
          password: "Eternity2@94",
          attributes: {
              email: "hello@jandplabs.com",   // optional - E.164 number convention
              "custom:custom:tenant":"Microsoft"
              // other custom attributes 
          }
      });
      console.log("======"+user);
  } catch (error) {
      console.log('error signing up:', error);
  }
}

const setCognitoUserAttribute = (attributeKey, attributeValue) => {
  let data = {
    Name: attributeKey,
    Value: attributeValue
  };

  return new CognitoUserAttribute(data);
};

async function ngOnInit(){
  Auth.currentAuthenticatedUser().then((user)=>{
        console.log('user = ' + JSON.stringify(user.pool))      
 })
}

export default withAuthenticator(App);
