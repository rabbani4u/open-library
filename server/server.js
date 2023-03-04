import express from 'express'

const app = express();

app.get('/', (req, res)=>{
    console.log("I am From backend");
})

app.listen(4000, ()=>{
    console.log("Server is running at the port 4000");
})
