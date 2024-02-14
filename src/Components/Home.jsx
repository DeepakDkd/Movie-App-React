import React from "react";
import Search from "./Search";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="homepage">
      <div className="home-bg"></div>

      <div className="intro-section">
        <h2>Welcome to CineScore!</h2>
        <p>
          Discover and review your favorite movies and series. Use the search
          bar above to find your next movie night pick!
        </p>
      </div>

      <Search styles={"search-space"} />

      <p className="PopularP">Popular Picks</p>
      <div className="popularpicks">
        <Link to={"/search/Avengers/page/1"}>
          <button>Avengers</button>
        </Link>
        <Link to={"/search/Game of Thrones/page/1"}>
          <button>Game of Thrones</button>
        </Link>

        <Link to={"/search/Doctor Who/page/1"}>
          <button>Doctor Who</button>
        </Link>
        <Link to={"/search/Pokemon/page/1"}>
          <button>Pokemon</button>
        </Link>
        <Link to={"/search/James Bond/page/1"}>
          <button>James Bond</button>
        </Link>
        <Link to={"/search/The Witcher/page/1"}>
          <button>The Witcher</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
