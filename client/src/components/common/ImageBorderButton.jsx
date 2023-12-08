import React from 'react'
import './BorderButton.css'

function ImageBorderButton(props) {
  return (
    <div className="border-button img-btn">
      <img src={props.image} alt="" width={94}/>
        <a href={props.href}>{props.name}</a>
    </div>
  )
}

export default ImageBorderButton