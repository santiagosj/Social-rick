import React from 'react'
import moment from 'moment'
import Image from '../Image/Image'
import ProfileDefaultImg from '../../assets/images.png'
//Post Card

const styleCardImg = {
    maxWidth: '95px',
    float: 'right',
    position: 'relative',
    top: '-47px',
    borderRadius: '50%'
}

const ProjectSummary = ({project}) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{project.title}</span>
        <Image imgSrc={project.authorImg ? project.authorImg : ProfileDefaultImg } alt="profileImg" style={styleCardImg}/>
        <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
        <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  )
}

export default ProjectSummary
