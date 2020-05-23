import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ProfileDetail from './ProfileDetail'
import People from './People'

const ProfileRouter = () => {
    return (
        <Switch>
            <Route exact path='/people' component={People}/>
            <Route path='/people/:id' component={ProfileDetail}/>
        </Switch>
    )
}

export default ProfileRouter
