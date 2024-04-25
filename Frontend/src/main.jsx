import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
// import User from './components/user/User.jsx'

import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Formpage.jsx";
import Policies from "./components/Policies.jsx";
import Home_form from "./components/Home_form.jsx";
import VehicleForm from "./components/VehicleForm.jsx";
import PoliciesTable from "./components/PoliciesTable.jsx";
import ClaimForm from "./components/ClaimForm.jsx";
import PremiumPaymentForm from "./components/PremiumPaymentForm.jsx";
import Customer_form from "./components/Customer/Customer_form.jsx";
import LoginBoxes from "./components/Login.jsx";
import CustomerLoginPage from "./components/CustomerLoginPage.jsx";
import AgentLoginPage from "./components/AgentLoginPage.jsx";
import DamageInspectorLoginPage from "./components/DamageInspectorLoginPage.jsx";

import UserLayout from "./components/user/UserLayout.jsx";
import Incident_form from "./components/user/Incident_form.jsx";
import ApplicationRead from "./components/user/ApllicationRead.jsx";
import CustomerPage from "./components/user/CustomerPage.jsx";
import QuotePage from "./components/user/QuotePage.jsx";
import InsurancePolicyPage from "./components/user/InsurancePolicyPage.jsx";
import ClaimSettlementPage from "./components/user/ClaimSettlementPage.jsx";
import OfficePage from "./components/user/OfficePage.jsx";
import MembershipPage from "./components/user/Membership/MembershipPage.jsx";
import ButtonPage from "./components/user/Membership/ButtonPage.jsx";
import Membership_form from "./components/user/Membership/Membership_form.jsx";
import VehicleServicePage from "./components/user/VehicleServicePage.jsx";
import NOKPage from "./components/user/NOKPage.jsx";
import InsuranceCompaniesPage from "./components/user/InsuranceCompaniesPage.jsx";
import PolicyRenewablePage from "./components/user/PolicyRenewablePage.jsx";
import IncidentPage from "./components/user/IncidentPage.jsx";
import IncidentReportPage from "./components/user/IncidentReportPage.jsx";
import CoveragePage from "./components/user/CoveragePage.jsx";
import ProductPage from "./components/user/ProductPage.jsx";
import ReceiptPage from "./components/user/ReceiptPage.jsx";
import Claim from "./components/Claim.jsx";
import DamageInspectorLayout from "./components/DamageInspector/DamageInspectorLayout.jsx";
import InsurancePolicyPage1 from "./components/DamageInspector/InsurancePolicyPage1.jsx";
import IncidentPage1 from "./components/DamageInspector/IncidentPage1.jsx";
import ProductPage1 from "./components/DamageInspector/ProducrPage1.jsx";
import AdminPanel from "./components/DamageInspector/AdminPanel.jsx";
import IncidentReportPage1 from "./components/DamageInspector/IncidentReportPage1.jsx";
import Incident_form1 from "./components/DamageInspector/Incident_form1.jsx";
import CustomerSignup from "./components/CustomerSignup.jsx";
import DamageInspectorSignup from "./components/DamageInspectorSignup.jsx";
import AgentSignup from "./components/AgentSignup.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />

      {/* <Route path="form" element={<Form />} /> */}
      
      <Route path="policies" element={<Policies />} />
      {/* <Route path="home_form" element={<Home_form />} /> */}
      {/* <Route path="vehicleform" element={<VehicleForm />} /> */}
      {/* <Route path="policytable" element={<PoliciesTable />} /> */}
      {/* <Route path="claimform" element={<ClaimForm />} /> */}
      {/* <Route path="premiumpayment" element={<PremiumPaymentForm />} /> */}
      {/* <Route path='Customerread' element={<Customer_read />} /> */}
      {/* <Route path="Customerform" element={<Customer_form />} /> */}
      <Route path="login" element={<LoginBoxes />} />
      <Route path="customer/login" element={<CustomerLoginPage />} />
      <Route path="customer/signup" element={<CustomerSignup />} />
      <Route path="agent/login" element={<AgentLoginPage />} />
      <Route path="agent/signup" element={<AgentSignup />} />
      <Route path="inspector/login" element={<DamageInspectorLoginPage />} />
      <Route path="inspector/signup" element={<DamageInspectorSignup />} />

      {/* <Route path="claim" element={<Claim />} /> */}

      {/* user route  customer route*/}
      <Route path="userlayout" element={<UserLayout />}>
        <Route path="" element={<Customer_form />} />
        <Route path="Customerform" element={<Customer_form />} />
        <Route path="incidentform" element={<Incident_form />} />
        <Route path="application" element={<ApplicationRead />} />
        <Route path="customer_read" element={<CustomerPage />} />
        <Route path="quote_read" element={<QuotePage />} />
        <Route path="insurance_read" element={<InsurancePolicyPage />} />
        <Route path="claimsettlement" element={<ClaimSettlementPage />} />
        <Route path="officepage" element={<OfficePage />} />
        <Route path="buttonpage" element={<ButtonPage />} />
        <Route path="memberpage" element={<MembershipPage />} />
        <Route path="memberform" element={<Membership_form />} />
        <Route path="vehicleservicepage" element={<VehicleServicePage />} />
        <Route path="nok" element={<NOKPage />} />
        <Route path="ICP" element={<InsuranceCompaniesPage />} />
        <Route path="PRP" element={<PolicyRenewablePage />} />
        <Route path="IP" element={<IncidentPage />} />
        <Route path="IRP" element={<IncidentReportPage />} />
        <Route path="CoverageP" element={<CoveragePage />} />
        <Route path="PP" element={<ProductPage />} />
        <Route path="RP" element={<ReceiptPage />} />
      </Route>

      {/* Damage inspector path */}

      <Route path="inspectorlayout" element={<DamageInspectorLayout />}>
      <Route path="" element={<InsurancePolicyPage1 />}/>
        <Route path="insuracepolicypage1" element={<InsurancePolicyPage1 />}/>
        <Route path="incident1" element={<IncidentPage1 />}/>
        <Route path="productpage1" element={<ProductPage1 />}/>
        <Route path="adminpanel" element={<AdminPanel />}/>
        <Route path="incidentreportpage" element={<IncidentReportPage1/>}/>
        <Route path="incidentform1" element={<Incident_form1/>}/>
      </Route>


    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
