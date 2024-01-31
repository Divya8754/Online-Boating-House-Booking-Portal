import React from 'react';
import { MDBInput, MDBCheckbox, MDBBtn, MDBTextArea } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import './Contact.css'

export default function Contact() {
  return (
    <form id='form' className='text-center' style={{ width: '100%', maxWidth: '300px', margin: 'auto' }}>
      <h2>Contact us</h2>

      <MDBInput label='Name' v-model='name' wrapperClass='mb-4' />

      <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4' />

      <MDBInput label='Subject' v-model='subject' wrapperClass='mb-4' />

      <MDBTextArea wrapperClass='mb-4' label='Message' />

      <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me a copy' />

      <Link to="/sucess"><MDBBtn color='primary' block className='my-4'>
        Send
      </MDBBtn></Link>
    </form>
  );
}
// import Icon from '@mui/material/Icon';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import React from "react";
// import { Element } from "react-scroll";
// import "./Contact.css";

// const Contact = () => {
//   return (
//     <Element className="contact" id="contact">
//       <h1>Contact</h1>
//       <div className="contact__container">
//         <p>
//           Email : <span>divyamani9677@gmail.com</span>
//         </p>
//         <p>
//           Github Username : <span>@divi8754</span>
//         </p>
//         <div className="contact__icons">
//           <a
//             href="https://www.linkedin.com/in/shanmugam-sakkaravarthy-ab6453244/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Icon>
//               <LinkedInIcon />
//             </Icon>
//           </a>
//           <a
//             href=""
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Icon>
//               <FacebookIcon/>
//             </Icon>
//           </a>
//           <a
//             href="https://www.instagram.com/_.ds._editz/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Icon>
//               <InstagramIcon />
//             </Icon>
//           </a>
//         </div>
//       </div>
//     </Element>
//   );
// };

// export default Contact;
