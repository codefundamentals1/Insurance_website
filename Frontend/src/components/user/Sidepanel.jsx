import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import Home from '../Home';

function Sidepanel() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
       Drawer
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        
          <ul className="px-4">
            <Link to ='/userlayout/Customerform'>
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Customer</a>
            </li>
            </Link>
<Link to="/userlayout/apllication">
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Application</a>
            </li>
            </Link>
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Quote</a>
            </li>
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Insurance Policy</a>
            </li>
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Claim Settlement</a>
            </li>
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Office</a>
            </li>
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Membership</a>
            </li>
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Vehicle Service</a>
            </li>
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">NOK</a>
            </li>
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Insurance Company</a>
            </li>
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Policy Renewable</a>
            </li>
            <Link to='/userlayout/incidentform'>
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Incident</a>
            </li>

            </Link>
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Incident Report</a>
            </li>
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Coverage</a>
            </li>
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Product</a>
            </li>
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Receipt</a>
            </li>
          </ul>

        </Offcanvas.Body>
      </Offcanvas>

      
    </>
  );
}

export default Sidepanel;