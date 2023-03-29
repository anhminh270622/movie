import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY } from "../../../ConstKey"
function People(props) {
    const { id, setBgrFather } = props;
    const [imageTrending, setImageTrending] = useState()
    useEffect(() => {
        const fechData = async () => {

            const people = await axios.get(`https://api.themoviedb.org/3/movie/${id}/images?api_key=${API_KEY}`)

            if (people && people.data) {
                const { backdrops, posters, logos } = people.data;
                const image = {

                    backdrops: backdrops[0].file_path,
                    posters: posters.map(item => item.file_path),
                    logos: logos.map(item => item.file_path)
                }
                setImageTrending(image)
            }


        }
        fechData()
        // setBgrFather(imageTrending);
    }, [])
    // setBgrFather(imageTrending)

    // console.log("image", imageTrending)
    return (<>
        <div className="people">
            {/* {imageTrending && (
                <img src={`https://image.tmdb.org/t/p/w500${imageTrending}`} alt=""></img>
            )} */}

            {/* People{id} */}
        </div>
    </>);
}

export default People;