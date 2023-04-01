import "./SearchResults.scss"
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { API_KEY } from "../ConstKey";
import axios from "axios";
import SearchIcon from '@mui/icons-material/Search';
function SearchResults(props) {
    const location = useLocation();
    const { query } = location.state;
    const [searchResults, setSearchResults] = useState('');
    const [countTv, setCountTv] = useState(0);
    const [countMovie, setCountMovie] = useState(0);
    const [countPeople, countsetPeople] = useState(0);
    const [countCompanies, setCountCompanies] = useState(0);
    const [countNetworks, setCountNetworks] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const searchAll = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&lingu=en-US&page=1&include_adult=false&query=${query}`);
            if (searchAll && searchAll.data && searchAll.data.results) {

                const results = searchAll.data.results.map((item) => {
                    let overview = item.overview;
                    if (overview && overview.length > 50) {
                        overview = `${overview.slice(0, 200)}...`;
                    }

                    return {
                        id: item.id,
                        logo: item.poster_path,
                        title: item.title || item.name,
                        overview: overview,
                        date: item.release_date,
                        mediaType: item.media_type
                    };
                });
                setSearchResults(results);

                const countTv = results.filter(item => item.mediaType === 'tv').length;
                const countMovie = results.filter(item => item.mediaType === 'movie').length;
                setCountTv(countTv);
                setCountMovie(countMovie);
            }
        }

        fetchData()

    }, [query])
    console.log('countMovie', countMovie, 'countTv', countTv)

    return (<>
        <div className="SearchResults-wrapper">
            <div className="title-query">
                <SearchIcon />
                <input type="text"
                    value={query}
                ></input>
            </div>
            <hr />
            <div className="SearchResults">
                <div className="left">
                    <p> Search Results</p>

                    <ul>
                        <li>Movies
                            <span>{countMovie}</span>
                        </li>
                        <li>People
                            <span>{countPeople}</span>
                        </li>
                        <li>TV Shows
                            <span>{countTv}</span>
                        </li>
                        <li>Companies
                            <span>{countCompanies}</span>
                        </li>
                        <li>Networks
                            <span>{countNetworks}</span>
                        </li>
                    </ul>
                </div>
                <div className="right">
                    {searchResults && searchResults.map((item) => {
                        return (
                            <div key={item.id} className="container">
                                <img src={`https://image.tmdb.org/t/p/w500${item.logo}`} alt={item.logo}></img>
                                <div className="action">
                                    <div className="title">{item.title}</div>
                                    <p className="date">{item.date}</p>
                                    <p className="overview">{item.overview}</p>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>


        </div>

    </>);
}

export default SearchResults;