import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import Image from '../Image/Image'
import Logo from '../../assets/logo.png'
import './Navbar.scss'


const Navbar = (props) => {
  
  const { auth, profile} = props;
  // console.log(auth);
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;

  return (
   <div className='navbar-fixed'>

      <nav className="nav-wrapper grey darken-3 ">
        <div className="container">
          <Link to='/' className="brand-logo" >
            <Image imgSrc={Logo} alt='logo' style={{maxWidth: '190px'}} className="logo"/>
          </Link>
          {links}
        </div>
      </nav>
   </div>
    
  )
}

const mapStateToProps = (state) => {
  // console.log(state);
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)

