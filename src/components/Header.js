import React from 'react'
import "./Header.css"
import {NavLink,Link} from "react-router-dom"

function Header() {
  return (
    <div className="header">
        <div className="header_left">
            
          <Link to="/"><img  className="header_image" 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"/>
          </Link>
          <NavLink className="Link" to="/">Home</NavLink>
          <NavLink className="Link" to="/movies/popular">Popular</NavLink>
          <NavLink className="Link" to="/movies/top_rated">Top-Rated</NavLink>
          <NavLink className="Link" to="/movies/upcoming">Upcoming</NavLink>
        </div>
    </div>
  )
}

export default Header