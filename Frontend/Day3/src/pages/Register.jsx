import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Navbar3 from '../components/Navbar3';
function Register() {
  return (
    <MDBContainer fluid>
    <Navbar3/>
      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
        
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"><b>SIGN UP</b></p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Your Name' id='form1' type='text' className='w-100'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Your Email' id='form2' type='email'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Password' id='form3' type='password'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size='lg'/>
                <MDBInput label='Repeat your password' id='form4' type='password'/>
              </div>

              <div className='mb-4'>
                
              </div>

             <Link to="/Login"><MDBBtn className='mb-4' size='lg'>Register</MDBBtn></Link> 
             <p className="mb-1 pb-lg-2" style={{ color: '#393f81' }}>
             Already have an account? <Link to="/login" style={{ color: '#393f81' }}>Login</Link>
           </p>
           <p className="mb-1" style={{ color: '#393f81' }}>
             <Link to="/ALogin" style={{ color: '#393f81' }}>Admin Login</Link>
           </p>
           
            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://alleppeyhouseboat.in/wp-content/uploads/2019/02/doubledeck-Copy-1-1024x512.jpg' fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>
      
    </MDBContainer>
  );
}

export default Register;