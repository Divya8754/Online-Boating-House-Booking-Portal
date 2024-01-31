
import Navbar2 from '../components/Navbar2';
import React, { useState } from 'react';
    import {
      MDBNavbar,
      MDBNavbarNav,
      MDBNavbarItem,
      MDBNavbarToggler,
      MDBNavbarLink,
      MDBContainer,
      MDBIcon,
      MDBCollapse,
      MDBBtn
    } from 'mdb-react-ui-kit';
    import 'mdb-react-ui-kit/dist/css/mdb.min.css';
    import "@fortawesome/fontawesome-free/css/all.min.css";
    // import { Link } from 'react-router-dom';
    import './Headers.scss'
import Footer from './Footer';
    export default function userhome() {
      const [showBasic, setShowBasic] = useState(false);
   
  return (
    <div>
    <Navbar2/>
        <header>
          <MDBNavbar expand='lg' light bgColor='white'>
            <MDBContainer fluid>
              <MDBNavbarToggler
                aria-controls='navbarExample01'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <MDBIcon fas icon='bars' />
              </MDBNavbarToggler>
              <MDBCollapse show={showBasic}>
                <MDBNavbarNav right className='mb-2 mb-lg-0'>
                  <MDBNavbarItem active>
                    <MDBNavbarLink aria-current='page' href='#'>
                      Home
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink href='#'>Features</MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink href='#'>About</MDBNavbarLink>
                  </MDBNavbarItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
    
          <div
            id='intro-example'
            className='p-5 text-center bg-image' 
            style={{ backgroundImage: "url('https://t4.ftcdn.net/jpg/00/93/72/15/360_F_93721520_PRHW9e77w1cPVReB0GZknG8TaEZb3dKI.jpg')" }}
          >
            <div className='mask' style={{backgroundColor: 'rgb(0, 0, 0, 0.4)' }}>
              <div className='d-flex justify-content-center align-items-center h-100' >
                <div className='text-white'>
                <h1 className='mb-3' style={{ color: 'white' }}>LUXURY STAY</h1>
    
                  <h5 className='mb-4'>Best &amp; Boat House</h5>
                  <MDBBtn
                    className="m-2"
                    tag="a"
                    outline
                    size="lg"
                    style={{ color:"white", borderColor: 'white'}}
                    rel="nofollow"
                    target="_blank"
                    href='./Boat'
                    
                    >
                    Book Now
                    </MDBBtn>
                </div>
              </div>
            </div>
          </div>
          </header>
          <Footer/>
        
        
        </div>
      
  );
}