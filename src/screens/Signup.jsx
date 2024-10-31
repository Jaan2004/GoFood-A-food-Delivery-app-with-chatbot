import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const [cred, setcred] = useState({ name: "", email: "", password: "", geolocation: "" });
  let nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify({ name: cred.name, email: cred.email, password: cred.password, location: cred.geolocation }));
    const response = await fetch("http://localhost:5000/c/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: cred.name, email: cred.email, password: cred.password, location: cred.geolocation })
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      nav('/');
    } else {
      alert("Form not submitted");
    }
  };

  const onChange = (event) => {
    setcred({ ...cred, [event.target.name]: event.target.value });
  };

  return (
    <div className="container h-100 d-flex justify-content-center align-items-center">
      <div className="card shadow-lg" style={{ width: "30rem" }}>
        <div className="card-body">
          <h2 className="card-title text-center">Sign up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="example" name="name" value={cred.name} onChange={onChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChange} name="email" value={cred.email} />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" name="password" onChange={onChange} value={cred.password} />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Location</label>
              <input type="text" className="form-control" id="example" name="geolocation" onChange={onChange} value={cred.geolocation} />
            </div>
            <button type="submit" className="btn btn-success btn-block">Sign up</button>
            <Link to="/login" className="m-3 btn btn-danger btn-block">Already a user?</Link>
          </form>
        </div>
      </div>
    </div>
  );
}