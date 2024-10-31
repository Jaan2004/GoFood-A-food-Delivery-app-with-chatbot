import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [cred, setcred] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  let nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!cred.email || !cred.password) {
      setError("Please enter both email and password");
      return;
    }
    try {
      const response = await fetch("http://localhost:5000/c/loginuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: cred.email, password: cred.password }),
      });
      const json = await response.json();
      if (json.success) {
        localStorage.setItem("useremail", cred.email);
        localStorage.setItem("authtoken", json.authtoken);
        nav('/');
      } else {
        setError("Invalid Credentials");
      }
    } catch (error) {
      setError("An error occurred during login");
    }
  };

  const onChange = (event) => {
    setcred({ ...cred, [event.target.name]: event.target.value });
  };

  return (
    <div className="container h-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-md-4">
          <div className="card shadow-lg">
            <div className="card-body">
              <h2 className="card-title text-center">Login</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChange} name="email" value={cred.email} />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" name="password" onChange={onChange} value={cred.password} />
                </div>
                {error && <div className="mb-3 text-danger">{error}</div>}
                <button type="submit" className="btn btn-success btn-block">Login</button>
                <Link to="/createuser" className="m-3 btn btn-danger btn-block">Don't have an account? Sign up</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}