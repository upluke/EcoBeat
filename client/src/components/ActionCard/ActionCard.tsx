import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import clsx from 'clsx';
import Coin from '../CoinIcon/Coin';

const useStyles = makeStyles({
    root: {
        flexGrow: .1,

    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    palette: {
        // primary: {
        //     main: "#DAFEE2"
        // },
        backgroundColor: '#C4C4C4'
    }
    // hover: {
    //     '&:hover': {
    //         background: "#B2FFC3",
    //     },


});

export interface ActionCardInterface {
    actionDescription: string;
    ecopoints: number;
}

const ActionCard: React.FC<ActionCardInterface> = ({ actionDescription, ecopoints }) => {
    const classes = useStyles();


    return (
        <Card className={clsx(classes.root, classes.palette)} style={{ marginTop: 12 }}>
            <CardContent>
                {/* clsx allows you to use multiple classes */}
                <Toolbar >
                    {/* <Box display='flex' flexGrow={1}> */}
                    <Typography variant="h5" component="h2" style={{ textAlign: 'left', width: '50%', fontSize: '1em' }}>
                        {actionDescription}
                    </Typography>

                    {/* </Box> */}

                    <Typography variant="h5" component="h2" style={{ width: '60%', textAlign: 'right', fontSize: '1.5em' }}>

                        <Toolbar style={{ float: 'right' }}>
                            <Coin />
                            {ecopoints}
                        </Toolbar>
                    </Typography>
                </Toolbar>
            </CardContent >

        </Card >
    );
}

export default ActionCard