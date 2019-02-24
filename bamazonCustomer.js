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

function promptUser(data) {
  inquirer.prompt(
    [{
        type: "input",
        name: "product_id",
        message: "What is the ID of the product you would like to buy?"
      },
      {
        type: "input",
        name: "stock_quantity",
        message: "How many units would you like to buy?"
      }
    ]
  ).then(function (answer) {
    var selectedItem = data.find(function (itm) {
      return itm.id === parseInt(answer.product_id);
    })
    if(selectedItem.stock_quantity >= parseInt(answer.stock_quantity)){
      console.log("There are enough items for you to purchase!");
      connection.query(
        "UPDATE products SET ? WHERE?",
        [
          {
          stock_quantity: (selectedItem.stock_quantity - answer.stock_quantity)
          },
          {
            id: answer.id
          }
        ],
        function (err, updateResults) {
          if (err) throw err;
          
          console.log("Thank you for purchasing " + answer.stock_quantity 
          + " of item: " + answer.product_id + ". Your total is: $" + 
          (selectedItem.price * answer.stock_quantity) + "!");
          promptUser(data);

        }
      )
    }
    else {
      console.log("There are not enough items to make that purchase!");
      promptUser(data);
    }
  })

}

function readProducts() {
  console.log("Selecting all products...\n");
  connection.query("SELECT * FROM products", function (err, data) {
    if (err) throw err;
    // Log all results of the SELECT statement
    for (let itm of data) {
      var price = new Intl.NumberFormat('us-EN', {
        style: 'currency',
        currency: 'USD'
      }).format(itm.price)
      console.log("ID: " + itm.id)
      console.log("Product Name: " + itm.product_name)
      console.log("Department: " + itm.department_name)
      console.log("Price: " + price);
      console.log("In Stock: " + itm.stock_quantity)
      console.log("-------------------------------------------")
    }
    promptUser(data);
  });
}

function start() {
  readProducts();

}
start();