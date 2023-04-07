import { useState, useEffect } from 'react';

import axios from 'axios';
import { API_KEY, ERROR_IMG } from '../../../ConstKey';
import ActionAreaCard from '../ActionAreaCard';
function Recommendations(props) {
    const { id, type } = props;
    const [recommendations, setRecommendations] = useState();
    const moment = require('moment');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/${type === 'movie' ? 'movie' : 'tv'
                    }/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`
                );
                if (response && response.data && response.data.results) {
                    // const data = response.data.results.reduce((acc, item) => {
                    //     const imageUrl = item.backdrop_path;
                    //     if (imageUrl) {
                    //         acc.push({
                    //             id: item.id,
                    //             title: item.title || item.name,
                    //             imageUrl1: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                    //             imageUrl: `https://image.tmdb.org/t/p/w500${imageUrl}`,
                    //             average: (item.vote_average * 10).toFixed(0),
                    //             releaseDate: moment(item.first_air_date).format('MMM DD, YYYY'),
                    //             type: item.media_type,
                    //             rating: (item.vote_average * 10).toFixed(0),
                    //             background: item.backdrop_path,
                    //             backgroundRecommend: 'recommendations'
                    //         });
                    //     }
                    //     return acc;
                    // }, []);

                    const data = response.data.results.map((item) => {
                        const imageUrl = item.backdrop_path;

                        return {
                            id: item.id,
                            title: item.title || item.name,
                            imageUrl1: item.poster_path,
                            imageUrl: imageUrl,
                            average: (item.vote_average * 10).toFixed(0),
                            releaseDate: moment(item.first_air_date).format('MMM DD, YYYY'),
                            type: item.media_type,
                            rating: (item.vote_average * 10).toFixed(0),
                            background: item.backdrop_path,
                            backgroundRecommend: 'recommendations',
                        };
                    });
                    setRecommendations(data);
                }
            } catch (error) {
                console.log('Error fetching recommendations:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <div className="recommendations-wrapper">
                {recommendations && recommendations.length > 0 ? (
                    recommendations.map((item, index) => (
                        <div
                            className="recommendations-card"
                            key={index}>
                            <ActionAreaCard
                                id={item.id}
                                imageUrl1={item.imageUrl1}
                                imageUrl={item.imageUrl}
                                title={item.title}
                                background={item.background}
                                rating={item.rating}
                                releaseDate={item.releaseDate}
                                backgroundRecommend={item.backgroundRecommend}
                                average={item.average}
                            />
                        </div>
                    ))
                ) : (
                    <div>No data</div>
                )}
            </div>
        </>
    );
}

export default Recommendations;
