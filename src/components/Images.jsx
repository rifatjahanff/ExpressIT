import React from 'react'

const Images = ({className, imgSrc, imgAlt}) => {
    return (
      <img src={imgSrc} alt={imgAlt} className={`${className }`}/>
    )
  }
  
  export default Images