import React, { useState } from "react";

export default function SignUp() {
  const [firstName, setFname] = useState("");
  const [lastName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "ok") {
          window.location.href = "/login";
        } else {
          alert("Something went wrong");
        }
      });
  };

  return (
    <div className='auth-wrapper'>
      <div className='auth-inner'>
        <form onSubmit={handleSubmit}>
          <h3 className='signUptext'>Sign Up</h3>
          <div className='mb-3'>
            <input
              type='text'
              className='form-control'
              placeholder='Unesite vaše ime'
              value={firstName}
              onChange={(e) => setFname(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <input
              type='text'
              className='form-control'
              placeholder='Unesite vaše prezime'
              value={lastName}
              onChange={(e) => setLname(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <input
              type='email'
              className='form-control'
              placeholder='Unesite vašu e-mail adresu'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <input
              type='password'
              className='form-control'
              placeholder='Unesite vašu lozinku'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='d-grid'>
            <button type='submit' className='button-prim'>
              Sign Up
            </button>
          </div>
          <div className='u-singup'>
            <div className='help'>
              <div className='signup'>
                <p className='p-text'>Već imate nalog? </p>
                <a href='/login' className='p-text'>
                  Prijavite se
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
