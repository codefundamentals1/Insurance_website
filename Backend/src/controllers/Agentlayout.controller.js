const mydata = require('../db/configmain')

//////////////////////////////////////////
exports.temp =async(req,res)=>{
    console.log('Existing  cookie in controller:', req.cookies.userId)
    res.send('Agent server is ready ')
    };
    


 //////////////////////////////////////////
exports.customer =async(req,res)=>{
   
console.log('Existing  cookie in controller:', req.cookies.userId)
const sql = 'select * from customer where cust_id =	? '
  mydata.query(sql , ['cust004'],(error, result, field)=>{
      if(error) throw error;
      // console.log(result)
      res.send(result);
    })
};
    