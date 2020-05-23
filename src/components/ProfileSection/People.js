import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import ProfileList from './ProfileList'

class People extends Component {
    render() {
        const { auth, users } = this.props;
        if (!auth.uid) return <Redirect to='/signin' /> 
    
        return (
            <div className="container">
                <h1>People</h1>
                <ProfileList users={users}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state.firestore.ordered.users)
    return {
      users:state.firestore.ordered.users,
      auth: state.firebase.auth
    }
  }

export default compose(connect(mapStateToProps),
 firestoreConnect([{
     collection:'users'
 }])
)(People)