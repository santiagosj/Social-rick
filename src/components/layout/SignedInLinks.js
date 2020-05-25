import React,{Fragment, useState} from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import './Navbar.scss'


const SignedInLinks = (props) => {
  const [active, setActive] = useState(false)
  
  //Hacer con Redux
  const handleMenuToggle = () => setActive(!active)

  const {signOut} = props
  
  return (
    <Fragment>
       <div className={`Nav right`} onClick={handleMenuToggle} >
          <div  className="Image--container">
              <NavLink to='#' className={ `btn btn-floating pink lighten-1 ` } title='My Profile'>
                {props.profile.initials}
              </NavLink>
          </div>
          <div className={`${active ? 'Nav-active' : 'Nav-inactive'}`}>
              <NavLink to={`/people/`+ props.profile.slug } className={'nav-item'}> My Profile </NavLink>
              <NavLink to={`/settings/`} className={'nav-item'}> Settings </NavLink>
              <button onClick={signOut} className={'nav-item'}>Log Out</button>
          </div>
        </div>
      <ul className="right">
        <li><NavLink to='/create'>New Post</NavLink></li>
        <li><NavLink to='/people'>People</NavLink></li>
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

