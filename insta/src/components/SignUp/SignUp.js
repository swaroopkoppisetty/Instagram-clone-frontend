import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'
import { Grid } from '@mui/material';
import logo from '../../images/logoinsta.png';
import fb from '../../images/fb.png';
import appstore from '../../images/app.png';
import playstore from '../../images/play.png';

export default class SignUp extends Component {
  render() {
    return (
      <div>
        <Grid container>
            <Grid item xs={4.5}>
            </Grid>
            <Grid item xs={3}>
             <div className='signUp'>
                <div className='signUp_main'>
                  <img className='signUp_logo' src={logo} alt='logo'/>
                  
                  <div >
                      <h2 className='signUp_logo_down_text' >Sign up to see photos and videos from your friends.</h2>
                  </div>

                  <div>
                    <button className='signUp_button'>
                    
                      <img src ={fb} alt ='fb logo' width = '15px' style={{"marginRight":"7px"}}/>
                      Log in with Facebook
                    </button>
                  </div>

                  <div className='signUp_or_div'>
                      <div className='signUp_or_dividor'></div>
                      <div className='signUp_or'>OR</div>
                      <div className='signUp_or_dividor'></div>
                    </div>
                  
                  <div className='signUp_form'>
                  
                    <input className='signUp_text' type= "text" placeholder='Mobile Number or Email'/>
                    <input className='signUp_text' type= "text" placeholder='Full Name'/>
                    <input className='signUp_text' type= "text" placeholder='UserName'/>
                    <input className='signUp_text' type= "password" placeholder='Password'/>
                    <button className='signUp_button'>Sign Up</button>

                  </div>

                  <div>
                    <p className='signUp_policy_text'> By signing up, you agree to our Terms , Data Policy and Cookies Policy .</p>
                  </div>

                  <div className='logIn_section'>
                   
                    <div className='signUp_login'>
                      Have an account?  
                      <Link style={{ textDecoration: 'none', color: 'white' }} to = {'/'} >
                          <span style={{"fontWeight": "bold", "color": "#0395F6"}}> Log in </span>
                      </Link>
                      
                    </div>
                </div>

                <div className='signUp_app'>
                    <div>
                      Get the app.
                    </div>

                    <div className='signUp_option'>
                      <img className='signUp_img' src={appstore} alt = 'appstore' width ='136px' />
                      <img className='signUp_img' src={playstore} alt = 'playstore' width ='136px' />
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
