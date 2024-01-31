
import React from 'react';
import { MDBInput, MDBCheckbox, MDBBtn, MDBTextArea } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import Navbar2 from '../components/Navbar2';
import Footer from './Footer';
function About(){
    return(
       <div>
        <Navbar2/>
        <header>
  {/* Navbar */}
  <nav className="navbar navbar-expand-lg bg-body fixed-top">
    <div className="container-fluid">
      <button
        data-mdb-collapse-init=""
        className="navbar-toggler"
        type="button"
        data-mdb-target="#navbarExample01"
        aria-controls="navbarExample01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars" />
      </button>
    
    </div>
  </nav>
  {/* Navbar */}
  {/* Background image */}
  <div
    className="p-5 text-center bg-image"
    style={{
      backgroundImage:
        'url("https://us.123rf.com/450wm/byheaven/byheaven1207/byheaven120700061/14573882-house-boat-in-backwaters-at-palms-background-in-alappuzha-kerala-india.jpg")',
      height: 450,
      marginTop: 6
    }}
  >
    <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.0)" }}>
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="text-white">
        </div>
      </div>
    </div>
  </div>
  {/* Background image */}
</header>
<h1 style={{ textAlign: 'center'}}><b> LUXURY STAY</b></h1>

<p style={{ textAlign: 'center' }}>

Welcome to DiscoverBoathouse – Your Gateway to Unforgettable Waterfront Experiences!

At DiscoverBoathouse, we are passionate about creating seamless and unforgettable boathouse experiences for travelers seeking a unique blend of comfort and adventure. Our platform is designed to revolutionize the way you explore waterfront destinations, offering an easy and convenient way to book your dream boathouse stay.
</p>
<h4 style={{ textAlign: 'center'}}><b>What Sets Us Apart:</b></h4>
<p style={{ textAlign: 'center' }}>
Curated Selection: We handpick the finest boathouses across picturesque locations, ensuring each property meets our high standards of comfort, safety, and authenticity. Expect nothing but the best when you book with DiscoverBoathouse.

User-Friendly Interface: Our user-friendly website and mobile app make it a breeze to browse, select, and book your preferred boathouse. Whether you're a solo traveler, a couple seeking a romantic getaway, or a family planning a memorable vacation, our platform caters to all your needs.

Secure Booking: Your safety and security are our top priorities. Our secure booking system ensures that your personal information is protected, giving you peace of mind as you embark on your boathouse adventure.

Local Insights: We go beyond the ordinary by providing you with local insights and recommendations. Discover hidden gems, explore local cuisines, and immerse yourself in the unique culture of each waterfront destination.
</p>
<h4 style={{ textAlign: 'center'}}><b>
Our Mission:
</b>
</h4>
<p style={{ textAlign: 'center'}}> 
Our mission is to connect travelers with exceptional boathouse experiences that go beyond typical accommodations. We believe that the beauty of the water should be accessible to all, and our platform strives to make waterfront living a reality for every explorer.
Get Ready to Sail Away:

Whether it's the serene backwaters of Kerala, the meandering rivers of Assam, or the enchanting lakes of Udaipur, DiscoverBoathouse invites you to embark on a journey of discovery and relaxation. Your next waterfront escape is just a click away.
Join us at DiscoverBoathouse, where every stay is a voyage, and every voyage is a story waiting to be told.
</p>


<Footer/>
       </div>
    )
}
export default About;