import React from 'react'
import Backdrop from '@material-ui/core/Backdrop';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            backgroundColor: 'rgba(0,0,0,.9)',
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

const helpMessages = [
    `
    Request:

    You can drag tasks in the Request Panel to the Accepted Panel,
    to accept to take on those tasks.
    
    If you change your mind, just drag it back to the Request Panel.

    Alternatively, you can drag tasks straight to the Finished panel if you alread finished it.
    
    You can spend your Ecocoins in the Rewards panel!
    `,
    `
    Accepted:
  
    You can drag tasks in the Accepted Panel to the Finished Panel,
    to recieve Ecocoins for completing that task.
    
    Alternatively, you can drag tasks back to the Requests panel to unclaim the task.
    
    You can spend your Ecocoins in the Rewards panel!
    `,
    `
    Finished:
    
    Deliver your tasks here to get paid in Ecocoins for your efforts!

    You can spend your Ecocoins in the Rewards panel!
    `
]

export interface HelpDisplayInterface {
    index: number;
}

const HelpDisplay: React.FC<HelpDisplayInterface> = ({ index }) => {
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
                <Typography style={{ fontSize: '2.7em' }}>
                    <pre style={{ fontFamily: 'inherit' }}>
                        {helpMessages[index]}
                    </pre>
                </Typography>
            </Backdrop>
        </div >
    )
}

export default HelpDisplay