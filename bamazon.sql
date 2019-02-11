CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
	PRIMARY KEY (id),
    id INTEGER(12) AUTO_INCREMENT,
    product_name VARCHAR(50),
    department_name VARCHAR (50),
	price INTEGER(50),
    stock_quantity INTEGER(10)
)

INSERT INTO products(id, product_name, department_name, price, stock_quantity)
VALUES (1, "Rocking Horse", "Baby", 29.99, 72);

INSERT INTO products(id, product_name, department_name, price, stock_quantity)
VALUES (2, "Mid-Century Modern Couch", "Home", 449, 7);

INSERT INTO products(id, product_name, department_name, price, stock_quantity)
VALUES (3, "Mid-Century Chandelier", "Home", 179.39, 3);

INSERT INTO products(id, product_name, department_name, price, stock_quantity)
VALUES (4, "Chew Stix", "Pets", 10.28, 132);

INSERT INTO products(id, product_name, department_name, price, stock_quantity)
VALUES (5, "Anti-Aging Serum", "Health & Beauty", 98, 63);

INSERT INTO products(id, product_name, department_name, price, stock_quantity)
VALUES (6, "Onesie Three Pack", "Baby", 19.99, 33);

INSERT INTO products(id, product_name, department_name, price, stock_quantity)
VALUES (7, "Mid-Century Desk", "Home", 187.44, 4);

INSERT INTO products(id, product_name, department_name, price, stock_quantity)
VALUES (8, "Go Go Boots", "Clothing", 77.50, 12);

INSERT INTO products(id, product_name, department_name, price, stock_quantity)
VALUES (9, "MacBook Pro", "Electronics", 1500, 203);

INSERT INTO products(id, product_name, department_name, price, stock_quantity)
VALUES (10, "Hot Tub", "Gardening", 1229.99, 65);

SELECT * FROM products;