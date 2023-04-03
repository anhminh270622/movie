import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { API_KEY } from '../../ConstKey';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
function Top() {
    const [input, setInput] = useState('');
    const [search, setSearch] = useState('');
    const [image, setImage] = useState(
        'https://image.tmdb.org/t/p/original/ovM06PdF3M8wvKb06i4sjW3xoww.jpg'
    );
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(
                `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
            );
            if (response && response.data && response.data.results) {
                const data = response.data.results.map((movie) => {
                    return {
                        id: movie.id,
                        imageUrl: `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`,
                    };
                });
                const randomIndex = Math.floor(Math.random() * data.length);
                setImage(data[randomIndex]);
            }

        };

        let intervalId;
        fetchData();

        // Update image every 3 seconds
        intervalId = setInterval(() => {
            fetchData();
        }, 5000000);

        // Clean up timer
        return () => clearInterval(intervalId);
    }, []);

    const navigate = useNavigate();

    const handleSearch = () => {
        setSearch(input);
        if (input && input.length > 0) {
            navigate("/search", {
                state: {
                    query: input,
                },
            });
        }

        // console.log('input', input)

    };
    // console.log('SearchResults', searchResults)
    return (
        <>
            <div
                className="top_wrapper"
                key={image.id}
                style={{
                    backgroundImage: `url(${image.imageUrl})`,
                    backgroundSize: 'cover',
                    transition: 'background-image 3s ease',
                    backgroundPosition: 'top -20px center',
                }}>
                <div className="top_content">
                    <h1>Welcome.</h1>
                    <h2>
                        Millions of movies, TV shows and people to discover. Explore now.
                    </h2>
                    <div className="search">
                        <input
                            placeholder="Search for a movie, tv show, person......"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}></input>
                        <label onClick={() => handleSearch()}>Search</label>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Top;
