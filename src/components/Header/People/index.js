import { API_KEY, ERROR_IMG } from '../../ConstKey';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './People.scss';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Padding } from '@mui/icons-material';
import { animateScroll } from 'react-scroll';

function People() {
    const [people, setPeople] = useState('');
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState(null)
    const [input, setInput] = useState('')



    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(
                `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=vi&page=${page}`
            );
            if (response && response.data && response.data.results && response.data.results) {
                const results = response.data.results.map((item) => {
                    const imageUrl = item.profile_path;
                    if (imageUrl !== null) {
                        return {
                            name: item.name,
                            id: item.id,
                            imageUrl: `https://image.tmdb.org/t/p/w500${imageUrl}`
                        };
                    } else {
                        return {
                            name: item.name,
                            id: item.id,
                            imageUrl: ERROR_IMG
                        };
                    }
                })
                setPeople(results);
            }
        };
        fetchData();
    }, [page]);

    const handleSearch = async (event, value) => {
        setInput(event.target.value);
        if (input && input.length > 0) {
            const responseSearch = await axios.get(`https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${input}`)
            if (responseSearch && responseSearch.data && responseSearch.data.results) {
                const searchResult = responseSearch.data.results.map((item) => {
                    const imageUrl = item.profile_path;
                    if (imageUrl !== null) {
                        return {
                            name: item.name,
                            id: item.id,
                            imageUrl: `https://image.tmdb.org/t/p/w500${imageUrl}`
                        };
                    } else {
                        return {
                            name: item.name,
                            id: item.id,
                            imageUrl: ERROR_IMG
                        };
                    }
                })
                setSearch(searchResult)
            }
        }

    }
    const handleChangePage = (event, value) => {
        setPage(value);
        console.log('value', value);
        animateScroll.scrollToTop({ duration: 500 });
    };

    return (
        <>
            <div className="people">
                <div className="search-wrapper">

                    <h1>Popular People</h1>

                    <div className="search">
                        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="input" placeholder="Search"></input>
                        <svg onClick={handleSearch} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>

                    </div>
                </div>
                <div className="people-wrapper">
                    {search && search.map((item) => {
                        return (
                            <div key={item.id} className="item">
                                <img src={item.imageUrl} alt={item.name} />
                                <p>{item.name}</p>
                            </div>
                        );
                    })}
                </div>
                {!search &&
                    <>
                        <div className="people-wrapper">
                            {people &&
                                people.map((item) => {
                                    return (
                                        <div key={item.id} className="item">
                                            <img src={item.imageUrl} alt={item.name} />
                                            <p>{item.name}</p>
                                        </div>
                                    );
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
                                boundaryCount={1}
                                siblingCount={0}
                                renderItem={(item) => (
                                    <PaginationItem
                                        slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                                        {...item}
                                    />

                                )}
                            />

                        </Stack>
                    </>
                }
            </div>
        </>
    );
}

export default People;
