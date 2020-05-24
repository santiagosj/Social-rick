import React from 'react'
import ProfileCard from './ProfileCard'


const ProfileList = ({users}) => {
  return (
    <div className="project-list section row">
      { users && users.map(user => {
        return (
           
            <ProfileCard user={user} key={user.slug}/>
            
        )
      })}  
    </div>
  )
}

export default ProfileList
