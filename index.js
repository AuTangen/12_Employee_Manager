const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const Methods = require('./lib/functions.js');

console.log(Methods)

const connection = mysql.createConnection({
    user: 'root',
    password: 'pass',
    database: 'portal_db'
  });

const selections = [ {
    type: 'list',
    message: 'Welcome to the Employee Portal',
    name: 'portal',
    choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role']
}
]

function init() {
    inquirer.prompt(selections).then((data) => {
        console.log(data)
        Methods.displayTable(data);
        // const something = new Methods(data.portal)
        // console.log(something)
    //    something.displayTable();
    });
      
}

init();