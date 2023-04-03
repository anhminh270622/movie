import { API_KEY } from "../../ConstKey";
import axios from "axios";
import { useState, useEffect } from "react";
import ActionAreaCard from "../../Main/Contents/ActionAreaCard";

import moment from "moment/moment";
import { animateScroll } from 'react-scroll';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Padding } from '@mui/icons-material';
import "./Tv.scss"
function Tv() {
    const [tv, setTv] = useState('')
    const [page, setPage] = useState(1);
    useEffect(() => {
        const fechData = async () => {
            const response = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=vi&page=${page}`)
            if (response && response.data && response.data.results) {
                const data = response.data.results.map((movie) => {
                    return {
                        id: movie.id,
                        title: movie.name,
                        imageUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                        releaseDate: moment(movie.first_air_date).format('MMM DD, YYYY'),
                        type: movie.media_type,
                        rating: (movie.vote_average * 10).toFixed(0),
                        background: movie.backdrop_path,
                    }
                })
                setTv(data)
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
        <div className="tv">
            <h1>TV Shows</h1>

            <div className="tv-wrapper">
                {tv && tv.map((item) => {
                    return (
                        <div className="tv-item">
                            <ActionAreaCard
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

export default Tv;