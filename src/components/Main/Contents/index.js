import Latest from "./Latest";
import Popular from "./Popular";
import Trending from "./Trending";

function Content() {
    return (<>
        <div className="content_wrapper">
            <Trending />
            <Latest />
            <Popular />
        </div>
    </>);
}

export default Content;