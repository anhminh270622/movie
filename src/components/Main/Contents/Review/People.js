import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY } from "../../../ConstKey"
function People(props) {
    const { id } = props;
    const [imageTrending, setImageTrending] = useState()
    useEffect(() => {
        const fechData = async () => {

            const people = await axios.get(`https://api.themoviedb.org/3/movie/${id}/images?api_key=${API_KEY}`)

            if (people && people.data) {
                console.log(people.data)

                setImageTrending(people.data)
            }


        }
        fechData()
        // setBgrFather(imageTrending);
    }, [id])
    return (<>
        <div className="people">
            <ul>
                <li>
                    <h4>Social</h4>
                </li>{' '}
                <li>
                    <h4>Reviews</h4>
                </li>{' '}
                <li>
                    <h4>Discussions</h4>
                </li>
            </ul>
            {/* <div>
                {imageTrending && imageTrending.map((item) => {
                    return (
                        <div>
                            {item.posters}
                        </div>
                    )


                })}
            </div> */}

        </div>
    </>);
}

export default People;