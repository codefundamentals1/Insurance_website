import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-green-600 text-center h-20 p-4'>User : {userid}</div>
  )
}

export default User