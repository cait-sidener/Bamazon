var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "Pass4SQL",
    database: "bamazon"
  });

  function start(){
    readProducts();
    inquirer.prompt(
      [
        {
      type: "input",
      name: "product_name",
      message: "What is the ID of the product you would like to buy?"
    },
    {
      type: "input",
      name: "stock_quantity",
      message: "How many units would you like to buy?"
    }
  ]
  ).then(function(answer){
    connection.query(
      ""
    )
  })
  }

  function readProducts() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(res);
    });
  }


