import React from 'react'
import { GET_ALL_USERS } from '../../graphql/queries'
import { useQuery } from '@apollo/client'
import { Paper } from '@material-ui/core'
import { List } from '@material-ui/core'
import { Divider } from '@material-ui/core'
import User from '../User'
 

 

const UserList: React.FC=()=>{
    const {loading,data, error}=useQuery(GET_ALL_USERS)
    console.log(data)
    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Something went wrong!</h1>;
    return(
        <Paper >
            <List style={{backgroundColor:"#113537"}}>
            {data&&
                data.getAllUsers.map((user?:any)=>{
                    return (
                        <>
                        <User id={user.id} username={user.username} email={user.email} ecopoints={user.ecopoints} />
                        <Divider/>
                        </>
                    )
                })
                }
            </List>
        </Paper> 
    )
}

export default UserList