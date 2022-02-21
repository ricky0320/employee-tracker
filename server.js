const inquirer = require('inquirer');
const mysql = require('mysql');
const cTable = require('console.table');


const db = mysql.createConnection(
  {
    host: 'locakhost',
    user: 'root',
    password: 'password',
    database: 'bussiness_db'
  },
  console.log(`Connected to the inventory_db database.`)
);

// start menu
function promptUser() {
  inquirer.prompt([
    {
      type: 'list',
      message: 'Please choose an option:',
      name: 'option',
      choice: [

        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',        
        'Update an employee',
        'Exit'

      ]     
    }
  ])
  // Return user's option
  .then(function(answer) {
    switch (answer.action) {

      case 'View all departments':
        allDepartments();
        break;

      case 'View all roles':
        allRoles();
        break;

      case 'View all employees':
        allEmployees();
        break;

      case 'Add a department':
        addDepartment();
        break;

      case 'Add a role':
        addRole();
        break;

      case 'Add an employee':
        addEmployee();
        break;

      case 'Update an employee role':
        updateEmployee();
        break;

      case 'Exit':
        db.end();
        break;
    }
  });
};

// Create all departments table
function allDepartments() {
  const sql = `SELECT * FROM Department`
  db.query(sql, (err, res) => {
    if(err) {
      throw err
    }
    console.table(res)
    promptUser()
  });
}

// Create all roles table
function allRoles() {
  const sql = `SELECT * FROM Roles`
  db.query(sql, (err, res) => {
    if(err) {
      throw err
    }
    console.table(res)
    promptUser()
  });
}

function allEmployees() {
  const sql = `SELECT * FROM Employees`
  db.query(sql, (err, res) => {
    if(err) {
      throw err
    }
    console.table(res)
    promptUser()
  });
}

// add department function



// add employee function
function addEmployee() {
  inquirer.prompt([
    {
      name: 'firstname',
      type: 'input',
      message: 'Please enter the first name of the employee.'
    },
    {
      name: 'lastname',
      type: 'input',
      message: 'Please enter the last name of the employee.'
    },
    {
      name: 'roleId',
      type: 'input',
      message: 'Please enter the role ID.'
    },
    {
      name: 'managerId',
      type: 'input',
      message: 'Please enter the manager ID of the employee.'
    }
  ]).then(answer => {
    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`;
    const params = [answer.firstname, answer.lastname, answer.roleId, answer.managerId]
    db.query(sql, params, (err, res) => {
      if (err) throw err;
      console.log('Successfully added department.')
      promptUser()
      });
  });
};