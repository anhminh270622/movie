import "./ActionAreaCard.scss"
import { useState } from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
];

function ActionAreaCard(props) {
    const { title, imageUrl, releaseDate, id, type, description } = props;
    const percentage = 20;
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // const mappedValues = [title, imageUrl, releaseDate, id, type].map((value) => {
    //     return <p>{value}</p>;
    //   });

    const navigate = useNavigate();
    function handleClick() {
        navigate(`${type === 'movie' ? '/movie' : '/tv'}/${id}`, {
            state: {
                id: id,
                title: title,
                imageUrl: imageUrl,
                releaseDate: releaseDate,
                type: type,
                description: description

            }
        });
    }
    return (
        <>
            <div className="action-card">
                <div className="img-wrapper">
                    <div className="image">
                        <img onClick={handleClick} src={imageUrl} alt=""></img>
                    </div>

                    <div className="option">
                        <Box sx={{ height: 80, transform: 'translateZ(0px)', flexGrow: 1, bottom: '-15px' }}>
                            <Backdrop open={open} />
                            <SpeedDial
                                ariaLabel="SpeedDial tooltip example"
                                sx={{ position: 'absolute', bottom: 15, right: 10 }}
                                icon={<SpeedDialIcon />}
                                onClose={handleClose}
                                onOpen={handleOpen}
                                open={open}
                            >
                                {actions.map((action) => (
                                    <SpeedDialAction
                                        key={action.name}
                                        icon={action.icon}
                                        tooltipTitle={action.name}
                                        tooltipOpen
                                        onClick={handleClose}
                                    />
                                ))}
                            </SpeedDial>
                        </Box>
                    </div>
                </div>
                <div className="content">
                    <div className="consensus">
                        <CircularProgressbar background={true} value={percentage} text={`${percentage}%`} />
                    </div>
                    <div className="title">
                        <h2 onClick={handleClick}>{title}</h2>
                        {/* <p>{type}</p> */}
                        <p onClick={handleClick}>{releaseDate}</p>

                    </div>
                </div>
            </div>
        </>);
}

export default ActionAreaCard;