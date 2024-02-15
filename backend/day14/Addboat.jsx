import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function BoatForm() {
  const [boatData, setBoatData] = useState({
    boatname: '',
    price: 0,
    childcount: '',
    adultcount: '',
    description: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBoatData({ ...boatData, [e.target.name]: e.target.value });
  };

  const calculateTotalPrice = (selectedGift) => {
    // Mock calculation, replace with your actual logic
    return selectedGift.length * 10;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/boat/add', {
        boatname: boatData.boatname,
        price: parseFloat(boatData.price), // Convert to a float or integer as needed
        childcount: boatData.childcount,
        adultcount: boatData.adultcount,
        description: boatData.description,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Boat created successfully:', response.data);
      // Optionally, you can reset the form or navigate to another page after successful creation
      navigate('/success');
    } catch (error) {
      console.error('Boat creation failed:', error.response.data);
      // Handle error, e.g., display an error message to the user
    }
  };

  return (
    <div>
      <h2>Add a New Boat</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Boat Name:
          <input type="text" name="boatname" value={boatData.boatname} onChange={handleChange} />
        </label>
        <br />

        <label>
          Price:
          <input type="number" name="price" value={boatData.price} onChange={handleChange} />
        </label>
        <br />

        <label>
          Child Count:
          <input type="text" name="childcount" value={boatData.childcount} onChange={handleChange} />
        </label>
        <br />

        <label>
          Adult Count:
          <input type="text" name="adultcount" value={boatData.adultcount} onChange={handleChange} />
        </label>
        <br />

        <label>
          Description:
          <textarea name="description" value={boatData.description} onChange={handleChange} />
        </label>
        <br />

        <button type="submit">Create Boat</button>
      </form>
    </div>
  );
}

export default BoatForm;
