import express,{ Request, Response, Application } from 'express';
const cors=require('cors')
const app=express()

 
 
app.use(cors())

app.use('/login', function(req:Request,res:Response){
    res.send({
        token:'test123'
    })
})

app.listen(8080,()=>console.log('API is running on port 8080'))
