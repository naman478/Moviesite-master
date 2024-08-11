import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Slide({ movie_category,name }) {

  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ]
  }

    return (
      <div style={{width:"90%",margin:"auto"}}>
        <h2  style={{margin:"15px 20px"}}>{name} <i className="fas fa-angle-double-right" /></h2>
        <Slider {...settings}>
       
    {  
      movie_category.map((movie) => (
      <div className="cards" style={{margin:"15px"}}>
      <div className="cards_inside" style={{
        backgroundImage: `url(${`https://image.tmdb.org/t/p/original${
            movie && movie.backdrop_path
          }`})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '290px',
        margin:"15px"
      }}>
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
      </div>
      ))}
  
        </Slider>
      </div>
    );
  }
export default Slide;