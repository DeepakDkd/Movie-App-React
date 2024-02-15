import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useMovieData from "../Hooks/useMovieData";
import Season from "./Season";
import Loader from "./Loader";
import {motion} from "framer-motion";

function Card() {
  const { movieID } = useParams();
  const movie = useMovieData({ movieID });
  const navigate = useNavigate();
  
  return movie ? (
    <div className="cardBg" style={{ backgroundImage: `url(${movie.Poster})` }}>
      <div className="card">
        <div className="movieCard">
          <div className="moviePoster">
            <img
              src={
                movie.Poster == "N/A"
                  ? "https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg"
                  : movie.Poster
              }
              alt={movie.Title}
            />
          </div>
          <div className="movieInfo">
            <h2 style={{ textAlign: "center" }}>{movie.Title} </h2>
            {movie &&
              Object.keys(movie).map((key, index) =>
                key === "Poster" ||
                movie[key] == "N/A" ||
                key === "Title" ||
                key === "Ratings" ||
                key === "Response" ||
                key === "imdbID" ? null : (
                  <p key={key}>
                    <strong>{`${key} : `}</strong> {`${movie[key]}`}
                  </p>
                )
              )}
            {movie.Ratings.map((rating, index) => (
              <p key={index}>
                <strong>Ratings : </strong>
                {rating.Source} - {rating.Value}
              </p>
            ))}

            <br />
          </div>
        </div>
        {movie?.totalSeasons && (
          <div className="seasonBtn">
            <h3>{movie.totalSeasons} season available</h3>
            <div>
              {Array.from({ length: movie.totalSeasons }).map((_, i) => (
                <motion.button
                initial={{opacity:0}}
                whileInView={ { opacity: 1 } }
                viewport={{once:true}}
                transition={{duration:.2, ease:"easeInOut", delay:i*0.1}}
                  onClick={() => navigate(`/movie/${movie.imdbID}/season/${i + 1}`)}
                  key={i + 1}
                >
                  {i + 1}
                </motion.button>
              ))}
            </div>
          </div>
        )}
        <Season />
      </div>
    </div>
  ) : <Loader/>;
}

export default Card;
