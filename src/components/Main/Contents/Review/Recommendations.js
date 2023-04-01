import { useState, useEffect } from "react";

import axios from "axios";
import { API_KEY } from "../../../ConstKey";

function Recommendations(props) {
    const { id, type } = props;

    const [recommendations, setRecommendations] = useState()
    useEffect(() => {
        const fechData = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/${type === 'movie' ? 'movie' : 'tv'}/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`)
                if (response && response.data && response.data.results) {
                    // console.log('type:', type, 'id:', id)

                    const data = response.data.results.map(item => {
                        if (type === 'movie') {
                            return {
                                title: item.title,
                                imgUrl: item.backdrop_path,
                                average: (item.vote_average * 10).toFixed(0)

                            }
                        } else {
                            return {
                                imgUrl: item.backdrop_path,
                                average: (item.vote_average * 10).toFixed(0),
                                title: item.name
                            }
                        }

                    })
                    setRecommendations(data)
                }
            } catch (error) {
                console.log("error", error);
            }
        }
        fechData()

    }, [])
    // console.log('Recommendations', recommendations)
    return (<>
        <div className="recommendations-wrapper" >
            {recommendations && recommendations.map((item, index) => {
                return (
                    <div className="recommendations-card" key={index}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${item.imgUrl}`}
                            alt=""></img>
                        <div className="title">
                            <p>{item.title}</p>
                            <p>{item.average}%</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </>);
}

export default Recommendations;