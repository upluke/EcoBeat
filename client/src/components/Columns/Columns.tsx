import React from 'react'
import { GET_ALL_COLUMNS } from '../../graphql/queries'
import { useQuery } from '@apollo/client'
import { Paper } from '@material-ui/core'
import { List } from '@material-ui/core'
import { Divider } from '@material-ui/core'
 

 

const Columns: React.FC=()=>{
    const {loading,data, error}=useQuery(GET_ALL_COLUMNS)
    console.log(data)
    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Something went wrong!</h1>;
    
    return(
        <Paper >
            <List style={{backgroundColor:"#113537"}}>
            {data&&
                data.getAllColumns.map((column?:any)=>{
                    return (
                        <>
                            {/* <p>{column}</p> */}
                        </>
                    )
                })
                }
            </List>
        </Paper> 
    )
}

export default Columns