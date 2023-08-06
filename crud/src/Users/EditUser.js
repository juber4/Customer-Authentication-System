import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  let navigate = useNavigate();

  // let userid = req.param.id
  

  const { id } = useParams();

  // alert(id);

  const [user, setUser] = useState({
   firstname: "",
    lastname: "",
    address:"",
    city:"",
    state:"",
    street:"",
    email: "",
    phone:"",
    password:"",
    
  });

  const { firstname, lastname, address, city, state, phone, street, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  },[]);

  const onSubmit = async (e) => {
    const updatedUser = {
      id: id, // Assuming 'id' is the correct variable containing the ID value
      first_name: firstname,
      last_name: lastname,
      address: address,
      city: city,
      state: state,
      street: street,
      email: email,
      phone: phone,
      // Include other fields as needed
    };
  
    
      // await axios.put(`http://localhost:8080/customer/${id}`, user);
      navigate("/");
   
  };

  const loadUser = async () => {
    // alert(id);
    const result = await axios.get(`http://localhost:8080/customer/${id}`);
    // alert(JSON.stringify(result.data))
    let user_details1 = result.data;
    let user_details2 = user_details1.body;
    // alert(JSON.stringify(user_details2))
    setUser(user_details2);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                first_name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="firstname"
                name="first_name"
                value={user.first_name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                last_name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="lastname"
                name="last_name"
                value={user.last_name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="e-mail"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Address
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="address"
                name="address"
                value={address}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Street
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="street"
                name="street"
                value={street}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                City
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="city"
                name="city"
                value={city}
                onChange={(e) => onInputChange(e)}
              />
              </div>
               <div className="mb-3">
              <label htmlFor="Email" className="form-label">
              State
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="state"
                name="state"
                value={state}
                onChange={(e) => onInputChange(e)}
              />
            
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Phone
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="phone"
                name="phone"
                value={phone}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}