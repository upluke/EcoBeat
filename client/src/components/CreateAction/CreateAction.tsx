import React,{useState} from 'react'
import {
    useMutation
  } from "@apollo/client"; 
import { CREATE_ACTION } from '../../graphql/mutations';

const CreateAction: React.FC=()=>{
    const [actionName, setActionName]=useState("")
    const [actionDescription, setaActionDescription]=useState("")
    const [ecopoints, setEcopoints]=useState(0)

    const [createAction, {loading,data, error}]=useMutation(CREATE_ACTION)
    console.log(error)
    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Something went wrong!</h1>;
    return(
        <div>
            <input 
                type="text" 
                placeholder="actionName" 
                onChange={(e)=>{
                    setActionName(e.target.value)
                }}
            />
            <input 
                type="text" 
                placeholder="actionDescription" 
                onChange={(e)=>{
                    setaActionDescription(e.target.value)
                }}
            />
           <input 
                type="number" 
                placeholder="actionDescription" 
                onChange={(e)=>{
                    setEcopoints(parseInt(e.target.value))
                }}
            />
            <button
                onClick={()=>{
                    createAction({
                        variables:{actionName:actionName, actionDescription:actionDescription, ecopoints:ecopoints }
                    })
                }}
            >Create Card</button>

        </div> 
    )
}

export default CreateAction