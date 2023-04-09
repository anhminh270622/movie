import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_KEY } from '../../../ConstKey';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import ReactLoading from 'react-loading';
import LinearProgress from '@mui/material/LinearProgress';

function People(props) {
    const [loading, setLoading] = useState(false);
    const { id, type } = props;
    const [imageTrending, setImageTrending] = useState();
    const [video, setVideo] = useState(0);
    const [backdrops, setBackdrops] = useState(0);
    const [posters, setPosters] = useState(0);
    const [videoKey, setVideoKey] = useState('');
    const [videoToggle, setVideoToggle] = useState(true)
    const [image, setImage] = useState(false)
    const [stateImg, setStateImg] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    const [active, setActive] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await axios.get(
                `https://api.themoviedb.org/3/${type === 'movie' ? 'movie' : 'tv'
                }/${id}/images?api_key=${API_KEY}`
            );
            if (response && response.data) {
                const images = {
                    backdrops: response.data.backdrops,
                    posters: response.data.posters,
                };
                setImageTrending(images);
                // console.log(images);
                setBackdrops(images.backdrops.length);
                setPosters(images.posters.length);
            }
            const responseVideo = await axios.get(
                `https://api.themoviedb.org/3/${type === 'movie' ? 'movie' : 'tv'
                }/${id}/videos?api_key=${API_KEY}`
            );
            if (responseVideo && responseVideo.data && responseVideo.data.results) {
                const videos = responseVideo.data.results.slice(0, 9).map((video) => {
                    return {
                        id: video.id,
                        key: video.key,
                        name: video.name,
                        type: video.type,
                        site: video.site,
                    };
                });
                setLoading(true);
                setVideoKey(videos);
                setVideo(responseVideo.data.results.length);
            }
            setLoading(false);

        };
        // fetchVideo();
        fetchData();
    }, [id]);

    const handleVideoClick = () => {

        // console.log('thanh cong')
        setImage(false)
        setVideoToggle(true)
        setStateImg('')

    }
    const handleBackdropsClick = () => {
        setVideoToggle(false)
        setImage(true)
        setStateImg('backdrops')
        // console.log('thanh cong', stateImg)
        setIsLoading(true)

    }
    const handlePostersClick = () => {
        setVideoToggle(false)
        setImage(true)
        setStateImg('posters')
        // console.log('thanh cong posters', stateImg)
        setIsLoading(true)
    }
    return (
        <>
            <div className="people">
                <ul>
                    <li>
                        <h4>Media</h4>
                    </li>
                    <li onClick={handleVideoClick} className={videoToggle ? 'active' : ''}>
                        <h4>
                            Videos <span>{video}</span>
                        </h4>
                    </li>
                    <li onClick={handleBackdropsClick} className={stateImg === 'backdrops' ? 'active' : ''}>
                        <h4>
                            Backdrops<span>{backdrops}</span>
                        </h4>
                    </li>
                    <li onClick={handlePostersClick} className={stateImg === 'posters' ? 'active' : ''}>
                        <h4>
                            Posters<span>{posters}</span>
                        </h4>
                    </li>
                </ul>
                <div className="media-content">

                    <ScrollMenu>

                        {image && imageTrending && imageTrending[stateImg].map((item, index) => {
                            return (
                                <div key={index} className={stateImg}>
                                    <img src={`https://image.tmdb.org/t/p/w500${item.file_path}`} alt=''></img>
                                </div>
                            )
                        })}
                        {videoToggle && videoKey && videoKey.map((video) => (
                            <iframe
                                key={video.id}
                                width="560"
                                height="315"
                                src={`https://www.youtube.com/embed/${video.key}`}
                                title={video.name}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        ))}


                    </ScrollMenu>


                </div>

            </div>
        </>
    );
}

export default People;
