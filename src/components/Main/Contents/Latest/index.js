import CardVideo from "./CardVideo";
import "./Latest.scss"
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
function Latest() {
    return (<>
        <div className="Latest_wrapper">
            <div className="Latest-top">
                <h1>Latest Trailers</h1>
            </div>
            <ScrollMenu>
                <div className="Latest-container">
                    <CardVideo />
                    <CardVideo />
                    <CardVideo />
                    <CardVideo />
                    <CardVideo />
                    <CardVideo />
                    <CardVideo />
                </div>
            </ScrollMenu>

        </div>
    </>);
}

export default Latest;