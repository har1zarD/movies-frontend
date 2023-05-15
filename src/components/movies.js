import React, { useState, useEffect } from "react";
import "./movies.css";
import DateSelect from "./Date";
import selectedDate from "./Date";

function Movies() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedProjection, setSelectedProjection] = useState(null);
  const [date, setDate] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await fetch("/api/movies");
        const data = await res.json();
        setMovies(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchMovies();
  }, []);

  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./login";
  };

  const handleImageClick = (event) => {
    setSelectedProjection(event.target.id);
    setShowConfirmation(true);
  };

  const handleDateSelect = (dateValue) => {
    setDate(dateValue);
  };
  const handleConfirm = () => {
    const confirmationNumber = Math.floor(Math.random() * 100000);
    alert(`Vaša oznaka za kupovinu karata je: ${confirmationNumber}`);
    setShowConfirmation(false);
  };

  const handleCancel = () => {
    setSelectedProjection(null);
    setDate(null);
    setShowConfirmation(false);
  };

  const getTitleById = (id) => {
    const titles = {
      movie1: "Fast and Furious",
      movie2: "Jumanji, Welcome to the Jungle",
      movie3: "Avatar",
      movie4: "Batman",
      movie5: "Spider-man, No way Home",
      movie6: "Joker",
      movie7: "Scream",
      movie8: "Five Years",
      movie9: "Alladin",
      movie10: "Space Jam",
    };
    return titles[id] || "";
  };

  const timeString = new Date(movies[0]?.showtimes?.[0]).toLocaleTimeString();
  console.log(timeString);
  const dateObj = new Date(`2000-01-01T${timeString}:00`);
  const formattedTime = dateObj.toLocaleTimeString();
  console.log(formattedTime);

  return (
    <div>
      <ul className='navbar'>
        <li className='current'>
          <a href='#' data-hover='TOP FILMOVI'>
            {" "}
            TOP FILMOVI
          </a>
        </li>
        <li>
          {" "}
          <a href='/todmovies' data-hover='DANAS U KINU'>
            DANAS U KINU
          </a>
        </li>
        <li>
          <a href='/soonmovies' data-hover='USKORO U KINU'>
            USKORO U KINU
          </a>
        </li>
        <li>
          <button onClick={logOut} className='btn btn-primary'>
            Log Out
          </button>
        </li>
      </ul>
      <div>
        <h4 style={{ color: "white", fontWeight: "700" }} className='text-center my-4 leading-6'>
          TOP FILMOVI
        </h4>
      </div>

      <div className='container'>
        <div className='row justify-content-around align-items-center'>
          <img
            src='imagesMovies/slider1.jpg'
            className='img-card col-lg-4 col-md-6 col-sm-12 col-12'
            style={{ maxWidth: 250, width: "90%" }}
            id='movie1'
            onClick={handleImageClick}
          />
          <img
            src='imagesMovies/slider2.jpg'
            className='img-card col-lg-4 col-md-6 col-sm-12 col-12'
            style={{ maxWidth: 250, width: "90%" }}
            id='movie2'
            onClick={handleImageClick}
          />
          <img
            src='imagesMovies/slider3.jpg'
            className='img-card col-lg-4 col-md-6 col-sm-12 col-12'
            style={{ maxWidth: 250, width: "90%" }}
            id='movie3'
            onClick={handleImageClick}
          />
        </div>
      </div>

      {/* Modal for selecting projection and date */}

      {showConfirmation && (
        <div
          className='modal'
          style={{
            display: "block",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 9999,
          }}
        >
          <div className='modal-dialog' style={{ margin: "10% auto", maxWidth: 600 }}>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title'>Potvrda kupovine karata</h5>
                <button type='button' className='close' onClick={handleCancel}>
                  <span aria-hidden='true'>×</span>
                </button>
              </div>
              <div className='modal-body'>
                <h6>Odaberite projekciju i datum:</h6>
                <div className='form-group'>
                  <label htmlFor='projectionSelect'>Projekcija:</label>
                  <h3 className='mb-4 mt-4'>Odabrali ste film: {getTitleById(selectedProjection)}</h3>
                </div>
                <formatData>
                  <DateSelect handleDateSelect={handleDateSelect} selectedDate={selectedDate} />
                </formatData>
                <div className='form-group'>
                  <div id='projectionTimeSelect' className='btn-group' role='group'>
                    <button type='button' className='btn btn-secondary'>
                      <div className='projection-info'>
                        <div className='projection-info-time'>{timeString}</div>
                        <div className='projection-info-hall'>Dvorana 1</div>
                        <div className='projection-info-type'>2D</div>
                        <div className='projection-info-price'>{movies.price} KM</div>
                      </div>
                    </button>
                    <button type='button' className='btn btn-secondary'>
                      <div className='projection-info'>
                        <div className='projection-info-time'>{timeString}</div>
                        <div className='projection-info-hall'>Dvorana 2</div>
                        <div className='projection-info-type'>3D</div>
                        <div className='projection-info-price'>{movies.price} KM</div>
                      </div>
                    </button>
                    <button type='button' className='btn btn-secondary'>
                      <div className='projection-info'>
                        <div className='projection-info-time'>{movies.timeString}</div>
                        <div className='projection-info-hall'>Dvorana 3</div>
                        <div className='projection-info-type'>4DX</div>
                        <div className='projection-info-price'>{movies.price} KM</div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className='modal-footer'>
                <button type='button' className='btn btn-secondary' onClick={handleCancel}>
                  Odustani
                </button>
                <button
                  type='button'
                  className='btn btn-primary'
                  onClick={handleConfirm}
                  disabled={!selectedProjection}
                >
                  Potvrdi
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Movies;
