-- Schema
DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(15,2) NOT NULL,
  department_id INT NULL,
FOREIGN KEY (department_id) REFERENCES department (id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT,
FOREIGN KEY (manager_id) REFERENCES employee (id),
FOREIGN KEY(role_id) REFERENCES role (id)
);

INSERT INTO department (name) 
VALUES ("Sales"), ("Engineering"),("Legal"), ("Finance"),("Marketing");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 60000 ,1),  
("Developer", 80000,2),
("CFO", 100000, 3),
("Day Watcher",75000,4),
("Sales Rep", 30000 ,1),
("Senior Developer", 95000,2),
("Accountant", 90000, 3);

INSERT INTO employee (first_name, last_name, role_id,manager_id)
VALUES ("Nina", "Simone", 1,1),
("Richard", "Philip", 2,1),
("Angie", "Milandro",3,2),
("Monica","Wynter",4,3);

