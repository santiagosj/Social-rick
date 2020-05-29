import React,{Fragment} from 'react'
import PropTypes from 'prop-types'
import './Image.scss'

const Image = ({
   background,
   backgroundSize = 'cover',
   className = '',
   imgSrc,
   onClick,
   title = '',
   alt = '',
   style,
   dataDepth
}) => {
   
   if(background){
       style= {
        backgroundImage: `url(${imgSrc})`,
        backgroundSize
       }
   }

   return(
      <Fragment>
          {background && (
              <div className={`BackgroundImage absolute ${className}`} style={style}/>
          )}
          {!background && (
              <img
                className={`LazyImage ${className}`}
                src={imgSrc}
                sizes={'100vw'}
                onClick={onClick}
                title={title}
                alt={alt}
                style={style}
                data-depth={dataDepth}
              />
          )}
      </Fragment>
   )
}

Image.propTypes = {
    alt: PropTypes.string.isRequired
}

export default Image