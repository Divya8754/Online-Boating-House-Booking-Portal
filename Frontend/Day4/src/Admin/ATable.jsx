import React from 'react';
import { MDBInput, MDBCheckbox, MDBBtn, MDBTextArea } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar3 from '../components/Navbar3';

function Atable(){
    return (
        <>
        <Navbar3/>
  {/* Required meta tags */}
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  {/* Bootstrap CSS */}
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
    integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
    crossOrigin="anonymous"
  />
  <title>Booking Listing- Boat Booking App</title>
  <div className="container-fluid">
    {/*NavBar*/}
    <div className="row">
      <div className="col">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <img
              src="data:image/jpeg;base64,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"
              width={70}
            />
            <strong> LUXURY STAY</strong> Booking App{" "}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item ">
                <a className="nav-link" href="#">
                  Home{" "}
                </a>
              </li>
              <li className="nav-item  ">
                <a className="nav-link" href="#">
                  Book Boat
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  View Bookings
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    {/*Jumbotron*/}
    <div className="row">
      <div className="col">
        <div className="jumbotron">
          <h1 className="display-4"> </h1>
          <h2> Here it is our booking list </h2>
          <p className="lead">Call them to confirm the booking .</p>
        </div>{" "}
        {/*jumbotron element*/}
      </div>{" "}
      {/*jumbotron col*/}
    </div>{" "}
    {/*jumbotron row*/}
    {/* booking list*/}
    <div className="row">
      <div className="col">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Pax</th>
              <th scope="col">Packages</th>
              <th scope="col">Food Prefernce</th>
              <th scope="col">Task</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Zulib</td>
              <td>zulib@yahoo.com</td>
              <td>3</td>
              <td>4 N 5 D</td>
              <td>  sea food</td>
              <td>
                {" "}
                <button type="submit" className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Kak Sal</td>
              <td>salwa@gmail.com</td>
              <td>3</td>
              <td>1 N 2 D</td>
              <td>veg</td>
              <td>
                {" "}
                <button type="submit" className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Sazu</td>
              <td>sz.hakim@yahoo.com</td>
              <td>2</td>
              <td>3 N 4 D</td>
              <td> non veg meals</td>
              <td>
                {" "}
                <button type="submit" className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>{" "}
      {/* booking form col*/}
    </div>{" "}
    {/* booking form row*/}
  </div>
  {/* Option 1: jQuery and Bootstrap Bundle (includes Popper) */}
</>

    )
}
export default Atable;