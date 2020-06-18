import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import useWindowSize from './navbarHooks'
import Image from '../Image/Image'
import Logo from '../../assets/logo.png'
import './Navbar.scss'


const Navbar = (props) => {
  
  const { auth, profile} = props;
 
  const [slider, setSlider] = useState(false);

  const size = useWindowSize();

  const links = auth.uid ? <SignedInLinks 
                               profile={profile} 
                               style={ {transform: slider || size.width > 980 ? "translateX(0%)" : "",
                               transitionProperty: "transform",
                               transitionDuration: ".25s"} }
                               classes={size.width > 980 ? 'right' : 'sidenav'}
                           /> : 
                           <SignedOutLinks 
                              style={ {transform: slider || size.width > 980 ? "translateX(0%)" : "",
                              transitionProperty: "transform",
                              transitionDuration: ".25s"} }
                              classes={size.width > 980 ? 'right' : 'sidenav'}
                           />;

  return (
   <div className='navbar-fixed'>

      <nav className="nav-wrapper grey darken-3 ">

        <div className="container">
          <Link to='/' className="brand-logo" >
            <Image imgSrc={Logo} alt='logo' style={{maxWidth: '190px'}} className="logo"/>
          </Link>
              <a 
                  href="#" 
                  data-target="mobile-demo" 
                  className="sidenav-trigger"
                  onClick={() => setSlider(s => !s)}
              >
                <i className="material-icons">menu</i>
              </a>
          <div 
            id={'mobile-demo'} 
            onClick={() => setSlider(s => !s)}   
            style={{
              display: slider && size.width < 980 ? "block" : "none",
              opacity: "1"
            }}
          >
             {links}
          </div>

          <div 
             style={{
                display: size.width > 980 ? "block" : "none",
                opacity: "1"
             }}
          >
              {links}
          </div>
          
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

