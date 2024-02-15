import React, { useState } from 'react';
import axios from 'axios';

function BoatForm() {
  const [boatData, setBoatData] = useState({
    boatname: '',
    price: 0,
    childcount: '',
    adultcount: '',
    description: '',
  });

  const handleChange = (e) => {
    setBoatData({ ...boatData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Adjust the URL based on your server endpoint
      const response = await axios.post('http://localhost:8080/api/v1/boats', boatData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Boat created successfully:', response.data);
      // You can handle success, e.g., redirect to another page or display a success message
    } catch (error) {
      console.error('Boat creation failed:', error);
      // Handle error, e.g., display an error message to the user
    }
  };

  return (
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
  );
}

export default BoatForm;
