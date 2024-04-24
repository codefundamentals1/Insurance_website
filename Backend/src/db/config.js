const mysql = require("mysql2");

//this is the syntax to connect my sqll
const con = mysql.createConnection({
  host: 'localhost',
  user: "raja",
  password: "Anish@123",
  database: "users",
});

con.connect((err) => {
  if (err) {
    console.log(err);
  } else {  
    console.log("conected");
  }
});


module.exports = con;