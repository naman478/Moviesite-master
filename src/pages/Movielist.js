import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import MovielistCard from "./MovielistCard";
import "./Home.css";

export default function Movielist() {
  const [category, setCategory] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
      .then(res => res.json())
      .then(data => setCategory(data.results));
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredCategory = category.filter((movie) =>
    movie.original_title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="poster">
        {/* Carousel */}
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={4}
          infiniteLoop={true}
          showStatus={false}
        >
          {category.map((movie) => (
            <div key={movie.id}>
              <div className="posterImage">
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  alt={movie.original_title}
                />
              </div>

              <div className="popular_movie_content">
                <h1 className="h1">{movie.original_title}</h1>
                <div className="middle">
                  <h2>{movie.release_date}</h2>
                  <h2>{movie.vote_average}<i className="fas fa-star" /></h2>
                </div>
                <div className="p">
                  <p>{movie.overview}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>

        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by title"
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
          <button className="search-button">
            Search
          </button>
        </div>
      </div>

      <MovielistCard category={filteredCategory} type={type} />
    </>
  );
}
