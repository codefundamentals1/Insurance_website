import React from 'react'
import Sidepanel from './Sidepanel'
import { Outlet } from 'react-router-dom'
// import ApllicationRead from './ApllicationRead'


const UserLayout = () => {
  return (
    <>
    <Sidepanel></Sidepanel>
    
    <Outlet></Outlet>
    </>
  )
}

export default UserLayout
