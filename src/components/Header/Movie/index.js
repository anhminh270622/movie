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
    const [search, setSearch] = useState(null)
    const [input, setInput] = useState('')
    useEffect(() => {
        const fechData = async () => {
            const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&page=${page || 1}`)
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
    const handleSearch = async (event, value) => {
        setInput(event.target.value);
        const responseSearch = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${input}`)
        if (responseSearch && responseSearch.data && responseSearch.data.results) {
            const searchResult = responseSearch.data.results.map((item) => {
                return {
                    id: item.id,
                    title: item.title,
                    imageUrl: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                    releaseDate: moment(item.first_air_date).format('MMM DD, YYYY'),
                    type: 'movie',
                    rating: (item.vote_average * 10).toFixed(0),
                    background: item.backdrop_path,
                }
            })
            setSearch(searchResult)
        }

    }
    const handleChangePage = (event, value) => {
        setPage(value);
        console.log('value', value);
        animateScroll.scrollToTop({ duration: 500 });
    };

    return (<>
        <div className="movie">
            <div className="search-wrapper">
                <h1>Movie</h1>
                <div className="search">
                    <input type="text" className="input" placeholder="search" value={input} onChange={(e) => setInput(e.target.value)}></input>
                    <svg onClick={handleSearch} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>

                </div>
            </div>

            <div className="movie-wrapper">
                {search && search.map((item) => {
                    return (
                        <div className="movie-item" key={item.id}>
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
            {/* movie */}
            {/* <hr /> */}
            {!search && <>
                <div className="movie-wrapper">
                    {!search && movie && movie.map((item) => {
                        return (
                            <div className="movie-item" key={item.id}>
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
            </>}


        </div >
    </>);
}

export default Movie;