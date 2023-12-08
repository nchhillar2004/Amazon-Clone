import React from 'react'
import './BorderButton.css'
import { Icon } from '@mui/material'

function IconBorderButton(props) {
  return (
    <div className="border-button icon-btn">
        <Icon>{props.icon}</Icon>
        <div className="icon-name">
        <a href={props.href}>{props.name}</a>
        </div>
    </div>
  )
}

export default IconBorderButton