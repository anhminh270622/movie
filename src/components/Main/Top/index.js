import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { API_KEY } from '../../ConstKey';
import { useNavigate } from "react-router-dom";
function Top() {
    const [input, setInput] = useState('')
    const [search, setSearch] = useState('')
    // const [SearchResults, setSearchResults] = useState('')
    useEffect(() => {
        const fechData = async () => {
            const response = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${input}`)
            if (response && response.data && response.data.results) {
                const data = response.data.results.map((item) => {
                    return {
                        id: item.id,
                        title: item.overview
                    }
                })
                setSearch(data)
            }
        }
        fechData()
    }, [])
    // const handleOnchange = (event) => {
    //     setInput(event.target.value)
    // }
    const navigate = useNavigate();
    // const handleSearch = (event) => {

    //     console.log("search", search)
    //     // alert("search") 
    // }

    const handleSearch = () => {
        setSearch('')
        navigate('/search', { state: { query: search } });

        // navigate('SearchResults', { query: search });

    }
    return (
        <>
            <div className="top_wrapper" style={{
                backgroundImage:
                    "url('https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg')"

            }}>
                {/* <img src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg" alt=""></img> */}
                <div className="top_content">
                    <h1>Welcome.</h1>
                    <h2>Millions of movies, TV shows and people to discover. Explore now.</h2>
                    <div className="search">
                        <input placeholder="Search for a movie, tv show, person......"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        ></input>
                        <label onClick={() => handleSearch()}>Search</label>
                    </div>
                </div>
                {search && search.map((search) =>
                    <ul key={search.id}>
                        <li>{search.overview}</li>
                    </ul>
                )}
            </div>
        </>
    );
}

export default Top;
