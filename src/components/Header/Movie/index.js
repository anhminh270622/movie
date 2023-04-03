import "./Movie.scss"
import { API_KEY } from "../../ConstKey";
import axios from "axios";
import { useState, useEffect } from "react";
import moment from "moment/moment";
import ActionAreaCard from "../../Main/Contents/ActionAreaCard";
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Padding } from '@mui/icons-material';
import { animateScroll } from 'react-scroll';
function Movie() {
    const [movie, setMovie] = useState('')
    const [page, setPage] = useState(1);
    useEffect(() => {
        const fechData = async () => {
            const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=vi&page=${page}`)
            if (response && response.data && response.data.results) {
                const data = response.data.results.map((movie) => {
                    return {
                        id: movie.id,
                        title: movie.title,
                        imageUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                        releaseDate: moment(movie.first_air_date).format('MMM DD, YYYY'),
                        type: 'movie',
                        rating: (movie.vote_average * 10).toFixed(0),
                        background: movie.backdrop_path,
                    }
                })
                setMovie(data)
            }
        }
        fechData()
    }, [page])
    const handleChangePage = (event, value) => {
        setPage(value);
        console.log('value', value);
        animateScroll.scrollToTop({ duration: 500 });
    };
    return (<>
        <div className="movie">
            <h1>Movie</h1>
            <div className="movie-wrapper">
                {movie && movie.map((item) => {
                    return (
                        <div className="movie-item">
                            < ActionAreaCard
                                id={item.id}
                                title={item.title}
                                imageUrl={item.imageUrl}
                                type={item.type}
                                rating={item.rating}
                                background={item.background}
                                releaseDate={item.releaseDate}
                            /></div>

                    )
                })}
            </div>
            <Stack spacing={2}>
                <Pagination
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        paddingTop: 10,
                    }}
                    count={10}
                    page={page}
                    onChange={handleChangePage}
                    renderItem={(item) => (
                        <PaginationItem
                            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                            {...item}
                        />
                    )}
                />
            </Stack>
        </div>
    </>);
}

export default Movie;