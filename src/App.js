import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import UserDetails from "./components/userDetails";
import Movies from "./components/movies";
import TodMovies from "./components/todmovies";
import SoonMovies from "./components/soonmovies";

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={isLoggedIn == "true" ? <Movies /> : <Movies />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/userDetails' element={<UserDetails />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/todmovies' element={<TodMovies />} />
          <Route path='/soonmovies' element={<SoonMovies />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
