import React,{useState} from 'react'
import PropTypes from 'prop-types'

interface LoginInterface {
    setToken:any
  }

async function loginUser(credentials:any){
    return fetch("http://localhost:8080/login",{
        method:'POST',
        headers:{
            'Content-Type':'applicatioin/json'
        },
        body:JSON.stringify(credentials)
    })
    .then(data=>data.json())
}

const Login:React.FC<LoginInterface>=({setToken})=>{
    const [username, setUserName]=useState<any>()
    const [password, setPassword]=useState<any>()

    const handleSubmit=async (e:any)=>{
        e.preventDefault()
        const token=await loginUser({
            username,
            password
        })
        setToken(token)
    }
    return(
        <div >
            <h1>Please log in </h1>
            <form onSubmit={handleSubmit}>
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