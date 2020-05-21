import React from 'react'
import Navbar from '../layout/Navbar'
import MainContent from '../MainContent/MainContent'
const AppHolder = () => {
    return (
        <div className="appHolder">
           <Navbar />
           <MainContent/>
        </div>
    )
}

export default AppHolder
