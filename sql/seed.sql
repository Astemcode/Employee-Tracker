USE employee_db;
INSERT INTO department (name)
VALUES ("Sales"),
  ("Engineering"),
  ("Finance"),
  ("Legal");
  
INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 40000.00, 1),
  ("Salesperson", 35000.00, 1),
  ("Lead Engineer", 100000.00, 2),
  ("Software Engineer", 85000.00, 2),
  ("Accountant", 60000.00, 3),
  ("Legal Team Lead", 100000.00, 4),
  ("Lawyer", 80000.00,4),
  ("Manager", 95000.00,1);
  
INSERT INTO employee (first_name, last_name, role_id)
VALUES
  ("Randy", "Orton", 1),
  ("Sean", "Michaels", 2),
  ("Golden", "Tate", 3),
  ("Lisa", "Leslie", 4),
  ("Marshal", "Mathers", 5),
  ("Curtis", "Jackson", 6),
  ("Don", "Juan", 7);
  
  SELECT * FROM employee