import React from 'react'
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        },
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
                {helpMessage}
            </Backdrop>
        </div>
    )
}

export default HelpDisplay