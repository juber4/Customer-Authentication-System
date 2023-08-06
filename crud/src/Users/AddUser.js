import React, { useState } from 'react';
import '../App.css'; // Import the CSS file for styling
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CustomerForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
   
    address: '',
    city: '',
    state: '',
    email: '',
    phone: '',
    password: '',
  });

  let navigate=useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8080/customer', formData)
      .then((response) => {
        // Handle the response from the server if needed
        console.log('Form data sent successfully:', response.data);
        // Reset the form after successful submission
        setFormData({
          first_name: '',
          last_name: '',
         
          address: '',
          city: '',
          state: '',
          email: '',
          phone: '',
          password: '',

        });
        navigate("/login")
      })
      .catch((error) => {
        // Handle errors if the request fails
        console.error('Error sending form data:', error);
      });
  };

  return (
   
    <Form >
      <h1>Customer Details</h1>
    <Row className="mb-4">
      <Form.Group as={Col} controlId="formGridfirstname">
        <Form.Control type="text"
          name="first_name" placeholder='firstname'
          value={formData.first_name}
          onChange={handleChange} />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridlastname">
        
        <Form.Control type="text"
          name="last_name" placeholder='lastname'
          value={formData.last_name}
          onChange={handleChange}/>
      </Form.Group>

      
    </Row>
    <Row className="mb-7">
      

      <Form.Group as={Col} controlId="formGridaddress">
        
        <Form.Control  type="text"
          name="address" placeholder='address'
          value={formData.address}
          onChange={handleChange} />
      </Form.Group>

      
    </Row>

    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridcity">
        <Form.Control type="text"
          name="city" placeholder='city'
          value={formData.city}
          onChange={handleChange}/>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridstate">
        <Form.Control  type="text"
          name="state" placeholder='state'
          value={formData.state}
          onChange={handleChange} />
      </Form.Group>

      
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Control type="email"
          name="email" placeholder='email'
          value={formData.email}
          onChange={handleChange} />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="password" placeholder="Password" name='password' value={formData.password}  onChange={handleChange}/>
      </Form.Group>

      
    </Row>
    <Row className="mb-5 " >
      <Form.Group as={Col} controlId="formGridphone">
        <Form.Control type="text"
          name="phone" placeholder='phone'
          value={formData.phone}
          onChange={handleChange} />
      </Form.Group>

      
    </Row>

    <Button class="button" variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    
    //  <form onSubmit={handleSubmit} className="customer-form">
    //     Street:
    //     <input type="text" name="street" value={formData.street} onChange={handleChange} />
    //   </label>
    //   <label>
    //     Address:
    //     <input type="text" name="address" value={formData.address} onChange={handleChange} />
    //   </label>
    //   <label>
    //     City:
    //     <input type="text" name="city" value={formData.city} onChange={handleChange} />
    //   </label>
    //   <label>
    //     State:
    //     <input type="text" name="state" value={formData.state} onChange={handleChange} />
    //   </label>
    //   <label>
    //     Email:
    //     <input type="email" name="email" value={formData.email} onChange={handleChange} />
    //   </label>
    //   <label>
    //     Phone:
    //     <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
    //   </label>
    //   <button type="submit">Submit</button>
    // </form>
  );
};

export default CustomerForm;
