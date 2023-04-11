const mysql = require('mysql2');
const inquirer = require('inquirer');
const connection = mysql.createConnection({
    user: 'root',
    password: 'pass',
    database: 'portal_db'
  });

const deptInq = [ {
    message: 'Enter the name of the new department',
    name: 'newDept'
}];

const roleInq = [ {
    message: 'Enter the role title you would like to add',
    name: 'newRole'
},
{
    message: 'Enter the salary of the role',
    name: 'newSalary'
},
{
    message: 'Enter the department # of the new role',
    name: 'newRoledept'
},
];


function addDept() {
    inquirer.prompt(deptInq).then((data) => {
        connection.query(`INSERT INTO departments (name) VALUES (${data.newDept})`, function (err, department) {
            console.log(`New Department ${data.newDept} added!`)
          });
    })
};

function addRole() {
    inquirer.prompt(roleInq).then((data) => {
        connection.query(`INSERT INTO departments (title, salary, department_id) VALUES (${data.newRole}, ${data.newSalary}, ${data.newRoledept})`, function (err, department) {
            console.log(`New Role ${data.newRole} added!`)
          });
    })
};

function addEmployee() {
    inquirer.prompt(employeeInq).then((data) => {
        connection.query(`INSERT INTO departments (name) VALUES (${data.newEmployee})`, function (err, department) {
            console.log(`New Department ${data.newEmployee} added!`)
          });
    })
}

// class Methods {
//     constructor (text)
function displayTable(data) {
    if (data.portal === 'View All Departments') {
        connection.query('SELECT * FROM departments', function (err, departments) {
            console.table(departments)
          });
    }

    if (data.portal === 'View All Roles') {
        connection.query('SELECT * FROM roles', function (err, roles) {
            console.table(roles)
          });
    }
    
    if (data.portal === 'View All Employees') {
        connection.query('SELECT * FROM employees', function (err, employees) {
            console.table(employees)
          });
    }

    if (data.portal === 'Add a Department') {
        addDept();
    }

    if (data.portal === 'Add a Role') {
        addRole();
    }
};
// }

module.exports = { displayTable }