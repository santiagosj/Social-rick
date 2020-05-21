import React from 'react'
import { Switch, Route } from 'react-router-dom'
//components
import Dashboard from '../dashboard/Dashboard'
import ProjectDetails from '../projects/ProjectDetails'
import SignIn from '../auth/SignIn'
import SignUp from '../auth/SignUp'
import CreateProject from '../projects/CreateProject'
import People from '../ProfileSection/People'

const MainContent = () => {
    return (
        <div className="main-content">
          <Switch>
            <Route exact path='/' component={Dashboard} /> {/** HOME */}
            <Route path='/project/:id' component={ProjectDetails} /> 
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateProject} />
            <Route path='/people' component={People} />
          </Switch>
        </div>
    )
}

export default MainContent
