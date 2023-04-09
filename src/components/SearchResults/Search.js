import { ERROR_IMG } from '../ConstKey';
import { useNavigate } from 'react-router-dom';
import { animateScroll } from 'react-scroll';

function Search(props) {
    const {
        id,
        imageUrl,
        title,
        overview,
        date,
        mediaType,
        background,
        rating
    } = props
    const navigate = useNavigate();
    const handleClick = () => {
        console.log('rating', rating)
        navigate(`/search/${mediaType}/${id}`,
            {
                state:
                {
                    id: id,
                    title: title,
                    imageUrl: imageUrl,
                    background: background,
                    type: mediaType,
                    releaseDate: date,
                    description: overview,
                    rating: rating
                }
            })
        animateScroll.scrollToTop({ duration: 500 });
    }
    return (<>
        <div className="container">
            <div className="image">
                <img
                    onClick={handleClick}
                    src={imageUrl === null || imageUrl === undefined ? ERROR_IMG : `https://image.tmdb.org/t/p/w500${imageUrl}`}
                    alt={imageUrl}
                />
            </div>
            <div className="action">
                <div className="title">{title}</div>
                <p className="date">{date}</p>
                <p className="overview">{overview}</p>
            </div>
        </div>

    </>);
}

export default Search;