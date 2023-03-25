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
    // const { state } = props.location;
    // const { id, title, type, imageUrl, releaseDate } = state;
    const movie = location.state;
    if (!movie) {
        return <div>Loading...</div>; // hoặc có thể hiển thị một thông báo lỗi khác
    }
    const { id, title, type, description, imageUrl, rating, releaseDate } = movie;
    // const { id, title, type, description, imageUrl, rating, releaseDate } = location.state;
    const percentage = 20;
    return (
        <>
            <div className="Review_wrapper" style={{ backgroundImage: "url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/26uCzg0yigXqjcM9dCGCDihoXLM.jpg')" }}>
                <div className="top">
                    <div className="image">
                        <img
                            src="https://www.themoviedb.org/t/p/w220_and_h330_face/h0BMAClkFw4K8Ta4ejp54ZUHrqF.jpg"
                            alt=""></img>
                    </div>
                    <div className="detail">
                        <h2>Sát Thủ John Wick: Phần 4</h2>
                        <div>
                            <p>03/24/2023 (US)</p>
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
                            Sát Thủ John Wick: Chương 4 là câu chuyện của John Wick (Keanu
                            Reeves) đã khám phá ra con đường để đánh bại High Table. Nhưng
                            trước khi có thể kiếm được tự do, Wick phải đối đầu với kẻ thù mới
                            với những liên minh hùng mạnh trên toàn cầu và những lực lượng
                            biến những người bạn cũ thành kẻ thù.
                        </p>
                        <div>
                            <p>Shawn Ryan</p>
                            <p>Creator{title}</p>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="left"><img src={imageUrl} alt={title} /></div>
                    <div className="right"></div>
                </div>
            </div>
        </>
    );
}

export default Review;
