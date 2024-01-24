import React from 'react';
import "./Login.css"
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
function Login() {
  return (
    
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{
        backgroundImage: 'url(https://t4.ftcdn.net/jpg/05/76/19/83/360_F_576198341_zSYw1WulnmONErcsNGUlrVoYIoAkT80d.jpg)',
        backgroundSize: 'cover',  // Ensures the background image covers the entire container
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',  // Set width to 100% for full width
        height: '100vh', // Adjust height as needed
      }}>  
      <MDBRow>
      <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="#!" style={{color: '#393f81'}}>Register here</a></p>
        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
            LUXURY STAY <br />
        
          </h1>

          <p className='px-3' style={{color: 'hsl(218, 81%, 85%)'}}>
          We Luxury Houseboat, a division of Holy Squad Hospitalities are one of the best top rated service providers in Kumarakom and Allappey. We proffer you the best way to explore the beauty of Kerala through the enchanting backwaters
          </p>

        </MDBCol>

        <MDBCol md='6' className='position-relative'>

          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          <MDBCard className='my-5 bg-glass'>
            <MDBCardBody className='p-5'>

              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Last name' id='form2' type='text'/>
                </MDBCol>
              </MDBRow>

              <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email'/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password'/>

              <div className='d-flex justify-content-center mb-4'>
              
              </div>

             <Link to="/"> <MDBBtn className='w-100 mb-4' size='md'>sign up</MDBBtn></Link>
              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <Link to="/Register" style={{color: '#393f81'}}>Register here</Link></p>
              <div className="text-center">

                <p>or sign up with:</p>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='github' size="sm"/>
                </MDBBtn>

              </div>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>
  
    </MDBContainer> 
    
  );
}

export default Login;