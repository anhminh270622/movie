import { useParams } from 'react-router-dom';
import './Review.scss';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useLocation } from 'react-router-dom';
function Review(props) {
    // const { id } = useParams();
    const location = useLocation();
    // const { state } = props.location.state;
    console.log(location);
    const { title, imageUrl, releaseDate, id, type, description } = location.state;

    // const { id, title, type, imageUrl, releaseDate } = state;
    // const movie = location.state;
    // if (!movie) {
    //     return <div>Loading...</div>; // hoặc có thể hiển thị một thông báo lỗi khác
    // }
    // const { id, title, type, description, imageUrl, rating, releaseDate } = movie;
    // const { id, title, type, description, imageUrl, rating, releaseDate } = location.state;
    const percentage = 20;
    const data = [1, 2, 3, 4, 5, 6];
    return (
        <>
            <div className="Review_wrapper" >
                <div className="top" style={{ backgroundImage: "url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/26uCzg0yigXqjcM9dCGCDihoXLM.jpg')" }}>
                    <div className="image">
                        <img src={imageUrl} alt=""></img>
                    </div>
                    <div className="detail">
                        <h2>{title}</h2>
                        <div>
                            <p>{releaseDate}(US)</p>
                            <p>Phim Hành Động, Phim Gây Cấn, Phim Hình Sự</p>
                            <p>2h 49m</p>
                        </div>

                        <div className="icon">
                            <li className='icon-flex'>
                                <CircularProgressbar
                                    background={true}
                                    value={percentage}
                                    text={`${percentage}%`}
                                    className="consensus"
                                />
                                <p>
                                    User<br />
                                    Score
                                </p>

                            </li>
                            <li>
                                <FormatListBulletedIcon />
                            </li>
                            <li>
                                <FavoriteIcon />
                            </li>
                            <li>
                                <BookmarkIcon />
                            </li>
                            <li>
                                <StarIcon />
                            </li>
                        </div>
                        <p>Không còn đường lui, duy nhất một lối thoát.</p>
                        <h3>Overview</h3>
                        <p>
                            {description}
                        </p>
                        <div>
                            <p>Shawn Ryan</p>
                            <p>Creator</p>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="left">
                        {data.map((item, index) => {
                            return (
                                <div key={index}>
                                    <h2>Top Billed Cast</h2>
                                    <div className="cast">
                                        <div className="card">
                                            <img src="https://www.themoviedb.org/t/p/w138_and_h175_face/4D0PpNI0kmP58hgrwGC3wCjxhnm.jpg" alt="" ></img>
                                            <div>
                                                <p>Keanu Reeves</p>
                                                <p>John Wick</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                        <div><h4>Full Cast & Crew</h4></div>
                        <div><h4>
                            Go to Discussions
                        </h4></div>
                        <div><h4>

                        </h4></div>
                        <div><h4>

                        </h4>Go to Discussions</div>

                    </div>
                    <div className="right"></div>
                </div>
            </div>
        </>
    );
}

export default Review;
