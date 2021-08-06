import React from 'react'
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            backgroundColor: 'rgba(0,0,0,.8)',
            color: '#fff',
        },
        // closeIcon: {
        //     color: '#fff',
        //     // position: 'absolute',
        //     // top: '0px',
        //     // right: '0px',
        // }
    }),
);

export interface HelpDisplayInterface {
    helpMessage: string;
}

const HelpDisplay: React.FC<HelpDisplayInterface> = ({ helpMessage }) => {
    // This is the little question mark on ActionLists.
    // Brings up a help message. 
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <div>
            <IconButton onClick={handleToggle} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <HelpOutlineIcon style={{ color: "black" }} />
            </IconButton>

            <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                {/* <IconButton>
                    <CloseIcon className='closeIcon'></CloseIcon>
                </IconButton> */}
                {helpMessage}
            </Backdrop>
        </div>
    )
}

export default HelpDisplay