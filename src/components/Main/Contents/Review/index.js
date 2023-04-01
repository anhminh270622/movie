import { useParams } from 'react-router-dom';
import './Review.scss';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useLocation } from 'react-router-dom';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import People from './People';
import TopCart from './topCast';
import Recommendations from './Recommendations';
import { useState } from 'react';
function Review(props) {
    // const { id } = useParams();
    const location = useLocation();
    // const [bgrFather, setBgrFather] = useState('');
    const { title, imageUrl, releaseDate, id, type, description, rating, background } =
        location.state;
    // console.log("--------->", background)
    return (
        <>
            <div className="Review_wrapper">
                <div
                    className="top"
                    style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/original${background})`,
                        backgroundSize: 'cover'
                    }}>
                    <div className="image">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${imageUrl}`}
                            alt=""

                        ></img>
                    </div>
                    <div className="detail">
                        <h2>{title}</h2>
                        <div>
                            <p>{releaseDate}(US)</p>
                            <p>Phim Hành Động, Phim Gây Cấn, Phim Hình Sự</p>
                            <p>2h 49m</p>
                        </div>

                        <div className="icon">
                            <li className="icon-flex">
                                <CircularProgressbar
                                    background={true}
                                    value={rating}
                                    // text={`${rating !== 0 ? rating : 'HR'}`}
                                    text={Number(rating) !== 0 ? `${rating}%` : 'NR'}

                                    className="consensus"
                                    styles={{
                                        path: {
                                            stroke: rating > 69 ? 'green' : rating > 40 ? '#ffff00' : 'red' // màu của phần path
                                        },
                                    }}
                                />

                                <p>
                                    User
                                    <br />
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
                        <p>{description}</p>
                        <div>
                            <p>Shawn Ryan</p>
                            <p>Creator</p>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="left">
                        <div className="top-cast">
                            <h2>Top Billed Cast</h2>
                            <ScrollMenu>
                                <TopCart id={id} type={type} />
                            </ScrollMenu>
                            <h4>Full Cast & Crew</h4>
                            <hr />
                        </div>
                        <div className="social">
                            <People />
                            <div className="social-content">
                                {/* <div className="review">
                                    <div className="name">
                                        <img
                                            src="https://www.gravatar.com/avatar/5bfcd882a57748ce30d3e9caea9f9c44.jpg?s=64"
                                            alt=""></img>
                                        <div className="info">
                                            <h4>A review by romang</h4>
                                            <p>Written by romang on March 22, 2023</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="comment">
                                            Check out the full spoiler free review at Sunshine State
                                            Cineplex.
                                            https://sunshinestatecineplex.com/2023/03/13/sxsw-2023-john-wick-chapter-4-2023/
                                            John Wick: Chapter 4 might be a little long, but when it
                                            is fun, there are few films that can compete with its
                                            magnetism. Reeves shows why he’s one of the best genre
                                            actors in the world and pours his heart and soul into a
                                            soft-spoken performance. Combined with Stahelski’s fight
                                            sequences, this is sure to become a highly rewatched,
                                            often quoted classic.
                                        </div>
                                    </div>
                                </div> */}
                                {/* <Comment id={id} /> */}
                                <h4>Read All Reviews</h4>
                            </div>
                            <hr />
                        </div>
                        {/* <div className="media">
                            <ul>
                                <li>
                                    <h4>Media</h4>
                                </li>
                                <li>Most Popular</li>
                                <li> Videos </li>
                                <li> Backdrops</li>
                                <li> Posters</li>
                            </ul>
                            <div class="video">minh</div>
                            <hr />
                        </div> */}
                        <div className="recommendations">
                            <h4>Recommendations</h4>
                            <ScrollMenu>
                                <Recommendations id={id} type={type} />
                            </ScrollMenu>
                        </div>
                    </div>
                    {/* <div className="right">
                        <div className="icon">
                            <FacebookIcon />
                            <TwitterIcon />
                            <InstagramIcon />
                        </div>
                        <div>
                            <p>Status</p>
                            <p>Released</p>
                        </div>
                        <div>
                            <p>Original Language</p>
                            <p>English</p>
                        </div>
                        <div>
                            <p>Budget</p>
                            <p>$460,000,000.00</p>
                        </div>
                        <div>
                            {' '}
                            <p>Revenue</p>
                            <p>$2,304,000,000.00</p>
                        </div>
                        <hr />
                        <div className="top-contributors">
                            <h4>  Top Contributors</h4>
                            <div className="profile">
                                <img src="https://www.themoviedb.org/t/p/w45_and_h45_face/yYG7Rhn9HfFpssIMeNiDynvxC14.jpg" alt=""></img>
                                <div className="coin">
                                    <p>496</p>
                                    <p>raze464</p>
                                </div>
                            </div>
                            <div className="profile">
                                <img src="https://www.themoviedb.org/t/p/w45_and_h45_face/yYG7Rhn9HfFpssIMeNiDynvxC14.jpg" alt=""></img>
                                <div className="coin">
                                    <p>496</p>
                                    <p>raze464</p>
                                </div>
                            </div> <div className="profile">
                                <img src="https://www.themoviedb.org/t/p/w45_and_h45_face/yYG7Rhn9HfFpssIMeNiDynvxC14.jpg" alt=""></img>
                                <div className="coin">
                                    <p>496</p>
                                    <p>raze464</p>
                                </div>
                            </div>
                        </div>
                    </div> */}

                </div>

            </div>
        </>
    );
}

export default Review;
