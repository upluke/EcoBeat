import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import NavBar from '../../components/NavBar';
// import HomePage from '../HomePage';
import { Email } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CreateUser from '../../components/CreateUser';


const useSty = makeStyles((theme: Theme) => ({
    flexColumn: {
        display: 'flex',
        flexDirection: 'column'
    },
    title: {
        fontSize: 30,
        marginTop: '5%',
        color: '#EBEBEB',
        textAlign:'center',
        display: 'flex'
    },
    cardField: {
        width: '40%',
        position: 'relative',
        backgroundColor: '#113537'
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,.6)',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        zIndex: theme.zIndex.drawer + 1,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },

}));

export const LoginPage: React.FC<{ onClick?: React.MouseEventHandler<HTMLElement> }> = ({ onClick }) => {
    const classes = useSty();
    const [Username, setUsername] = useState<string>('');
    const [Email, setEmail] = useState<string>('');
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box
            bgcolor="#113537"
            className={classes.flexColumn}
            style={{ width: '100%', height: '100vh' }}
        >
            <NavBar loggedIn={false} points={0} loginUser={""} />
            <div>
                <div style={{ flexShrink: 10, display: 'flex', flexDirection: 'column-reverse', textAlign: 'center', marginTop: '3%' }}>
                    <a href="https://imgur.com/1OXbMyE"><img src="https://i.imgur.com/1OXbMyE.jpg" title="source: imgur.com" width="auto" height="225px" /></a>
                </div>
                <Box className={`${classes.flexColumn} ${classes.cardField}`}>
                    <div className={classes.title}
                        style={{ marginLeft: '119%' }}
                    >
                        Login
                    </div>
                </Box>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column-reverse', marginLeft: '39%', marginRight: '39%', marginTop: '2%' }}>
                <TextField
                    label="Username"
                    variant='filled'
                    required
                    inputProps={{
                        style: {
                            color: 'black',
                            backgroundColor: '#EBEBEB',
                            padding: '5 10px',
                        }
                    }}
                    type="text"
                    value={Username}
                    onChange={(ev: React.ChangeEvent<HTMLInputElement>): void => setUsername(ev.target.value)}
                ></TextField>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column-reverse', marginLeft: '39%', marginRight: '39%' }}>
                <TextField
                    label="Email"
                    variant='filled'
                    inputProps={{
                        style: {
                            color: 'black',
                            backgroundColor: '#EBEBEB',
                            padding: '5 10px',
                        }
                    }}
                    type="text"
                    value={Email}
                    onChange={(ev: React.ChangeEvent<HTMLInputElement>): void => setEmail(ev.target.value)}

                ></TextField>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column-reverse', marginLeft: '44.3%', marginRight: '44.3%', marginTop: '1%', paddingBottom: '1%' }}>
                <Button
                    size='medium'
                    variant='contained'
                    // onClick= {HomePage}
                    style={{
                        backgroundColor: '#2CF9AC',
                        color: 'black',
                        fontStyle: 'bold'
                    }}
                ><Link style={{ textDecoration: "none", color: 'black' }} to="/about"> LOGIN</Link></Button>
            </div>
            <div style={{ margin: "0 auto", marginBottom: '3%' }}>
                <button type="button" onClick={handleOpen} style={{ backgroundColor: '#2CF9AC', padding: "10px 20px", color: 'black', marginBottom: '3%', borderRadius: '5px', borderColor: '#2CF9AC' }}>
                    CREATE A NEW USER
                </button>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <div className={classes.paper}>
                            {/* <h2 id="transition-modal-title">Transition modal</h2>
                        <p id="transition-modal-description">react-transition-group animates me.</p> */}
                            <CreateUser />
                        </div>

                    </Fade>
                </Modal>
            </div>
        </Box >
    )
};
