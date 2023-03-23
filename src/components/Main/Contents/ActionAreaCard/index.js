import "./ActionAreaCard.scss"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function ActionAreaCard() {
    const percentage = 20;

    return (
        <>
            <div className="card">
                <div className="img-wrapper">
                    <div className="image">
                        <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg" alt=""></img>
                    </div>
                    <div className="option"></div>
                </div>
                <div className="content">
                    <div className="consensus">
                        <CircularProgressbar background={true} value={percentage} text={`${percentage}%`} />

                    </div>
                    <div className="title">
                        <h2>John Wick: Chapter 4</h2>
                        <p>Mar 22, 2023</p>
                    </div>
                </div>
            </div>
        </>);
}

export default ActionAreaCard;