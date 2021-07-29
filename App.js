import './App.css';
import React from "react";
import { Aboutpage } from './about';
import TextField from '@material-ui/core/TextField';
import {makeStyles, ThemeProvider, createTheme} from '@material-ui/core/styles';

/*const useBoxStyle = makeStyles({
  root: {
    backgroundColor: 'A45B5B',
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: 'EBEBEB',
    padding: '5px 30x'
  }
})*/
 
/*const theme = createTheme ({
  palette: {
    primary: {
      main: "#113537"
    }
  }
})*/



function App(props) {
  return <Aboutpage/>;
}

export default App;
