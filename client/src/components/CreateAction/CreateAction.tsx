import React,{useState} from 'react'
import {
    useMutation
  } from "@apollo/client"; 
import { CREATE_ACTION } from '../../graphql/mutation';

const CreateAction: React.FC=()=>{
    const [actionName, setActionName]=useState("")
    const [actionDescription, setaActionDescription]=useState("")
    const [ecopoints, setEcopoints]=useState(0)

    const [createAction, {error}]=useMutation(CREATE_ACTION)
    console.log(error)
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