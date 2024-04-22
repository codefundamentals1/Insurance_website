const express = require('express')
require('dotenv').config()
const cors = require('cors')

const app = express();

app.use(cors());
app.use(express.json())

app.get('/' , (req, res)=>{
    res.send("hello ")
})

app.post('/signup', async(req, res) =>{
    const data =  await req.body;
    console.log(data);
    res.send(data);

})





const port = process.env.PORT ;
 
 app.listen(port , () =>{
    console.log(`serve at http://localhost:${port}`)
 })


