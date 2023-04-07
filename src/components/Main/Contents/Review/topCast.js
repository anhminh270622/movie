import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY, ERROR_IMG } from "../../../ConstKey/"
function TopCart(props) {
    const { id } = props;
    const type = props.type || 'movie';

    const [topCast, setTopCast] = useState('')
    useEffect(() => {
        const fechData = async () => {
            const response = await axios.get(`https://api.themoviedb.org/3/${type === 'movie' ? 'movie' : 'tv'}/${id}/credits?api_key=${API_KEY}`)
            if (response && response.data) {
                const topBilledCast = response.data.cast.slice(0, 9)
                setTopCast(topBilledCast)
            }
        }
        fechData()
    }, [])
    // console.log(topCast);

    return (<>
        <div className="cast">
            {topCast && topCast.map((item, index) => {
                return (
                    <div
                        className="card"
                        key={index}>
                        <img
                            src={item.profile_path !== null ? `https://image.tmdb.org/t/p/w500${item.profile_path}` : ERROR_IMG}
                            alt=""
                        ></img>
                        <div className="text">
                            <p>{item.name}</p>
                            <p>{item.character}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    </>);
}

export default TopCart;