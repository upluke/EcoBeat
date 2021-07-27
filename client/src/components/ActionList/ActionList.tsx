import React from 'react'
import { GET_ALL_ACTIONS } from '../../graphql/queries'
import { useQuery } from '@apollo/client'

const ActionList: React.FC=()=>{
    const {loading,data, error}=useQuery(GET_ALL_ACTIONS)
    console.log(data)
    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Something went wrong!</h1>;
    return(
        <h1>
            {data&&
                data.getAllActions.map((action:any)=>{
                    return (
                        <div key={action.id}>
                            <span style={{color:"red"}}>{action.actionName} :</span>
                            <span>{action.actionDescription}-{action.ecopoints||"no points was generated"}</span>
                        </div>
                    )
                })
                }
        </h1> 
    )
}

export default ActionList