import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import {updateProfile} from '../../store/actions/userActions'


 class Settings extends Component {

    state = {
        bio: '',
        img: '',
        city:''
      }

      handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
      }

      handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.updateProfile(this.state);
        this.props.history.push('/');
      }

      /*handleFile = (e) =>{
        const file = e.target.files[0]
      }*/
      
    render() {
        const { auth , profile } = this.props;
      //  console.log(profile)
        if (!auth.uid) return <Redirect to='/signin' /> 
        return (
            <div className="container">
            <form className="create-post-form" onSubmit={this.handleSubmit}>

              <h5 className="grey-text text-darken-3">Update your profile {profile.firstName}</h5>

              <div className="input-field">
                <input type="text" id='city' onChange={this.handleChange} />
                <label htmlFor="city">your city...</label>
              </div>

              <div className="input-field">
                <textarea id="bio" className="materialize-textarea" onChange={this.handleChange}></textarea>
                <label htmlFor="bio">your bio...</label>
              </div>

              <div className="input-field">
                <input type="file" id='img' onChange={this.handleChange} />
                
              </div>

              <div className="input-field">
                <button className="btn pink lighten-1">Update</button>
              </div>

            </form>
          </div>
        )
    }
}

const mapStateToProps = (state) => {
   console.log(state)
    return {
      auth: state.firebase.auth,
      profile: state.firebase.profile,
    }
  }
 
  const mapDispatchToProps = dispatch => {
        return {
        updateProfile: (userDetails) => dispatch(updateProfile(userDetails))
  }
}
   
export default connect(mapStateToProps, mapDispatchToProps)(Settings) 