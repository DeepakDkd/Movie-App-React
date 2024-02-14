import React, { useEffect } from "react";
import { useParams, useNavigate , useLocation } from "react-router-dom";
import useMovieData from "../Hooks/useMovieData";
function Season() {
  // const [ run , setRun] = useState(null);
  const { movieID, season } = useParams();
  const navigate = useNavigate();
  const data = useMovieData({ movieID, season });
  const Episodes = data?.Episodes;
  const location = useLocation()

  useEffect(() => {
    const elem = document.getElementById("episode");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return data?.Episodes ? (
    <div className="season"  id="episode">
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
          Episodes.map((key, value) => (
            <h3
              key={key}
              onClick={() =>
                navigate(
                  `/series/${movieID}/season/${season}/episode/${value + 1}`
                )
              }
            >
              {value + 1}. {key.Title}
            </h3>
          ))}
      </div>
      {data.Error && console.log(data[Error])}
    </div>
  ) : null;
}

export default Season;
