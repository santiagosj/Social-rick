import React from 'react'
import ProfileCard from './ProfileCard'


const ProfileList = ({users}) => {
  return (
    <div className="project-list section row">
      { users && users.map(user => {
        return (
           
            <ProfileCard user={user} />
            
        )
      })}  
    </div>
  )
}

export default ProfileList
