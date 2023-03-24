import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY } from "../../../ConstKey";
function CardVideo() {
    const [latest, setLatest] = useState('')
    useEffect(() => {
        const fechData = async () => {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
            if (response && response.data && response.data.results) {
                const data = response.data.results.map((movie) => {
                    return {
                        id: movie.id,
                        imageUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                        title: movie.title,
                    }
                })
                setLatest(data)
            }
        }
        fechData()
    }, [])
    return (
        <>
            {latest && latest.map((movie) => {
                return (
                    <div className="cardVideo_wrapper" key={movie.id}>
                        <div className="top">
                            <div className="top-video">
                                <img src={movie.imageUrl} alt="">
                                </img>
                            </div>
                            <div className="top-action">

                            </div>
                        </div>
                        <div className="title">
                            <h2>{movie.title}</h2>
                            <p>Review</p>
                        </div>
                    </div>
                )

            })}



        </>
    );
}

export default CardVideo;