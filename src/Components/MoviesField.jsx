import { useEffect } from "react";
import { useParams, useNavigate , useLocation} from "react-router-dom";
import useMovieData from "../Hooks/useMovieData";
import NotFound from "./NotFound";
import Loader from "./Loader";

function MoviesField() {
  const { title, page } = useParams();
  const data = useMovieData({ title, page });
  console.log(data)
  let navigate = useNavigate();
  const location = useLocation()

  const handlePrevBtn = () => {
    if (page > 0) {
      navigate(`/search/${title}/page/${Number(page) - 1}`);
    }
  };
  const handleNextBtn = () => {
    if (page < Math.ceil(data?.totalResults / 10)) {
      navigate(`/search/${title}/page/${Number(page) + 1}`);
    }
  };

  useEffect(() => {
    const elem = document.getElementById("focus");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  if(data == null){
    return <Loader/>
  }
  return (
    <>
      <div className="moviesField">
        <p className="showingRes" id="focus">
          {data?.totalResults
            ? `We've found ${data?.totalResults} results for "${data?.Search[0].Title}"`
            : <NotFound title={title}/>}
        </p>
        <div className="movieResults">
          {data &&
            data?.Search?.map((movie) => (
              <div
                key={movie.imdbID}
                className="movie-card"
                onClick={() => navigate(`/movie/${movie.imdbID}`)}
              >
                <img
                  src={
                    movie.Poster == "N/A"
                      ? "https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg"
                      : movie.Poster
                  }
                  alt=""
                />
                <div className="title">
                  <h1>{movie.Title}</h1>
                  <p>
                    {movie.Type} Year : {movie.Year}
                  </p>
                </div>
              </div>
            ))}
          {data && data.totalResults !== undefined ? (
            <div className="fieldPageBtn">
              <p>
                Page - {page} / {Math.ceil(data?.totalResults / 10)}
              </p>
              <div className="pageBtns">
                <input
                  type="button"
                  value="Previous"
                  onClick={handlePrevBtn}
                  disabled={page == 1 && true}
                />
                <input
                  type="button"
                  value="Next"
                  onClick={handleNextBtn}
                  disabled={page >= data.totalResults / 10 && true}
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default MoviesField;
