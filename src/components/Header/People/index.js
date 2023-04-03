import { API_KEY } from '../../ConstKey';
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

    const fetchData = async () => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=vi&page=${page}`
        );
        if (response && response.data && response.data.results && response.data.results) {
            const results = response.data.results.map((item) => {
                return {
                    name: item.name,
                    id: item.id,
                    imageUrl: `https://image.tmdb.org/t/p/w500${item.profile_path}`,
                };
            });
            setPeople(results);
        }
    };

    useEffect(() => {
        fetchData();
    }, [page]);

    const handleChangePage = (event, value) => {
        setPage(value);
        console.log('value', value);
        animateScroll.scrollToTop({ duration: 500 });
    };

    return (
        <>
            <div className="people">
                <h1>Popular People</h1>
                <div className="people_wrapper">
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
                        renderItem={(item) => (
                            <PaginationItem
                                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                                {...item}
                            />
                        )}
                    />
                </Stack>
            </div>
        </>
    );
}

export default People;
