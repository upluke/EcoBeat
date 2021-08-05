import React from 'react';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/styles/makeStyles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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


export default function Loginpage() {
    const { flexColumn, title, cardField } = useSty();
    return (
        <Box
            bgcolor="#113537"
            className={flexColumn}
            style={{ width: '100%', height: '100vh' }}
        >
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
                    id="Username"
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
                ></TextField>
            </div>
            <div style= {{display: 'flex', flexDirection: 'column-reverse', marginLeft: '30%', marginRight: '34%'}}>
                <TextField 
                    id="Email"
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
                >Login</Button>
            </div>
        </Box> 
    )       
}
