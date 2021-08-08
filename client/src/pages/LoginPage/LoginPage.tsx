import React, {useState} from 'react';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/styles/makeStyles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import NavBar from '../../components/NavBar';
// import HomePage from '../HomePage';
import { Email } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const useSty = makeStyles({
    flexColumn: {
        display: 'flex',
        flexDirection: 'column'
    },
    title: {
        fontSize: 34,
        marginTop: '5%',
        color: '#EBEBEB',
        textAlign:'center',
    },
    cardField: {
        width: '40%',
        position: 'relative',
        backgroundColor: '#113537'
    }

});

export const LoginPage: React.FC<{onClick?: React.MouseEventHandler<HTMLElement>}> = ({onClick}) => {
    const classes = useSty();
    const [Username, setUsername] = useState<string>('');
    const [Email, setEmail] = useState<string>('');
   
    return (
        <Box
            bgcolor="#113537"
            className={classes.flexColumn}
            style={{ width: '100%', height: '100vh' }}
        >
            <NavBar loggedIn={false} points={0} /> 
            <div>
                <div style= {{flexShrink: 10, display: 'flex', flexDirection: 'column-reverse', marginLeft: '30%', marginTop: '5%'}}>
                    <a href="https://imgur.com/1OXbMyE"><img src="https://i.imgur.com/1OXbMyE.jpg" title="source: imgur.com" /></a> 
                </div>
                <Box className= {`${classes.flexColumn} ${classes.cardField}`}>
                    <div className= {classes.title} 
                        style= {{marginLeft: '112%'}}
                    >
                        Login
                    </div>
                </Box> 
            </div>
            <div style= {{display: 'flex', flexDirection: 'column-reverse', marginLeft: '30%', marginRight: '34%', marginTop: '2%'}}>
                <TextField 
                    label="Username"
                    variant = 'filled'
                    required
                    inputProps= {{
                        style: {
                            color: 'black',
                            backgroundColor: '#EBEBEB',
                            padding: '15 30px',
                        }
                    }}
                    type="text"
                    value={Username}
                    onChange = {(ev: React.ChangeEvent<HTMLInputElement>): void => setUsername(ev.target.value)}
                ></TextField>
            </div>
            <div style= {{display: 'flex', flexDirection: 'column-reverse', marginLeft: '30%', marginRight: '34%'}}>
                <TextField 
                    label="Email"
                    variant= 'filled'
                    inputProps= {{
                        style: {
                            color: 'black',
                            backgroundColor: '#EBEBEB',
                            padding: '15 30px',
                        }
                    }} 
                    type="text"
                    value={Email}
                    onChange = {(ev: React.ChangeEvent<HTMLInputElement>): void => setEmail(ev.target.value)}

                ></TextField>
            </div>
            <div style= {{display: 'flex', flexDirection: 'column-reverse', marginLeft: '35%', marginRight: '40%', marginTop: '2%', paddingBottom: '5%'}}>
                <Button 
                    size = 'medium'
                    variant = 'contained'
                    // onClick= {HomePage}
                    style = {{
                        backgroundColor: '#2CF9AC',
                        padding: "10px 20px",
                        color: 'black'
                    }}
                ><Link style={{textDecoration:"none"}} to="/about"> LOGIN</Link></Button>
            </div>
        </Box> 
    )       
};
