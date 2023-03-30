import { useState, useEffect } from "react";

import ActionAreaCard from "../ActionAreaCard";
import "./Trending.scss";
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import axios from "axios";
import { API_KEY } from "../../../ConstKey";
// import ReviewTrending from "./ReviewTrending";

function Trending() {

    const [trending, setTrending] = useState('');
    const [status, setStatus] = useState('day');
    // const [active, setActive] = useState(true);
    const [dayButtonDisabled, setDayButtonDisabled] = useState(false);
    const [weekButtonDisabled, setWeekButtonDisabled] = useState(false);
    const moment = require('moment');
    const handleClickWeek = (e) => {
        if (status === 'day') {
            setStatus('week');
            setDayButtonDisabled(false);
            setWeekButtonDisabled(true)
        } else {
            setStatus('day');
            setWeekButtonDisabled(false);
            setDayButtonDisabled(true)
        }
    }
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`https://api.themoviedb.org/3/trending/all/${status}?api_key=${API_KEY}`)
            if (response && response.data && response.data.results) {
                const data = response.data.results.map(movie => {
                    return {
                        id: movie.id,
                        title: movie.title || movie.name,
                        type: movie.media_type,
                        description: movie.overview,
                        imageUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,

                        rating: (movie.vote_average * 10).toFixed(0),
                        releaseDate: moment(movie.release_date).format('MMM DD, YYYY'),


                    }
                })
                setTrending(data)
            }
        }
        fetchData()
    }, [status])

    return (
        <div className="trending">

            <div className="trending-top">
                <h1>Trending</h1>
                <div className="switch-toggle " >
                    <button disabled={dayButtonDisabled} className={status === 'day' ? 'active' : ''} onClick={() => handleClickWeek()}>
                        To day</button>
                    <button disabled={weekButtonDisabled} className={status === 'week' ? 'active' : ''} onClick={() => handleClickWeek()}>
                        This week</button>
                </div>

            </div>
            <ScrollMenu>
                {trending && trending.map(movie => (
                    <div key={movie.id} className="trending-container">
                        <ActionAreaCard
                            id={movie.id}
                            type={movie.type}
                            title={movie.title}
                            imageUrl={movie.imageUrl}
                            releaseDate={movie.releaseDate}
                            description={movie.description}
                            rating={movie.rating}
                        />


                    </div>
                ))}
            </ScrollMenu>
        </div>
    );
}
export default Trending;