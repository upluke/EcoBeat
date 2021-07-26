import React,{useState} from 'react'
import {
    useMutation
  } from "@apollo/client"; 
import { CREATE_ACTION } from '../../graphql/mutation';

const CreateAction: React.FC=()=>{
    const [actionName, setActionName]=useState("")
    const [actionDescription, setaActionDescription]=useState("")
 

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
 
            <button
                onClick={()=>{
                    createAction({
                        variables:{actionName:actionName, actionDescription:actionDescription }
                    })
                }}
            >Create Card</button>

        </div> 
    )
}

export default CreateAction