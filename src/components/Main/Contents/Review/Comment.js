import { useState, useEffect } from "react";
import { API_KEY } from "../../../ConstKey";
import axios from "axios";

function Comment(props) {
    const { id } = props;
    const [comment, setComent] = useState('')
    useEffect(() => {
        const fechData = async () => {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
            if (response && response.data && response.data.results) {
                const data = response.data.results.slice(0, 3)
                data.map((item) => {
                    return {
                        avatar: item.author_details.avatar_path,
                        content: item.content,
                        date: item.created_at,
                        name: item.author_details.username,
                        rating: item.author_details.rating
                    }
                })
                setComent(data)
            }

        }
        fechData()
    }, [])
    console.log('comment', comment)
    return (<>
        {comment && comment.map((item, index) => {
            return (
                <div className="review" key={index}>
                    <div className="name">
                        <img
                            src="https://www.gravatar.com/avatar/5bfcd882a57748ce30d3e9caea9f9c44.jpg?s=64"
                            alt=""></img>
                    </div>
                    <div>
                        <div className="comment">
                            {item.content}
                        </div>
                    </div>
                </div>
            )
        })}

    </>);
}

export default Comment;