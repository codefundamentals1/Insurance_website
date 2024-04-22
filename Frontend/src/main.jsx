import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
// import User from './components/user/User.jsx'
import Github from './components/Github.jsx'
import Githubtwo, { githubInfoLoader } from './components/Githubtwo.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Formpage.jsx'
import Policies from './components/Policies.jsx'
import Home_form from './components/Home_form.jsx'
import VehicleForm from './components/VehicleForm.jsx'
import PoliciesTable from './components/PoliciesTable.jsx'
import ClaimForm from './components/ClaimForm.jsx'
import PremiumPaymentForm from './components/PremiumPaymentForm.jsx'
import Customer_read from './components/Customer/Customer_read.jsx'
import Customer_form from './components/Customer/Customer_form.jsx'
import LoginBoxes from './components/Login.jsx'
import CustomerLoginPage from './components/CustomerLoginPage.jsx'
import AgentLoginPage from './components/AgentLoginPage.jsx'
import DamageInspectorLoginPage from './components/DamageInspectorLoginPage.jsx'

import UserLayout from './components/user/UserLayout.jsx'
import Incident_form from './components/user/Incident_form.jsx'
import ApplicationRead from './components/user/ApllicationRead.jsx'




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      {/* <Route path='user/:userid' element={<User/>} /> */}
      <Route path='github' element={<Github />} />
      {/* different method to call api  */}
      <Route
        loader={githubInfoLoader}
        path='githubtwo'
        element={<Githubtwo />} />
      <Route path='form' element={<Form />} />
      <Route path='policies' element={<Policies />} />
      <Route path='home_form' element={<Home_form />} />
      <Route path='vehicleform' element={<VehicleForm />} />
      <Route path='policytable' element={<PoliciesTable />} />
      <Route path='claimform' element={<ClaimForm />} />
      <Route path='premiumpayment' element={<PremiumPaymentForm />} />
      <Route path='Customerread' element={<Customer_read />} />
      <Route path='Customerform' element={<Customer_form />} />
      <Route path='login' element={<LoginBoxes />} />
      <Route path='customerlogin' element={<CustomerLoginPage />} />
      <Route path='agentlogin' element={<AgentLoginPage />} />
      <Route path='Inspectorlogin' element={<DamageInspectorLoginPage />} />

{/* user route */}
      <Route path='userlayout' element={<UserLayout />} >
      <Route path='Customerform' element={<Customer_form />} />
      <Route path='incidentform' element={<Incident_form />} />
      <Route path='apllication' element={<ApplicationRead />} />
        
      </Route>






    </Route>
  )
)




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
