import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'
import Profile from './Profile'

 const ProfileDetail = (props) => {

        const {user, auth} = props;     

        if (!auth.uid) return <Redirect to='/signin' /> 
        if(user){
            return (
                <section className='container'>
                    <div>
                       <Profile user={user}/> 
                    </div> 
                </section>
            )
        }else{
            return (
                <div  className="container center">
                   <p>Loading profile...</p>
                </div>
            )
        }
          
}


const mapStateToProps = (state, ownProps) => {
    
    const id = ownProps.match.params.id;
    const users = state.firestore.data.users;
    const user = users ? users[id] : null
    console.log(id)
    return {
      user : user,
      auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{collection:'users'}]) 
) (ProfileDetail)
