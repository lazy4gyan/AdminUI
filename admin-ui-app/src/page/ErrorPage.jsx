import React from 'react'

const ErrorPage = ({errorMessage}) => {
  return (
    <div>
      <h1 style={{color:"red", fontSize:"1.2rem"}}>{errorMessage}</h1>
    </div>
  )
}

export default ErrorPage
