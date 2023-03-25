import { useState, useEffect } from "react";
import axios from "axios";
import ActionAreaCard from "../ActionAreaCard";
import "./Popular.scss"
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import { API_KEY } from "../../../ConstKey";
function Popular() {
    const [popular, setPopular] = useState('')
    useEffect(() => {
        const fechData = async () => {
            const response = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`)
            if (response && response.data && response.data.results) {

                const data = response.data.results.map((movie) => {
                    return {
                        id: movie.id,
                        title: movie.name,
                        imageUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                        releaseDate: movie.first_air_date,
                        type: movie.media_type
                    }
                })
                setPopular(data)
            }
        }
        fechData()
    }, [])
    return (<>
        <div>
            <div className="Popular-top">
                <h1>What's Popular</h1>
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
                        />
                    </div>
                ))}
            </ScrollMenu>

        </div>
    </>);
}

export default Popular;