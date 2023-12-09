import React from 'react'
import '../App.css'

function Error(props) {
  return (
    <div className="error_route">
        <h1>{props.code}</h1>
        <p>{props.error}</p>
        <a href='/'>Back Home</a>
    </div>
  )
}

export default Error