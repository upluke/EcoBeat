import React, {useState} from 'react';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/styles/makeStyles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import NavBar from './navbar';


const useSty = makeStyles({
    flexColumn: {
        display: 'flex',
        flexDirection: 'column'
    },
    title: {
        fontSize: 34,
        marginTop: '5%',
        color: '#EBEBEB'
    },
    cardField: {
        width: '40%',
        position: 'relative',
        backgroundColor: '#113537'
    }

});

class LoginComponent extends React.Component {
    constructor() {
        this.state = {
            Username: ""
        }
    }

export default function Loginpage() {
    const { flexColumn, title, cardField } = useSty();
    const [Username, Email]= useState('');
    return ( 
        <Box
            bgcolor="#113537"
            className={flexColumn}
            style={{ width: '100%', height: '100vh' }}
        >
            <NavBar>Nav</NavBar>
            <div>
                <div style= {{flexShrink: 10, marginTop: '40px', marginLeft: '30%'}}>
                    <a href="https://imgur.com/1OXbMyE"><img src="https://i.imgur.com/1OXbMyE.jpg" title="source: imgur.com" /></a> 
                </div>
                <Box className= {`${flexColumn} ${cardField}`} style={{display: 'inline-flex', flexDirection: 'column-reverse', marginLeft: '31%'}}>
                    <div className={title} style = {{marginLeft: '35%'}}>
                        Login
                    </div>
                </Box>
                
            </div>
            <div style= {{display: 'flex', flexDirection: 'column-reverse', marginLeft: '30%', marginRight: '34%', marginTop: '2%'}}>
                <TextField 
                    input id="Ssername"
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
                    onInput={()=>this.setState({Username: this.value})}
                ></TextField>
            </div>
            <div style= {{display: 'flex', flexDirection: 'column-reverse', marginLeft: '30%', marginRight: '34%'}}>
                <TextField 
                    input id='Email'
                    label="Email"
                    variant= 'filled'
                    inputProps= {{
                        style: {
                            color: 'black',
                            backgroundColor: '#EBEBEB',
                            padding: '15 30px',
                        }
                    }} 
                ></TextField>
            </div>
            <div style= {{display: 'flex', flexDirection: 'column-reverse', marginLeft: '35%', marginRight: '40%', marginTop: '2%'}}>
                <Button 
                    size = 'medium'
                    variant = 'contained'
                    color = 'primary'
                    style = {{
                        backgroundColor: '#2CF9AC',
                        padding: "10px 20px",
                        color: 'black'
                    }}
                    onClick= "location.href='/home'"
                >Login</Button>
            </div>
        </Box> 
    )       
}
