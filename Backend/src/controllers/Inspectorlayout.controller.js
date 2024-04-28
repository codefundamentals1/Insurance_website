const mydata = require('../db/configmain')

//////////////////////////////////////////
exports.insuracepolicypage1 =async(req,res)=>{
    console.log('Existing  cookie in controller:', req.cookies.userId)
    res.send('inspector server is ready ')
    };
    


