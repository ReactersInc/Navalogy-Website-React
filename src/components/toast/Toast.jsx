import React from 'react'
import { Toaster } from 'react-hot-toast'


const Toast = ({ position , reverseOrderm }) => {
  return (

    <Toaster
        position = {position}
        reverseOrder = {reverseOrderm}
    />
    
  )
}

export default Toast