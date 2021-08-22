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


const useStyle = makeStyles((theme: Theme) => ({
    flexColumn: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%', 
        height: '100vh'
    },
    title: {
        fontSize: 30,
        marginTop: '3rem',
        color: '#EBEBEB',
        textAlign: 'center',
    },
    imgDiv:{
       marginTop:'8rem',
 
    },
    cardField: {
        width: '40%',
        position: 'relative',
        backgroundColor: '#113537'
    },
    center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    form:{
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    textField:{
        color: 'black',
        backgroundColor: '#EBEBEB',
        width:  '50ch',  

    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        zIndex: theme.zIndex.drawer + 1,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    buttonDiv:{
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button:{
        backgroundColor: '#2CF9AC',
        color: 'black',
        fontStyle: 'bold',
        marginTop:'0.5rem',
        width:  '40ch', 
        '&:hover': {
            backgroundColor: '#FFF',
        }
     
    },
 

}));

export const LoginPage: React.FC<{ onClick?: React.MouseEventHandler<HTMLElement> }> = ({ onClick }) => {
    const classes = useStyle();
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
 
        <div>
            <NavBar loggedIn={false} points={0} loginUser={""} />
            <div>
                <div className={`${classes.center} ${classes.imgDiv}`}   >
                   <img  
                        width="550px"  
                        src="https://i.imgur.com/1OXbMyE.jpg" 
                        alt="Woman in brown"/>
                </div>
                <p className={classes.title}>Login</p>
              
            </div>
            <form  className={classes.form}>
                <TextField
                    className={classes.textField}
     
                    label="Username"
                    variant='filled'
                    required
                    value={Username}
                    onChange={(ev: React.ChangeEvent<HTMLInputElement>): void => setUsername(ev.target.value)}
                ></TextField>
        
                <TextField
                    className={classes.textField}
                    label="Email"
                    variant='filled'
                    value={Email}
                    onChange={(ev: React.ChangeEvent<HTMLInputElement>): void => setEmail(ev.target.value)}

                ></TextField>
            </form>
            <div  className={classes.buttonDiv} >
                <Button 
              
                    className={classes.button}>
                    <Link style={{ textDecoration: "none", color: 'black' }} to="/about"> 
                        LOGIN
                    </Link>
                </Button>
                <Button 
                    className={classes.button}   
                    onClick={handleOpen} >
                    CREATE A NEW USER
                </Button>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
             
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
                            <CreateUser />
                        </div>

                    </Fade>
                </Modal>
            </div>
 

</div>
    )
};
