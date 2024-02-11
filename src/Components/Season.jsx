import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import useMovieData from '../Hooks/useMovieData';
function Season() {
    // const [ run , setRun] = useState(null);
    const { movieID, season, } = useParams();
    console.log(season)
    const navigate = useNavigate()
    const data = useMovieData({ movieID, season })
    const Episodes = data?.Episodes

    useEffect(() => {
        const elem = document.getElementById("episode");
        if (elem) {
            elem.scrollIntoView({ behavior: "smooth" });
        }
    }, [season])

    console.log(Episodes)
    console.log(data)
    return data?.Episodes ? (
        <div className="season">
            {
                data && Object.keys(data).map((key) => (
                    key === 'Title' || key === 'Season' ?
                        (

                            <h1 key={key}>
                                {
                                    key == "Season" &&
                                    <strong>{`${key} : `}</strong>
                                }

                                {`${data[key]}`}
                            </h1>

                        )
                        :
                        null

                ))
            }
            <h2 id="episode">Episodes</h2>
            <div className="EpisodesList" >
                {

                    data && Episodes.map((key, value) => (

                        <h3 key={key} onClick={() => navigate(`/series/${movieID}/season/${season}/episode/${value + 1}`)}>
                            {value + 1}. {key.Title}
                        </h3>
                    ))
                }
            </div>
            {
                data.Error && console.log(data[Error])
            }
        </div>
    ) : null
}

export default Season