const mysql = require("mysql");

//this is the syntax to connect my sqll
const con = mysql.createConnection({
  host: 'localhost',
  user: "Anish",
  password: "",
  database: "test",
});

con.connect((err) => {
  if (err) {
    console.log(err);
  } else {  
    console.log("conected");
  }
});

module.exports = con;