import React from 'react'
import './SignUp.css'
import facebookLogo from './../../assets/facebook-logo.png'
import twitterLogo from './../../assets/twitter-logo.png'
import { Link } from '@material-ui/core'

export default function SignUp ({ setFormToRender }) {
  return (
    <div className="signup-wrapper">
      <label>don't have account yet?</label>
      <p>
        <Link href="#" className="register" onClick={event => {
          event.preventDefault()
          setFormToRender('Register')
        }}>
          Register
        </Link>
      </p>
      <label>or sign up using</label>
      <div className="group-images">
        <img className="logo" src={facebookLogo} alt="facebook logo" />
        <img className="logo" src={twitterLogo} alt="twitter logo" />
      </div>
    </div>
  )
}
