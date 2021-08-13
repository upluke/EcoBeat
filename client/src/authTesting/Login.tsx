import React from 'react'


interface LoginInterface {
    setToken:any
  }


export default function Login<LoginInterface>(){
    return(
        <div >
            <h1>Please log in </h1>
            <form>
                <label>
                    Username
                    <input type="text" />
                </label>
                <label>
                    Password
                    <input type="password" />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}