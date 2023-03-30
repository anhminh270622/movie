// import CardVideo from "./CardVideo";
import "./Latest.scss"
import { useState, useEffect } from "react";
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import ActionAreaCard from "../ActionAreaCard";
import axios from "axios";
import { API_KEY } from "../../../ConstKey";
import { type } from "@testing-library/user-event/dist/type";
function Latest() {
    const moment = require('moment');
    const [topRate, setTopRate] = useState('')
    const [status, setStatus] = useState('tv')
    const [active, setActive] = useState(true)

    const [tvButtonDisabled, setTvButtonDisabled] = useState(false);
    const [movieButtonDisabled, setMovieButtonDisabled] = useState(false);

    useEffect(() => {
        const fechData = async () => {
            const response = await axios.get(`https://api.themoviedb.org/3/${status}/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
            if (response && response.data && response.data.results) {
                const data = response.data.results.map(item => {
                    return {
                        id: item.id,
                        title: item.title || item.name,
                        type: item.media_type,
                        description: item.overview,
                        imageUrl: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                        rating: (item.vote_average * 10).toFixed(0),
                        releaseDate: moment(item.release_date).format('MMM DD, YYYY'),

                    }
                })
                setTopRate(data)
            }

        }
        fechData()
    }, [status])
    const handleClick = () => {
        if (status === 'tv') {
            setStatus('movie');
            setMovieButtonDisabled(true);
            setTvButtonDisabled(false);


        } else {
            setStatus('tv');
            setMovieButtonDisabled(false);
            setTvButtonDisabled(true);
        }
        setActive(!active)
    }
    return (<>
        <div className="Latest_wrapper">
            <div className="Latest-top">
                <h1>
                    Get Top Rated</h1>
                <div className="switch-toggle">
                    <button disabled={tvButtonDisabled} className={status === 'tv' ? 'active' : ''} onClick={handleClick}>
                        TV</button>
                    <button disabled={movieButtonDisabled} className={status === 'movie' ? 'active' : ''} onClick={handleClick}>
                        Movie</button>
                </div>
            </div>
            <ScrollMenu>
                {topRate && topRate.map((item, index) => {

                    return (
                        <ActionAreaCard
                            id={item.id}
                            type={item.type}
                            title={item.title}
                            imageUrl={item.imageUrl}
                            releaseDate={item.releaseDate}
                            description={item.description}
                            rating={item.rating}
                        />

                    )
                }
                )}
                <div className="Latest-container">
                </div>
            </ScrollMenu>

        </div>
    </>);
}

export default Latest;