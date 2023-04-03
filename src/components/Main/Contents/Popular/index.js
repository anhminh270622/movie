import { useState, useEffect } from "react";
import axios from "axios";
import ActionAreaCard from "../ActionAreaCard";
import "./Popular.scss"
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import { API_KEY } from "../../../ConstKey";
function Popular() {
    const [popular, setPopular] = useState('')
    const [active, setActive] = useState(true);
    const moment = require('moment');
    useEffect(() => {
        const fechData = async () => {
            const response = await axios.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}`)
            if (response && response.data && response.data.results) {

                const data = response.data.results.map((movie) => {
                    return {
                        id: movie.id,
                        title: movie.name,
                        imageUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                        releaseDate: moment(movie.first_air_date).format('MMM DD, YYYY'),
                        type: movie.media_type,
                        rating: (movie.vote_average * 10).toFixed(0),
                        background: movie.backdrop_path,
                    }
                })
                setPopular(data)
            }
        }
        fechData()
    }, [])
    return (<>
        <div className="Popular">
            <div className="Popular-top">
                <h1>What's Popular</h1>
                <div className="switch-toggle " >
                    <button className="active">
                        On TV</button>
                    <button >
                        In Theaters</button>
                </div>

            </div>
            <ScrollMenu>
                {popular && popular.map(movie => (
                    <div key={movie.id} className="Popular-container">
                        <ActionAreaCard
                            id={movie.id}
                            type={movie.type}
                            title={movie.title}
                            imageUrl={movie.imageUrl}
                            releaseDate={movie.releaseDate}
                            rating={movie.rating}
                            background={movie.background}
                        />
                    </div>
                ))}
            </ScrollMenu>

        </div>
    </>);
}

export default Popular;