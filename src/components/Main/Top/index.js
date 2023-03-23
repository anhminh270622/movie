import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
function Top() {
    return (
        <>
            <div className="top_wrapper">
                <img src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg" alt=""></img>
                <div className="top_content">
                    <h1>Welcome.</h1>
                    <h2>Millions of movies, TV shows and people to discover. Explore now.</h2>
                    <div className="search">
                        <input placeholder="Search for a movie, tv show, person......"></input>
                        <label>Search</label>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Top;
