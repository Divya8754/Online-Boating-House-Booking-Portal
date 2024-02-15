import React, { useState } from 'react';
import './Admin/Addboat.css'
import { Link } from 'react-router-dom';
import Navbar3 from './components/Navbar3';

const Addboat = () => {
  const [boatDetails, setBoatDetails] = useState({
    boatName: '',
    boatImageURL: '',
    boatDescription: '',
    boatAvailableStatus: '',
    boatAddress: '',
    capacity: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBoatDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server or perform actions
    console.log('Submitted boat details:', boatDetails);
  };

  return (
    <div className="form-container">
    <Navbar3/>
      <h1>Add Boat Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="boatName">Boat Name:</label>
          <input
            type="text"
            id="boatName"
            name="boatName"
            value={boatDetails.boatName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="boatImageURL">Boat Image URL:</label>
          <input
            type="text"
            id="boatImageURL"
            name="boatImageURL"
            value={boatDetails.boatImageURL}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="boatDescription">Boat Description:</label>
          <textarea
            id="boatDescription"
            name="boatDescription"
            value={boatDetails.boatDescription}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="boatAvailableStatus">Boat Available Status:</label>
          <select
            id="boatAvailableStatus"
            name="boatAvailableStatus"
            value={boatDetails.boatAvailableStatus}
            onChange={handleChange}
            required
          >
            <option value="">Select Status</option>
            <option value="available">Available</option>
            <option value="notAvailable">Not Available</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="boatAddress">Boat Address:</label>
          <input
            type="text"
            id="boatAddress"
            name="boatAddress"
            value={boatDetails.boatAddress}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="capacity">Capacity:</label>
          <input
            type="number"
            id="capacity"
            name="capacity"
            value={boatDetails.capacity}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={boatDetails.price}
            onChange={handleChange}
            required
          />
        </div>

        <Link to="/sucess"><button type="submit">Submit</button></Link>
      </form>
    </div>
  );
};

export default Addboat;