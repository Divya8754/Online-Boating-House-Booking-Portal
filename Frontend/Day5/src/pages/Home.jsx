import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from 'react-router-dom';
import Navbar1 from '../components/Navbar1';
import Footer from './Footer';
import Header from './Header';
export default function App() {
  return (
    <MDBCardText>
    <Navbar1/><Header/>
    <Footer/></MDBCardText>
  );
}