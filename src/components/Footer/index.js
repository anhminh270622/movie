import "./Footer.scss"
import Logo from '../../image/logo.png'
import ScrollToTopButton from "../ScrollToTopButton";

function Footer() {
    return (<>
        <div className="footer_wrapper">
            <div className="footer_content">
                <div className="logo">
                    <img src={Logo} alt="logo" />
                    <div className="account">Hi anhminh370622!</div>
                </div>
                <div>
                    <ul>
                        <li><h3>THE BASICS</h3></li>
                        <li>About TMDB</li>
                        <li>Contact Us</li>
                        <li>Support Forums</li>
                        <li>API</li>
                        <li>System Status</li>
                    </ul>
                </div>
                <div>

                    <ul>
                        <li><h3>GET INVOLVED</h3></li>
                        <li>Contribution Bible</li>
                        <li>Add New Movie</li>
                        <li>Add New TV Show</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><h3>COMMUNITY</h3></li>
                        <li>Guidelines</li>
                        <li>Discussions</li>
                        <li>Leaderboard</li>
                        <li>Twitter</li>
                    </ul>
                </div>
                <div>

                    <ul>
                        <li><h3>LEGAL</h3></li>
                        <li>Terms of Use</li>
                        <li>API Terms of Use</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            </div>
            <ScrollToTopButton />

        </div>
    </>);
}

export default Footer;