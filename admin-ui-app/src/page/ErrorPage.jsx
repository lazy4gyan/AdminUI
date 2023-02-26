import React from 'react'

const ErrorPage = ({errorMessage}) => {
  return (
    <div>
      <p style={{color:"red", fontSize:"1.2rem"}}>{errorMessage}</p>
    </div>
  )
}

export default ErrorPage
