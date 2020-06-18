import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = ({style,classes}) => {
  return (
    <div id={'mobile-demo'}>
      <ul className={classes} id="slide-out" style={style}>
        <li><NavLink to='/signup'>Signup</NavLink></li>
        <li><NavLink to='/signin'>Login</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedOutLinks