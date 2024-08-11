import React, { useState } from "react";
import Modal from "react-modal";
import "./MovielistCard.css";

Modal.setAppElement('#root');

function MovielistCard({ category, type }) {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (movie) => {
    setSelectedMovie(movie);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedMovie(null);
  };

  return (
    <>
      <h1 className="heading">
        {type}
        <i className="fas fa-angle-double-right" />
      </h1>
      <div className="cards" id="cards_margin">
        {category.map((movie) => (
          <div
            className="cards_inside"
            key={movie.id}
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            onClick={() => openModal(movie)}
          >
            <div className="cards_content">
              <h1 className="cards_content_heading">{movie.original_title}</h1>
              <div className="cards_content_middle">
                <h3>{movie.release_date}</h3>
                <h3>
                  {movie.vote_average}
                  <i className="fas fa-star" />
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal
  isOpen={modalIsOpen}
  onRequestClose={closeModal}
  className="Modal"
  overlayClassName="Overlay"
>
  {selectedMovie && (
    <div className="modal_content">
      <button onClick={closeModal} className="close_button">
        &times;
      </button>
      <div className="modal_header">
        <div className="modal_image_container">
          <img
            src={`https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path}`}
            alt={selectedMovie.original_title}
            className="modal_image"
          />
        </div>
        <div className="modal_details">
          <h1 style={{color:"Red"}}>{selectedMovie.original_title}</h1>
          <p>Release Date: {selectedMovie.release_date}</p>
          <p>Rating: {selectedMovie.vote_average}/10</p>
          <p>Language: {selectedMovie.original_language}</p>
          <p>Popularity: {selectedMovie.popularity}</p>
          <p>Vote average: {selectedMovie.vote_average}</p>
          <p>Vote count: {selectedMovie.vote_count}</p>
        </div>
      </div>
      <div className="modal_overview">
        <h2 style={{color:"Blue"}}>Overview:</h2>
        <p>{selectedMovie.overview}</p>
      </div>
    </div>
  )}
</Modal>

    </>
  );
}

export default MovielistCard;
