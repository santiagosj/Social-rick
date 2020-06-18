import React,{Fragment, useState} from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import './Navbar.scss'

//import { ReactComponent as CogIcon } from '../../assets/icons/cog.svg';

const SignedInLinks = (props) => {
  const [active, setActive] = useState(false)
  
  //Hacer con Redux
  const handleMenuToggle = () => setActive(!active)

  const {signOut} = props
  
  return (
    <Fragment>

      {props.classes === 'right' && <div className={`Nav right`} onClick={handleMenuToggle}  >

          <div  className="Image--container">
              <NavLink to='#' className={ `btn btn-floating pink lighten-1 ` } title='My Profile'>
                {props.profile.initials}
              </NavLink>
          </div>

          <div className={`${active ? 'Nav-active' : 'Nav-inactive'}`}>
              <NavLink to={`/people/`+ props.profile.slug } className={'nav-item'}> My Profile </NavLink>
              <NavLink to={`/settings/`} className={'nav-item'}>  Settings </NavLink>
              <button onClick={signOut} className={'nav-item'}>Log Out</button>
          </div>

        </div> }

      <ul className={props.classes}  id="slide-out" style={props.style}>
        <li><NavLink to='/create'>New Post</NavLink></li>
        <li><NavLink to='/people'>People</NavLink></li>

         {props.classes === 'sidenav' &&  <>
              <li><NavLink to={`/people/`+ props.profile.slug } className={'nav-item'}> My Profile </NavLink> </li> 
              <li> <NavLink to={`/settings/`} className={'nav-item'}>  Settings </NavLink></li> 
              <li><button onClick={signOut} className={'nav-item'}>Log Out</button> </li> </>
        }
      </ul>
      
    </Fragment>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)

