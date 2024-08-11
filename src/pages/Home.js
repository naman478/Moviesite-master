import React from "react";
import "./Home.css";
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import  Slide from "./Slide";

function Home() {
  const [popular_movie, setPopular_movie] = useState([]);
  const [trending_movie, setTrending_movie] = useState([]);
  const [upcoming_movie, setUpcoming_movie] = useState([]);
  const [top_rated_movie, setTop_rated_movie] = useState([]);

  const url_popular = `https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`;
  const  url_trending=`https://api.themoviedb.org/3/trending/movie/day?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
  const url_upcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`;
  const url_top_rated = `https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`;

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const response1 = await fetch(url_popular);
    const response2 = await fetch(url_trending);
    const response3 = await fetch(url_top_rated);
    const response4 = await fetch(url_upcoming);

    const data1 = await response1.json();
    const data2 = await response2.json();
    const data3 = await response3.json();
    const data4 = await response4.json();

    setPopular_movie(data1.results);
    setTrending_movie(data2.results);
    setUpcoming_movie(data3.results);
    setTop_rated_movie(data4.results);
  }

  return (
    <>
      <div className="poster">
        <h1>Trending  <i className="fas fa-angle-double-right" /> <img src=""/></h1>
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={4}
          infiniteLoop={true}
          showStatus={false}
        >
          {trending_movie.map((movie) => (
            <div>
              <div className="posterImage">
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                />
                </div>

                <div className="popular_movie_content">

                 <h1 className="h1">{movie.original_title}</h1>

                 <div className="middle">
                    <h2>{movie.release_date}</h2>
                    <h2>{ movie.vote_average}<i className="fas fa-star" /></h2>
                 </div>
                
                <div className="p">
                 <p>{movie.overview}</p>
                </div>
               
                </div>
              </div>

          ))}
        </Carousel>
      
      </div>

      <Slide movie_category ={ popular_movie } name={"POPULAR MOVIES"}/>
      <Slide movie_category ={ upcoming_movie } name={'UPCOMING MOVIES'}/>
      <Slide movie_category ={ trending_movie } name={'TRENDING MOVIES'}/>
      <Slide movie_category ={ top_rated_movie } name={'TOP RATED MOVIES'}/>
    </> 
  );
    }

export default Home;
