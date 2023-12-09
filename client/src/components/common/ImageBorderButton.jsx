import React from 'react'
import './BorderButton.css'

function ImageBorderButton(props) {
  return (
    <div className="border-button img-btn">
      <a href={props.href}><img src={props.image} alt="" width={94}/></a>
        <p>{props.name}</p>
    </div>
  )
}

export default ImageBorderButton