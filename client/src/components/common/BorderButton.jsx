import React from 'react'
import './BorderButton.css'

function BorderButton(props) {
  return (
    <div className="border-button">
        <a href={props.href}>{props.name}</a>
    </div>
  )
}

export default BorderButton