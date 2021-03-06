import React from 'react'
import Image from '../Image/Image'
import { connect } from 'react-redux'
import userDefaultImg from  '../../assets/images.png'
import { Link } from 'react-router-dom'
import './Profile.scss'

const imgStyles = {
    width: 'auto',
    height:'219px',
    margin:'auto'
}
const ProfileCard = ({user, auth}) => {
    return (

           user.slug !== auth.uid &&

             <div className="col s12 m4" key={user.slug}>

                <div className="card my-class-card">
               
                <div className="card-image profile-card">
                   <Image imgSrc={user.userImg ? user.userImg : userDefaultImg} style={imgStyles} alt={ `${user.firstName} image` }/>
                   <span className="card-title title">{user.firstName} {user.lastName}</span>
                </div>
                    
                    <div className="card-content">
                       <p>Hola soy {user.firstName}</p>
                    </div>
                    
                    <div className="card-action">
                        <Link to={'/people/' + user.id} key={user.id}>
                             check profile
                        </Link>
                    </div>
            
                </div>
            
             </div>
       
    )
}

const mapStateToProps = (state) => {
    return {
        auth:state.firebase.auth
    }
}

export default connect(mapStateToProps,null)(ProfileCard)
