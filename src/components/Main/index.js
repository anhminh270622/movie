import "./Main.scss";
import Content from "./Contents";
import Top from "./Top";
import Footer from "../Footer";
export default function Main() {
    return (
        <div className="main_wrapper">
            <Top />
            <Content />
            <Footer />
        </div>
    )
}
