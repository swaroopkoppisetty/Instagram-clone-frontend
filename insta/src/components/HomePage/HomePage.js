import React, { Component } from 'react';
import SignIn from '../SignIn/SignIn.js';
import SignUp from '../SignUp/SignUp.js';
import './HomePage.css';


export default class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLogin : true
    }
  }
  render() {
    return (
      <div>
          {
            this.state.isLogin ? <SignIn/> : <SignUp/>
          }
      </div>
    )
  }
}
