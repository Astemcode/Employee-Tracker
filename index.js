const connect = require(`http`);
const mysql = require(`mysql`);
const inquirer = require(`inquirer`);
const { exit } = require("process");

let connection = mysql.createConnection({
    host: `localhost`,
    port: 3306,
    user: `root`,
    password: `rootpass`,
    database: `employee_db`
})



function init() {
	inquirer
		.prompt([
			{
				type: `list`,
				message: `Which task would you like to complete today?`,
				choices: [ `Add Employees`, `Add Departments`, `Add Roles`, `View Departments`, `View Roles`, `View Employees`, `View Employees by Department`, `Update Employee Role`, `Exit`],
				name: `Selection`
			}
		])
		.then((response) => {
			switch (response.Selection) {
                case `Add Employees`:
					addEmployee();
                    break;
				case `Add Departments`:
					addDepartment();
					break;
				case `Add Roles`:
					addRole();
					break;
                case `View Departments`:
                        viewDepartments();
                        break;
                case `View Roles`:
                    viewRoles();
                    break;
                case `View Employees`:
                    viewEmployees();
                    break;
                case `View Employees by Department`:
                    empDept();
                    break;
                case `Update Employee Role`:
                    updateRole();
                    break;
                case `Exit`:
                    exit()
                    break;
			}
		});
    }
    
function addEmployee(){
    inquirer
    .prompt([
        {
            type: `input`,
            message: ` What is the first name of the employee you would like to add?`,
            name: `firstName`,
        },
        {
            type: `input`,
            message: ` What is the last name of the employee you would like to add?`,
            name: `lastName`,
        },
        {
            type: `input`,
            message: ` What is the Role ID of the new Employee you would like to add?`,
            name: `roleID`,
        },
        {
            type: `input`,
            message: `What is the ID of the manager for the new Employee that you would like to add?`,
            name: `managerID`,
        }
    ])
        .then((response) => {
          let query = connection.query("INSERT INTO employee SET ?", {
            first_name: response.firstName,
            last_name: response.lastName,
            role_id: response.roleID,
            manager_id: response.managerID
          },
          (err, res) => {
            if(err) throw err;
            console.log(`${res.affectedRows} was added to the Employee list!`);
            init();
          })
        })
}


function addDepartment(){
    inquirer
    .prompt([
      {
        type: 'input',
        message: "What is the new Department that you would like to add called?",
        name: 'Name',
      }
])
    .then((response) => {
      let query = connection.query("INSERT INTO department SET ?", {
        name: response.Name,
      },
      (err, res) => {
        if(err) throw err;
        console.log(`${res.affectedRows} Department added successfully!`);
        
        init();
      })
    })
}

function addRole(){
  inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the Title of the new role that you would like to add?',
      name: 'Title',
    },
    {
      type: 'input',
      message: 'What is the Salary of the new role that you would like to add?',
      name: 'Salary',
    },
    {
      type: 'input',
      message: 'What is the department_id of the new role that you would like to add?',
      name: 'department_id',
    }
])
  .then((response) => {
    let query = connection.query("INSERT INTO role SET ?", {
      title: response.Title,
      salary:response.Salary,
      department_id: response.department_id
    },
    (err, res) => {
      if(err) throw err;
      console.log(`${res.affectedRows} Department added`);
      init();
    })
  })

}

function viewDepartments(){
  let query = connection.query("SELECT * FROM department", 
  (err, res) => {
    if(err) throw err;
    console.table(res);
    init();
  })
}

function viewRoles(){
  let query = connection.query("SELECT * FROM role", 
  (err, res) => {
    if(err) throw err;
    console.table(res);
    init();
  })
}

function viewEmployees(){
  let query = connection.query("SELECT * FROM employee", 
  (err, res) => {
    if(err) throw err;
    console.table(res);
    init();
  })
}

function updateRole(){
  inquirer
  .prompt([
    {
      type: 'input',
      message: "Which Employee (ID#) would you like to change the role of? ",
      name: 'EmpID',
    },
    {
      type: 'input',
      message: 'Which role would you like them to hold?',
      name: 'Role',
    }
])
  .then((response) => {
    let query = connection.query("UPDATE employee SET ? WHERE ?", [
      {role_id: response.Role},
      {id:response.EmpID}
    ],
    (err, res) => {
      if(err) throw err;
      console.log(`${res.affectedRows} Role Changed`);
      init();
    })
  })

}

// function exit(){
//   console.log("Thanks for using CMS model no. 9001")
// }

    init();
        

