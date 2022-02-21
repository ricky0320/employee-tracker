const inquirer = require('inquirer');
const consoleTable = require('console.table');
const mysql = require('mysql');


const db = mysql.createConenction(
  {
    host: 'locakhost',
    user: 'root',
    password: 'password',
    database: 'bussiness_db'
  },
  console.log(`Connected to the inventory_db database.`)
);

