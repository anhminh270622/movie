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
    const [week, setWeek] = useState('day');
    useEffect(() => {
        console.log('week', week)
    }, [week]);

    const handleClick = () => {
        setWeek(week === 'day' ? 'week' : 'day');
    }
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`https://api.themoviedb.org/3/trending/all/${week}?api_key=${API_KEY}`)
            if (response && response.data && response.data.results) {
                const data = response.data.results.map(movie => {
                    return {
                        id: movie.id,
                        title: movie.title,
                        type: movie.media_type,
                        description: movie.overview,
                        imageUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                        rating: movie.vote_average,
                        releaseDate: movie.release_date
                    }
                })
                setTrending(data)
            }
        }
        fetchData()
    }, [week])

    return (
        <div className="trending">
            <button onClick={() => handleClick()}>Click</button>
            <div className="trending-top">
                <h1>Trending</h1>
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
                        />


                    </div>
                ))}
            </ScrollMenu>
        </div>
    );
}
export default Trending;