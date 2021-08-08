import React,{useState} from 'react'
import NavBar from '../../components/NavBar';
import ColumnList from '../../components/ColumnList';
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexGrow: 1,
//     // padding: 0,
//     // margin: 0,
//     // height: "40%",//100vh
//     // backgroundColor: "#113537",

//   },
//   grid: {
//     marginTop: "1rem"
//   },
//   list: {
//     width: '50%',
//     margin: '1rem',
//   },
//   dndPaper: {
//     width: "100%",
//     backgroundColor: "red",

//   },

// }));



const DNDPage: React.FC<any> = () => {
  const [points,setPoints ]=useState(0)
  
  return (
    <div >
      <NavBar loggedIn={true} points={points} />
      <ColumnList setPoints={setPoints} />
    </div>
  )
}

export default DNDPage