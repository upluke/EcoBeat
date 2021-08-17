import React,{useState} from 'react'
import PropTypes from 'prop-types'

interface LoginInterface {
    setToken:any
  }


  const Login:React.FC<LoginInterface>=({setToken})=>{
    const [username, setUserName]=useState<any>()
    const [password, setPassword]=useState<any>()
    return(
        <div >
            <h1>Please log in </h1>
            <form>
                <label>
                    username testing
                    <input type="text" onChange={e=>setUserName(e.target.value)} />
                </label>
                <label>
                    Password
                    <input type="password" onChange={e=>setPassword(e.target.value)} />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

Login.propTypes={
    setToken:PropTypes.func.isRequired
}
export default Login