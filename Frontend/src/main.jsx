import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import User from './components/user/User.jsx'
import Github from './components/Github.jsx'
import Githubtwo, { githubInfoLoader } from './components/Githubtwo.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/Signup.jsx'





const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element ={<Layout/>} >
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='user/:userid' element={<User/>} />
      <Route path='github' element={<Github/>} />
      {/* different method to call api  */}
      <Route 
      loader={githubInfoLoader} 
      path='githubtwo' 
      element={<Githubtwo/>} />
       <Route path='signup' element={<Signup/>} />

    
    </Route>
  )
)




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
