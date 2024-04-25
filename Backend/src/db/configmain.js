const mysql = require("mysql2");

//this is the syntax to connect my sqll
const mydata = mysql.createConnection({
  host: 'localhost',
  user: "raja",
  password: "Anish@123",
  database: "DBMS",
});

mydata.connect((err) => {
  if (err) {
    console.log(err);
  } else {  
    console.log("conected to DBMS" );
  }
}); 





module.exports = mydata;