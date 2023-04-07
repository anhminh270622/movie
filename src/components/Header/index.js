import "./Header.scss"
import AddIcon from '@mui/icons-material/Add';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExplicitIcon from '@mui/icons-material/Explicit';
import { NavLink } from "react-router-dom";
import Logo from "../../image/logo.png";
import { useState } from "react";
import { animateScroll } from 'react-scroll';
function Header() {
    const scrollToTop = () => {
        animateScroll.scrollToTop();
        // console.log('Scroll to top thành công')
    }
    return (<>
        <div className="header_wrapper">


            <div className="header_container">
                <div className="header_left" onClick={scrollToTop}>
                    <button >
                        <NavLink to="/" >
                            <img src={Logo} alt='logo'></img>
                            <h2>Movies</h2>
                        </NavLink>
                    </button>
                    <button > <NavLink to="/movie">Movies </NavLink></button>
                    <button > <NavLink to="/tv">TV Shows </NavLink></button>
                    <button > <NavLink to="/people">People </NavLink></button>
                    {/* <button  className={active ? 'active' : ''}> <Link to="/more">More </Link></button> */}
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
                        <img src={Logo} alt='logo'></img>
                        {/* <Avatar sx={{ bgcolor: deepOrange[500] }}>
                        </Avatar> */}
                    </button>

                </div>
            </div>
        </div>
    </>);
}

export default Header;