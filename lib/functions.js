const mysql = require('mysql2');
const inquirer = require('inquirer');
const connection = mysql.createConnection({
    user: 'root',
    password: 'pass',
    database: 'portal_db'
  });

// let employeeArray = [];
// function employeeNames() {
//  connection.query('SELECT first_name, last_name FROM employees', function (err, employees) {
    
//     for (let i = 0; i < employees.length; i++) {
//         employeeArray.push(employees[i].first_name + ' ' + employees[i].last_name);
//         console.log(employeeArray)
//     }
    
// })

// };

// // console.log(employeeNames);
// employeeNames();


// ---------------new department-----------------------------
const deptInq = [ {
    message: 'Enter the name of the new department',
    name: 'newDept'
}];
// -----------------new role---------------------------------
const roleInq = [ {
    message: 'Enter the role title you would like to add',
    name: 'newRole'
},
{
    // type: 'number',
    message: 'Enter the salary of the role',
    name: 'newSalary'
},
{   
    type: 'number',
    message: 'Enter the department # of the new role',
    name: 'newRoledept'
},
];
// ---------------new employee------------------------------
const employeeInq = [ {
    message: 'Enter the employees first name',
    name: 'newFirst'
},
{
    message: 'Enter the employees last name',
    name: 'newLast'
},
{
    type: 'number',
    message: 'Enter the id# of the new employees role',
    name: 'newEmpRole'
},
{
    type: 'number',
    message: 'Enter the id# of the new employees manager',
    name: 'newEmpMang'
}
];
// -----------update employee--------------------------------
const updateIng = {
type: 'list',
message: 'Which employees role do you want to update?',
name: 'updateRole',
choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role']
}


function addDept() {
    inquirer.prompt(deptInq).then((data) => {
        if(err) throw err;
        connection.query(`INSERT INTO departments (name) VALUES (?)`, `${data.newDept}`, function (err, department) {
            console.log(`New Department ${data.newDept} added!`)
            process.exit();
          });
    })
};

function addRole() {
    inquirer.prompt(roleInq).then((data) => {
        const newRole = data.newRole;
        const newSalary = data.newSalary;
        const newRoledept = data.newRoledept;
        
        connection.query(`INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`, [newRole, newSalary, newRoledept], function (err, department) {
            if(err) throw err;
            console.log(`New Role ${data.newRole} added!`);
            process.exit();
          });
    })
};

function addEmployee() {
    inquirer.prompt(employeeInq).then((data) => {
        if(err) throw err;
        const newFirst = data.newFirst;
        const newLast = data.newLast;
        const newEmpRole = data.newEmpRole;
        const newEmpMang = data.newEmpMang;
        connection.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`, [newFirst, newLast, newEmpRole, newEmpMang], function (err, department) {
            console.log(`New Employee ${data.newFirst + data.newLast} added!`)
            process.exit();
          });
    })
}

function updateEmployee() {
    inquirer.prompt(updateInq).then((data) => {
        if(err) throw err;
    })

}

// class Methods {
//     constructor (text)
function displayTable(data) {
    if (data.portal === 'View All Departments') {
        connection.query('SELECT * FROM departments', function (err, departments) {
            console.table(departments)
            process.exit();
          });
    }

    if (data.portal === 'View All Roles') {
        connection.query('SELECT * FROM roles', function (err, roles) {
            console.table(roles)
            process.exit();
          });
    }
    
    if (data.portal === 'View All Employees') {
        connection.query('SELECT employees.id, employees.first_name, employees.last_name, roles.title, roles.salary FROM employees INNER JOIN roles ON employees.role_id=roles.id', function (err, employees) {
            console.table(employees)
            process.exit();
          });
    }

    if (data.portal === 'Add a Department') {
        addDept();
    }

    if (data.portal === 'Add a Role') {
        addRole();
    }
    if (data.portal === 'Add an Employee') {
        addEmployee();
    }
    if (data.portal === 'Update an Employee Role') {
        updateEmployee();
    }
};
// }


// ------GET ALL FIRST + LAST NAMES------------
// connection.query('SELECT first_name, last_name FROM employees', function (err, employees) {
//     // console.log(employees)
//     for (let i = 0; i < employees.length; i++) {
//         console.log(employees[i].first_name + ' ' + employees[i].last_name);
//     }
//     process.exit();
   
//   });
module.exports = { displayTable }