import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { API_KEY } from '../../ConstKey';
function Top() {
    const [input, setInput] = useState('')
    const [search, setSearch] = useState('')
    useEffect(() => {
        const fechData = async () => {
            const response = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${input}`)
            if (response && response.data && response.data.results) {
                const data = response.data.results.map((item) => {
                    return {
                        id: item.id,
                        title: item.name
                    }
                })
                setSearch(data)
            }
        }
        fechData()
    }, [input])
    // const handleOnchange = (event) => {
    //     setInput(event.target.value)
    // }
    const handleSearch = () => {
        setSearch('')
        console.log("search", search)
        // alert("search")
    }
    return (
        <>
            <div className="top_wrapper">
                <img src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg" alt=""></img>
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
                        <li>{search.title}</li>
                    </ul>
                )}
            </div>
        </>
    );
}

export default Top;
