import React from 'react';
import { createStyles, makeStyles, Theme, createTheme, ThemeProvider } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';
import Coin from '../CoinIcon/Coin';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },

        title: {
            flexGrow: .1,
            marginRight: 30,
            marginLeft: 53
        },
        customizeToolbar: {
            minHeight: 100,
        },
        nav_item: {
            // marginRight: 30,
            // marginLeft: 30,
            flexGrow: .05,
            //variant: "h1"
        },
        info_group: {
            flexGrow: .05,
            textAlign: "right",

        },



    }),
);

const theme = createTheme({
    palette: {
        primary: {
            main: "#DAFEE2"
        }
    },
});


function getNavItem(props: { name: string; classes: { [index: string]: string }; href: string }): JSX.Element {
    const { name, href, classes } = props;
    const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

    return (

        <Typography variant="h4" className={classes.nav_item}>
            <Link href={href} onClick={preventDefault} color="inherit">
                {name}
            </Link>
        </Typography>
    )
}

function getInfoGroupIfLoggedIn(props: { classes: { [index: string]: string }; loggedIn: boolean }) {
    const { classes, loggedIn } = props;

    if (loggedIn) {
        return (< List component="nav" className={classes.info_group} >
            <ListItem>
                <ListItemText primary="username" />
            </ListItem>

            <ListItem >
                <ListItemText primary="LVL 30" />
            </ListItem>

            <ListItem>
                <Coin />
                <ListItemText primary="100" />
            </ListItem>
        </List >)
    }
}
export interface NavBarInterface {
    loggedIn: boolean;
}

// const ActionCard: React.FC<ActionCardInterface> = ({ actionDescription, ecopoints }) => {
//     const classes = useStyles();

const NavBar: React.FC<NavBarInterface> = ({ loggedIn }) => {
    const classes = useStyles();
    // const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <AppBar position="static" >
                    <Toolbar className={classes.customizeToolbar}>

                        <Typography variant="h2" className={classes.title}>
                            EcoBeat
                        </Typography>

                        <Box display='flex' flexGrow={1}>

                            {getNavItem({ name: 'About', classes: classes, href: '#about' })}
                            {getNavItem({ name: 'Settings', classes: classes, href: '#Settings' })}

                        </Box>

                        {getInfoGroupIfLoggedIn({ classes: classes, loggedIn: loggedIn })}


                    </Toolbar>
                </AppBar>
            </div >
        </ThemeProvider >
    )
}

export default NavBar