import React, { Component } from 'react';
import './LoginPage.css';
import { Grid } from '@mui/material';
import logo from '../../images/logoinsta.png';
import fb from '../../images/fb.png';

export default class LoginPage extends Component {
  render() {
    return (
      <div>
        <Grid container>
            <Grid item xs={4.5}>
            </Grid>
            <Grid item xs={3}>
             <div className='loginPage'>
                <div className='main'>
                  <img className='logo' src={logo} alt='logo'/>
                  <div className='signIn'>
                    <input className='text' type= "text" placeholder='Phone number, username, or email'/>
                    <input className='text' type= "password" placeholder='Password'/>
                    <button className='button'>Log In</button>
                    <div className='or_div'>
                      <div className='or_dividor'></div>
                      <div className='or'>OR</div>
                      <div className='or_dividor'></div>
                    </div>

                    <div className='fb'>
                      <img src ={fb} alt ='fb logo' width = '15px' style={{"marginRight":"7px"}}/>
                      Log in with Facebook</div>
                    <div className='forgot'>Forgot Password?</div>

                  </div>
                </div>
             </div>
            </Grid>
            <Grid item xs={4.5}>
            </Grid>
        </Grid>
      </div>
    )
  }
}
