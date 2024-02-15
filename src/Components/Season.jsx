import React, { useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import useMovieData from "../Hooks/useMovieData";
import { motion } from "framer-motion";
function Season() {
  const { movieID, season } = useParams();
  const navigate = useNavigate();
  const data = useMovieData({ movieID, season });
  const Episodes = data?.Episodes;
  const location = useLocation();

  useEffect(() => {
    const elem = document.getElementById("episode");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  }, [location, season]);

  return data?.Episodes ? (
    <div className="season" id="episode">
      {data &&
        Object.keys(data).map((key) =>
          key === "Title" || key === "Season" ? (
            <h1 key={key}>
              {key == "Season" && <strong>{`${key} : `}</strong>}

              {`${data[key]}`}
            </h1>
          ) : null
        )}
      <h2>Episodes</h2>
      <div className="EpisodesList">
        {data &&
          Episodes.map((episode, index) => (
            <motion.h3
              initial={{ opacity: 0}}
              whileInView={{opacity: 1}}
              viewport={{once:true}}
              transition={{duration:.2 , delay:index * .01}}
              
              key={`${index}-${episode.Title}`}
              onClick={() =>
                navigate(
                  `/series/${movieID}/season/${season}/episode/${index + 1}`
                )
              }
            >
              {index + 1}. {episode.Title}
            </motion.h3>
          ))}
      </div>
      {data.Error && console.log(data[Error])}
    </div>
  ) : null;
}

export default Season;
