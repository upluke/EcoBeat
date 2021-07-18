import express from 'express';// build web applications in node.js
import {graphqlHTTP} from 'express-graphql'; //support connect styled middleware
import cors from 'cors'; //allow cross-origin
import { createConnection } from 'typeorm'; // create a connection between a database and application
// const schema = require('../schema');
 



const main =async()=>{

  await createConnection({
    type:'mongodb',
    url:'...',
    synchronize:true,
    useUnifiedTopology:false, //false until database is ready
    entities:[]
  })

  const app = express(); //initialize express so that all the diddlewres can be applied
  app.use(cors()) //allows restricted resources on a web page to be requested from another domain outside the domain
  app.use(express.json()) // use json as the body to every single http request sent to our server

  //graphql middleware:
  // app.use(
  //   '/graphql',
  //   graphqlHTTP({
  //     schema,
  //     graphiql: true //graphql api tester control
  //   })
  // );
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}
 
main().catch((err)=>{console.log(err)})



