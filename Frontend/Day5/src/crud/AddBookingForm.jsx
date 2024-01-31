// AddBookingForm.jsx

import React from 'react';
import './AddBookingForm.css'; // Import the corresponding CSS file
import { Link } from 'react-router-dom';

const AddBookingForm = () => {
  return (
    <div className="forme-container">
      <h1>Add Booking Details</h1>
      <form>
        <div className="form-group">
          <label htmlFor="bookingId">Booking ID:</label>
          <input type="text" id="bookingId" name="bookingId" />
        </div>
        <div className="form-group">
          <label htmlFor="boatName">Boat Name:</label>
          <input type="text" id="boatName" name="boatName" />
        </div>
        <div className="form-group">
          <label htmlFor="userId">User ID:</label>
          <input type="text" id="userId" name="userId" />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" />
        </div>
        <div className="form-group">
          <label htmlFor="numberOfPersons">Number of Persons:</label>
          <input type="number" id="numberOfPersons" name="numberOfPersons" />
        </div>
        <div className="form-group">
          <label htmlFor="fromDate">From Date:</label>
          <input type="date" id="fromDate" name="fromDate" />
        </div>
        <div className="form-group">
          <label htmlFor="toDate">To Date:</label>
          <input type="date" id="toDate" name="toDate" />
        </div>
        <Link to="/Tab"><button name="button" type="submit">Submit</button></Link>
      </form>
    </div>
  );
};

export default AddBookingForm;