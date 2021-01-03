const (connect) = require(`http`);
const mysql = require(`mysql`);
const questions = require(`inquirer`);

let connection = mysql.createConnection({
    host: `localhost`,
    port: 3306,
    user: `root`,
    password: `password`,
    database: `employee_db`
})



function init() {
	inquirer
		.prompt([
			{
				type: `list`,
				message: `Which task would you like to complete today?`,
				choices: [ `Add Departments, Roles, or Employees`,'Add Employee', `Remove Employee`, `Add Role`, `Remove Role`, `Add Department`, `Remove Department`, `View Departments, Roles, or Employees`, `View All Employees`, 'View Employees By Department', `View All Employees by Manager`,  `Update Departments, Roles, or Employees`, `Update Employee Role`, `Update Employee Manager`, `Exit`],
				name: `Selection`
			}
		])
		.then((response) => {
			switch (response.Selection) {
				case `Add Departments, Roles, or Employees`:
					addInfo();
					break;
				case `View Departments, Roles, or Employees`:
					viewInfo();
					break;
				case `Update Employee roles`:
					updateRoles();
					break;
			}
		});
    }
    


    init();
        

    const actions = [

        {
            type: "list",
            name: "actions",
            message: "What would you like to to?",
            choices: [
    
                "Add new employee",
                "View all employees",
                "View employees by department",
                "Update employee role",
                "View all roles",
                "Add role",
                "View all departments",
                "Add department",
                "Exit"
    
            ]
    
        }
    ]
    
    
    
    module.exports = { actions }