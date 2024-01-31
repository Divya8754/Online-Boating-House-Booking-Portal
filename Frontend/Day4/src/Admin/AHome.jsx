import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar3 from '../components/Navbar3';
import { Link } from 'react-router-dom';


function Ahome() {
  return (
    <>
    <Navbar3/>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="author" content="officer_pulaski" />
    <meta
      name="description"
      content="Build A CMS Admin Bootstrap Theme From Scratch"
    />

    <meta name="keywords" content="HTML, CSS, JavaScript, Bootstrap" />
    <title>Admin Area | Dashboard</title>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
      integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
      crossOrigin="anonymous"
    />
    <link rel="stylesheet" href="./css/my_style.css" />
    {/* NAVBAR */}
    <nav className="navbar navbar-expand-md navbar-dark">
      <a className="navbar-brand" href="#">
        AdminStrap <span className="sr-only">(current)</span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="index_theme.html">
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./pages.html">
              Pages
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./posts.html">
              Posts
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./login">
              Users
            </a>
          </li>
        </ul>
        <ul className="navbar-nav navbar-right">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Welcome, Jason
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./login.html">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
    {/* BANNER */}
    <header id="header">
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <h1>
              <i className="fas fa-cog" /> Dashboard{" "}
              <small>Manage Your Site</small>
            </h1>
          </div>
          <div className="col-md-2">
            <div className="dropdown">
              <button
                className="btn dropdown-toggle red-button"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Create Content
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a
                  type="button"
                  className="dropdown-item"
                  data-toggle="modal"
                  data-target="#addPage"
                >
                  Add Page
                </a>
                <a className="dropdown-item" href="#">
                  Add Post
                </a>
                <a className="dropdown-item" href="#">
                  Add User
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    {/* BREADCRUMB */}
    <section id="breadcrumb">
      <div className="container">
        <ol className="breadcrumb">
          <li className="active">
            <u>Dashboard</u>
          </li>
        </ol>
      </div>
    </section>
    {/* MAIN SECTION */}
    <section id="main">
      <div className="container">
        <div className="row">
          {/* SIDEBAR */}
          <div className="col-md-3">
            {/* SIDE-NAVIGATION */}
            <div className="list-group">
              <a
                href="#"
                className="list-group-item list-group-item-action active main-color-bg"
                style={{ color: "hotpink" }}
              >
                <i className="fas fa-cog" /> Dashboard
              </a>
              <a
                href="./Pro"
                className="list-group-item list-group-item-action"
              >
                <i className="fas fa-list-alt" style={{ color: "#00b395" }} />{" "}
                Profile <span className="badge float-right">12</span>
              </a>
              <a
                href="./pages.html"
                className="list-group-item list-group-item-action"
              >
                <i className="fas fa-list-alt" style={{ color: "#00b395" }} />{" "}
                Pages <span className="badge float-right">12</span>
              </a>
              <a
                href="./ab1"
                className="list-group-item list-group-item-action"
              >
                <i
                  className="fas fa-pen-fancy"
                  style={{ color: "rgb(255, 115, 0)" }}
                />{" "}
                EditAbout <span className="badge float-right">33</span>
              </a>
              <a
                href="./addboat"
                className="list-group-item list-group-item-action"
              >
                <i
                  className="fas fa-pen-fancy"
                  style={{ color: "rgb(255, 115, 0)" }}
                />{" "}
                AddBoat <span className="badge float-right">33</span>
              </a>
              <Link to="/edit"
                className="list-group-item list-group-item-action"
              >
                <i
                  className="fas fa-users"
                  style={{ color: "rgb(232, 58, 255)" }}
                />{" "}
                EditNavbar <span className="badge float-right">203</span>
              </Link>
              <a
                href="./ATab"
                className="list-group-item list-group-item-action"
              >
                <i
                  className="fas fa-users"
                  style={{ color: "rgb(232, 58, 255)" }}
                />{" "}
                Table<span className="badge float-right">203</span>
              </a>
              <a
                href="./"
                className="list-group-item list-group-item-action"
              >
                <i
                  className="fas fa-users"
                  style={{ color: "rgb(232, 58, 255)" }}
                />{" "}
                Logout <span className="badge float-right">203</span>
              </a>
            </div>
            {/* PROGRESS BARS */}
            <div className="card card-body bg-white">
              {" "}
              {/* WELL */}
              <h6>Tickets available</h6>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped bg-success progress-bar-animated"
                  role="progressbar"
                  style={{ width: "60%" }}
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  60%
                </div>
              </div>
              <h6>Tickets Booked</h6>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped bg-primary progress-bar-animated"
                  role="progressbar"
                  style={{ width: "40%" }}
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  40%
                </div>
              </div>
            </div>
          </div>
          {/* WIBSITE INFORMATION */}
          <div className="col-md-9">
            {/* WIBSITE OVERVIEW */}
            <div className="card">
              <div className="card-header main-color-bg">Website Overview</div>
              <div className="card-body row">
                <div className="col-md-3 text-center">
                  <div className="card">
                    <div className="card-hearder">
                      <h1>
                        <i
                          className="fas fa-list-alt"
                          style={{ color: "#00b395" }}
                        />{" "}
                        12%
                      </h1>
                      <h4>Tickets</h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 text-center">
                  <div className="card">
                    <div className="card-hearder">
                      <h1>
                        <i
                          className="fas fa-pen-fancy"
                          style={{ color: "rgb(255, 115, 0)" }}
                        />{" "}
                        33
                      </h1>
                      <h4>Boat</h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 text-center">
                  <div className="card">
                    <div className="card-hearder">
                      <h1>
                        <i
                          className="fas fa-users"
                          style={{ color: "rgb(232, 58, 255)" }}
                        />{" "}
                        203
                      </h1>
                      <h4>Users</h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 text-center">
                  <div className="card">
                    <div className="card-hearder">
                      <h1>
                        <i
                          className="fas fa-chart-bar"
                          style={{ color: "gold" }}
                        />{" "}
                        203
                      </h1>
                      <h4>Visitors</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* LATEST USERS */}
            <div className="card" style={{ marginTop: "1em" }}>
              <div className="card-header main-color-bg">
                <h3>Latest Users</h3>
              </div>
              <div className="card-body">
                <div className="container">
                  <table className="table table-striped table-bordered table-hover ">
                    <tbody>
                      <tr className="table-primary">
                        <th>Name</th>
                        <th>Email</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Boat</th>
                      </tr>
                      <tr>
                        <td>Jill Smith</td>
                        <td>jsmith@gmail.com</td>
                        <td>Jul-30-2020</td>
                        <td>10.00AM</td>
                        <td> Full-hull houseboat</td>
                      </tr>
                      <tr className="table-success">
                        <td>Jesse Jackson</td>
                        <td>racebaiter2000@blackmail.com</td>
                        <td>Jul-31-2020</td>
                        <td>1.00PM</td>
                        <td>Cruising houseboats</td>
                      </tr>
                      <tr>
                        <td>Elvis Presley</td>
                        <td>theking@deadmail.com</td>
                        <td>Aug-01-2020</td>
                        <td>12.00PM</td>
                        <td>Non-cruising houseboats</td>
                      </tr>
                      <tr className="table-warning">
                        <td>Donald Trump</td>
                        <td>realtrump@aol.com</td>
                        <td>Aug-02-2020</td>
                        <td>9.00AM</td>
                        <td>Canal-style houseboats</td>
                      </tr>
                      <tr>
                        <td>Barak Obama</td>
                        <td>barakhussein@yahoo.com</td>
                        <td>Aug-03-2020</td>
                        <td>3.00PM</td>
                        <td>Pontoon houseboats</td>
                      </tr>
                      <tr className="table-danger">
                        <td>Henry Kissinger</td>
                        <td>kissenger@protonmail.com</td>
                        <td>Aug-04-2020</td>
                        <td>11.00PM</td>
                        <td>Floating-home houseboat</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* FOOTER */}
    <footer id="footer">
      <p>Copyright KissMyAss ©2020</p>
    </footer>
    {/* MODALS */}
    {/* ADD PAGE */}
    <div
      className="modal fade"
      id="addPage"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <form>
            <div className="modal-header">
              <h4 className="modal-title" id="myModalLabel">
                Add Page
              </h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Page Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Page Title"
                />
              </div>
              <div className="form-group">
                <label>Page Body</label>
                <textarea
                  name="editor1"
                  className="form-control"
                  placeholder="Page Body"
                  defaultValue={""}
                />
              </div>
              <div className="checkbox">
                <label>
                  <input type="checkbox" /> Published
                </label>
              </div>
              <div className="form-group">
                <label>Meta Tags</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add Some Tags..."
                />
              </div>
              <div className="form-group">
                <label>Meta Description</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add Meta Description..."
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    {/* CKEditor CDN */}
    {/* jQuery first, then Popper.js, then Bootstrap JS */}
  </>
  
  
  );
}

export default Ahome;