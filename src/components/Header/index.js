import "./Header.scss"
import AddIcon from '@mui/icons-material/Add';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import ExplicitIcon from '@mui/icons-material/Explicit';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { Link } from "react-router-dom";
function Header() {
    return (<>
        <div className="header_wrapper">


            <div className="header_container">
                <div className="header_left">
                    <button>
                        <Link to="/">
                        </Link>
                        PAM TMDT
                    </button>
                    <button>Movies</button>
                    <button>TV Shows</button>
                    <button>People</button>
                    <button>More</button>
                </div>
                <div className="header_right">
                    <button>
                        <AddIcon />
                    </button>
                    <button><ExplicitIcon /></button>

                    <button>
                        <NotificationsIcon />
                    </button>
                    <button>
                        <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                    </button>
                    <button>
                        <SearchIcon />
                    </button>
                </div>
            </div>
        </div>
    </>);
}

export default Header;