import React, { Component, useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(email, password);
    fetch("http://localhost:5000/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          alert("login successful");

          window.localStorage.setItem("token", data.token); // assuming that the token is returned from the backend as 'token'
          window.localStorage.setItem("loggedIn", true);

          window.location.href = "/movies";
        } else {
          alert("Invalid login credentials");
        }
      });
  }

  return (
    <div className='auth-wrapper'>
      <div className='auth-inner'>
        <form onSubmit={handleSubmit}>
          <h3 className='signUptext'>Sign In</h3>

          <div className='mb-3'>
            <input
              type='email'
              className='form-control'
              placeholder='Unesite svoju e-mail adresu'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='mb-3'>
            <input
              type='password'
              className='form-control'
              placeholder='Unesite svoju lozinku'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className='d-grid'>
            <button type='submit' className='button-prim'>
              Sign In
            </button>
          </div>
          <div className='u-singup'>
            <div className='help'>
              <div className='signup'>
                <p className='p-text'>Nemate nalog? </p>
                <a href='/sign-up' class='p-text'>
                  Registrujte se
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
