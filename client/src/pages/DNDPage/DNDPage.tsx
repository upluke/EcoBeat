import React,{useEffect, useState} from 'react'
import NavBar from '../../components/NavBar';
import ColumnList from '../../components/ColumnList';
import { GET_ALL_USERS } from '../../graphql/queries'
import { useQuery } from '@apollo/client'
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
  const {loading,data, error}=useQuery(GET_ALL_USERS)
  const [loginUser, setLoginUser]=useState("")
   
  useEffect(() => {
    const ac = new AbortController();
    if (!loading && data) {
      let index=data["getAllUsers"]?.length-1
      let CurrentUser:any=data["getAllUsers"][index]["username"]
      setLoginUser(CurrentUser)
      return () => ac.abort();
    }
    
  }, [loading, data])
  
  
  return (
    <div >
      <NavBar loggedIn={true} points={points} loginUser={loginUser} />
      <ColumnList setPoints={setPoints} />
    </div>
  )
}

export default DNDPage