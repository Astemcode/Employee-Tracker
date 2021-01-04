const connect = require(`http`);
const mysql = require(`mysql`);
const inquirer = require(`inquirer`);
const { exit } = require("process");

let connection = mysql.createConnection({
    host: `localhost`,
    port: 3306,
    user: `root`,
    password: `employees`,
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


    init();
        

    // const actions = [

    //     {
    //         type: "list",
    //         name: "actions",
    //         message: "What would you like to to?",
    //         choices: [
    
    //             "Add new employee",
    //             "View all employees",
    //             "View employees by department",
    //             "Update employee role",
    //             "View all roles",
    //             "Add role",
    //             "View all departments",
    //             "Add department",
    //             "Exit"
    
    //         ]
    
    //     }
    // ]
    
    
    
    // module.exports = { actions }