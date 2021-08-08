import React from 'react';
import { createStyles, makeStyles, Theme, createTheme, ThemeProvider } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Link from '@material-ui/core/Link';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';
import Coin from '../CoinIcon/Coin';
import { Link } from "react-router-dom";

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
            flexGrow: .05,
            fontSize: '2.3em',
            // marginRight: 30,
            // marginLeft: 30,
            //variant: "h1"
        },
        info_group: {
            flexGrow: .05,
            textAlign: "right",
        },
        list_item: {
            padding: 1,
        },
        link:
        {
            textDecoration: 'none',
            color: "#000000",
            "&:hover": {
                // color: "#007056",
                textDecoration: 'underline rgb(95,73,74) ',
            }
        }

    }),
);

const theme = createTheme({
    palette: {
        primary: {
            main: "#DAFEE2"
        }
    },
});


// function getNavItem(props: { name: string; classes: { [index: string]: string }; href: string }): JSX.Element {
//     const { name, href, classes } = props;
//     const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

//     return (

//         <Typography variant="h4" className={classes.nav_item}>
//             <Link href={href} onClick={preventDefault} color="inherit">
//                 {name}
//             </Link>
//         </Typography>
//     )
// }

function getInfoGroupIfLoggedIn(props: { classes: { [index: string]: string }; loggedIn: boolean, points: any,loginUser:string }) {
    const { classes, loggedIn, points,loginUser } = props;

    if (loggedIn) {
        return (
            < List component="nav" className={classes.info_group} >
                <ListItem className={classes.list_item}>
                    <ListItemText primary={loginUser}/>
                </ListItem>

                <ListItem className={classes.list_item}>
                    <ListItemText primary="LVL 1" />
                </ListItem>

                <ListItem className={classes.list_item}>
                    <Coin />
                    <ListItemText primary={points} />
                </ListItem>
            </List >)
    }
    else {
        return (
            < List component="nav" className={classes.info_group} >
                <ListItem className={classes.list_item}>
                    <ListItemText primary="⠀" />
                </ListItem>

                <ListItem className={classes.list_item}>
                    <ListItemText primary="⠀" />
                </ListItem>

                <ListItem className={classes.list_item}>
                    <ListItemText primary='⠀' />
                </ListItem>
            </List >)
    }
}
export interface NavBarInterface {
    loggedIn: boolean;
    points: any;
    loginUser:string;
}

// const ActionCard: React.FC<ActionCardInterface> = ({ actionDescription, ecopoints }) => {
//     const classes = useStyles();

const NavBar: React.FC<NavBarInterface> = ({ loggedIn, points,loginUser }) => {
    const classes = useStyles();
    // const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <AppBar position="static" >
                    <Toolbar className={classes.customizeToolbar}>

                        <Typography className={classes.title} style={{ fontSize: '4.5em' }}>
                            <Link to="/about" className={classes.link}>EcoBeat</Link>
                        </Typography>

                        <Box display='flex' flexGrow={1}>

                            {/* {getNavItem({ name: 'About', classes: classes, href: '#about' })}
                            {getNavItem({ name: 'DND Playground', classes: classes, href: '#Drag and Drop' })}
                            {getNavItem({ name: 'Settings', classes: classes, href: '#Settings' })} */}

                            <Typography className={classes.nav_item} >
                                <Link to="/create" className={classes.link}> Action Creator</Link>
                            </Typography>
                            <Typography className={classes.nav_item}>
                                <Link to="/ndn" className={classes.link}> DND Playground</Link>
                            </Typography>
                            <Typography className={classes.nav_item}>
                                <Link to="/about" className={classes.link}> About</Link>
                            </Typography>
                        </Box>

                        {getInfoGroupIfLoggedIn({ classes: classes, loggedIn: loggedIn, points: points,loginUser:loginUser })}


                    </Toolbar>
                </AppBar>
            </div >
        </ThemeProvider >
    )
}

export default NavBar