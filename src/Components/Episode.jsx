import { useParams } from "react-router-dom";
import useMovieData from "../Hooks/useMovieData";
import NotFound from "./NotFound";
import Loader from "./Loader";
function Episode() {
  const { movieID, episode } = useParams();
  const data = useMovieData({ movieID, episode });
  console.log(data)
  console.log("hello")
  return data ? (
    <div
      className="episodeBg"
      style={{ backgroundImage: `url(${data.Poster})` }}
    >
      <div className="episode">
        <div className="episodeData">
          <img src={data.Poster} alt="" />

          <div className="episodeInfo">
            <h1 >{data.Title}</h1>
            {data &&
              Object.keys(data).map(
                (key, index, obj) =>
                  key != "Poster" &&
                  key != "Title" &&
                  key != "Response" &&
                  key != "imdbID" &&
                  data[key] != "N/A" &&
                  key != "Ratings" && (
                    <p key={index}>
                      <strong>{`${key} : `}</strong>
                      {`${data[key]}`}
                    </p>
                  )
              )}
            {data.Ratings.map((rating) => (
              <p>
                <strong>{`Source: ${rating.Source}`}</strong>:{" "}
                {`${rating.Value}`}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : <Loader/>;
}

export default Episode;
