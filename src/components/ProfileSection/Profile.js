import React from 'react'
import Image from '../Image/Image'
import userDefaultImg from  '../../assets/images.png'
import './Profile.scss'
//Esquema profile

const imgStyles = {
    maxWidth: '200px',
    borderRadius: '50%',
    margin:'auto',
    float:'right'
}

const Profile = ({user}) => {
   
    return (
          <div className='container'>
              <h1>{user.firstName} {user.lastName}</h1>
              <Image imgSrc={ user.userImg ? user.userImg : userDefaultImg} style={imgStyles} alt={ `${user.firstName} image`}/>

              { user.bio ? (<p>{user.bio}</p>) : (<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus non dui laoreet feugiat. Pellentesque consequat volutpat odio vitae vestibulum. In hac habitasse platea dictumst. Sed ut vestibulum ante, et sagittis dui. Aenean tortor nunc, interdum ut fermentum sit amet, aliquet eu leo. Vivamus ullamcorper viverra purus, sit amet ultrices nulla. Donec non purus non ante tempor sollicitudin viverra quis arcu.</p>)}
              <h3>Datos Básicos</h3>
              <p>City: {user.city}</p>
          </div>
    )
}

export default Profile
