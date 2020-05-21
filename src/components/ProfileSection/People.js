import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class People extends Component {
    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' /> 
        return (
            <div>
                <h1>People</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth
    }
  }

export default connect(mapStateToProps,null)(People)