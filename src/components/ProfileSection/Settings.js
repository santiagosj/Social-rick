import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import {updateProfile} from '../../store/actions/userActions'
 class Settings extends Component {
     
     constructor(){
      super()
      this.state = {
        bio: '',
        city:'',
       // error: null,
        percent: 0, 
        //showProgress: null,
        fileName:'', //url bucket
        userImg:null
      }
     }
    

      componentDidMount(){
        //this.props.getData();
        console.log(this.state)
      }

     // fileInputRef = React.createRef();

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

      handleFile(e){
        e.preventDefault();
        
        let file =  e.target.files[0]

        //let fileName =  e.target.files[0].name

        this.setState({ 
          userImg:file
        });
          console.log(this.state, file)
      }

    render() {
        const { auth , profile } = this.props;
        const { percent } = this.state;
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
                            
                <input type="file" id='img' onChange={(e)=>this.handleFile(e)} />
               
                <progress value={percent} max='100'>{percent} % </progress>
              </div>

              <div className="input-field">
                <button className="btn lighten-1">Update</button>
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
    //  error: state.error,
      percent: state.percent,
     // showProgress: state.showProgress,
      uploadValue: state.uploadValue,
    }
  }
 
  const mapDispatchToProps = dispatch => {
        return {
           updateProfile: (userDetails) => dispatch(updateProfile(userDetails)),
    
        }
}
   
export default connect(mapStateToProps, mapDispatchToProps)(Settings) 