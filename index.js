const {
  createEmployee,
  updateEmployeeDescription,
  deleteEmployee,
  getEmployeeById,
  getAllPendingTaskEmployees,
  getAllEmployees,
} = require("./service/employee_service");

createEmployee("Shravan", "Flutter Developer", "completed", "");
createEmployee("Deep", "Web Developer", "pending", "");

updateEmployeeDescription(1, "Hello World!");

console.log("Get All Pending Task Employee", getAllPendingTaskEmployees());
console.log("Get Employee By ID", getEmployeeById(1));

setTimeout(() => {
  console.log("Get All Employees", getAllEmployees());
}, 5000);

deleteEmployee(2);

getAllEmployees();
