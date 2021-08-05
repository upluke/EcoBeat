import { GraphQLList,GraphQLString } from "graphql";
// import { TodoType } from "../TypeDefs/Todo";
// const axios =require('axios') //makes it easy to send asynchronous HTTP requests to endpoints
import { ColumnType } from "../TypeDefs/Column";
import { Columns } from "../../Entities/Columns";
// jsonplaceholder for testing:
// export const GET_TODO={
//     type:new GraphQLList(TodoType),
//     resolve(root:any, args:any){
//         return axios.get('https://jsonplaceholder.typicode.com/todos')
//             .then((res:any)=>res.data)
//     }

// }

export const GET_ALL_COLUMNS={
    type:new GraphQLList(ColumnType),
    resolve(){
        return Columns.find();
    }
}

 