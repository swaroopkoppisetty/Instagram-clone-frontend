import React, { Component } from 'react';
import './Signin.css';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import logo from '../../images/logoinsta.png';
import fb from '../../images/fb.png';
import appstore from '../../images/app.png';
import playstore from '../../images/play.png';

export default class SignIn extends Component {
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

                  <div className='signup_section'>
                    <div className='signup'>
                      Don't have an account?
                      <Link style={{ textDecoration: 'none', color: 'white' }} to = {'/signup'} >
                          <span style={{"fontWeight": "bold", "color": "#0395F6"}}> Sign up </span> 
                      </Link> 
                       
                    </div>
                </div>

                <div className='app'>
                    <div>
                      Get the app.
                    </div>

                    <div className='option'>
                      <img className='img' src={appstore} alt = 'appstore' width ='136px' />
                      <img className='img' src={playstore} alt = 'playstore' width ='136px' />
                    </div>
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
