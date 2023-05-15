import React from "react";
import "./soonmovies.css";
import pimLogo from "./images/pim.png";

export default function SoonMovies() {
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./login";
  };

  return (
    <div>
      <ul class="navbar">
        <li>
          <a href="/movies" data-hover="TOP FILMOVI">
            TOP FILMOVI
          </a>
        </li>
        <li>
          <a href="/todmovies" data-hover="DANAS U KINU">
            DANAS U KINU
          </a>
        </li>
        <li class="current">
          <a href="#" data-hover="USKORO U KINU">
            USKORO U KINU
          </a>
        </li>
        <button onClick={logOut} className="btn btn-primary">
          Log Out
        </button>
      </ul>
      <div>
        <h4
          style={{ color: "white", fontWeight: "700" }}
          className="text-center my-4"
        >
          USKORO U KINU
        </h4>
      </div>
      <div className="container">
        <div className="row justify-content-around align-items-center">
          <img
            src="imagesMovies/slider1.jpg"
            id="fafMovie"
            className="img-card col-lg-4 col-md-6 col-sm-12 col-12"
            style={{ maxWidth: 250, width: "90%" }}
          />
          <img
            src="imagesMovies/slider2.jpg"
            className="img-card col-lg-4 col-md-6 col-sm-12 col-12"
            style={{ maxWidth: 250, width: "90%" }}
          />
          <img
            src="imagesMovies/slider3.jpg"
            className="img-card col-lg-4 col-md-6 col-sm-12 col-12"
            style={{ maxWidth: 250, width: "90%" }}
          />
          <img
            src="imagesMovies/slider4.jpg"
            className="img-card col-lg-4 col-md-6 col-sm-12 col-12"
            style={{ maxWidth: 250, width: "90%" }}
          />
          <img
            src="imagesMovies/slider5.jpg"
            className="img-card col-lg-4 col-md-6 col-sm-12 col-12"
            style={{ maxWidth: 250, width: "90%" }}
          />
          <img
            src="imagesMovies/slider6.jpg"
            className="img-card col-lg-4 col-md-6 col-sm-12 col-12"
            style={{ maxWidth: 250, width: "90%" }}
          />
          <img
            src="imagesMovies/slider7.jpg"
            className="img-card col-lg-4 col-md-6 col-sm-12 col-12"
            style={{ maxWidth: 250, width: "90%" }}
          />
          <img
            src="imagesMovies/slider8.jpg"
            className="img-card col-lg-4 col-md-6 col-sm-12 col-12"
            style={{ maxWidth: 250, width: "90%" }}
          />
          <img
            src="imagesMovies/slider9.jpg"
            className="img-card col-lg-4 col-md-6 col-sm-12 col-12"
            style={{ maxWidth: 250, width: "90%" }}
          />
          <img
            src="imagesMovies/slider9.jpg"
            className="img-card col-lg-4 col-md-6 col-sm-12 col-12"
            style={{ maxWidth: 250, width: "90%" }}
          />
          <img
            src="imagesMovies/slider9.jpg"
            className="img-card col-lg-4 col-md-6 col-sm-12 col-12"
            style={{ maxWidth: 250, width: "90%" }}
          />
          <img
            src="imagesMovies/slider9.jpg"
            className="img-card col-lg-4 col-md-6 col-sm-12 col-12"
            style={{ maxWidth: 250, width: "90%" }}
          />
          <img
            src="imagesMovies/slider9.jpg"
            className="img-card col-lg-4 col-md-6 col-sm-12 col-12"
            style={{ maxWidth: 250, width: "90%" }}
          />
          <img
            src="imagesMovies/slider9.jpg"
            className="img-card col-lg-4 col-md-6 col-sm-12 col-12"
            style={{ maxWidth: 250, width: "90%" }}
          />
          <img
            src="imagesMovies/slider9.jpg"
            className="img-card col-lg-4 col-md-6 col-sm-12 col-12"
            style={{ maxWidth: 250, width: "90%" }}
          />
        </div>
      </div>

      <script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js"
        integrity="sha384-KsvD1yqQ1/1+IA7gi3P0tyJcT3vR+NdBTt13hSJ2lnve8agRGXTTyNaBYmCR/Nwi"
        crossorigin="anonymous"
      ></script>

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js"
        integrity="sha384-nsg8ua9HAw1y0W1btsyWgBklPnCUAFLuTMS2G72MMONqmOymq585AcH49TLBQObG"
        crossorigin="anonymous"
      ></script>
    </div>
  );
}
