import React from 'react'
import Sidepanel_in from './Sidepanel_in'
import { Outlet } from 'react-router-dom'
// import ApllicationRead from './ApllicationRead'


const DamageInspectorLayout = () => {
  return (
    <>
    <Sidepanel_in/>
    
    <Outlet></Outlet>
    </>
  )
}

export default DamageInspectorLayout
