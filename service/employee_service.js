const employees = new Map();

let recentId = 0;

function createEmployee(
  name,
  designation,
  taskStatus = "pending",
  description
) {
  const id = recentId + 1;
  recentId = id;
  const employee = {
    id: id,
    name: name,
    designation: designation,
    taskStatus: taskStatus,
    description: description,
  };
  employees.set(id, employee);
  console.log("Created Employee", employee);
}

function updateEmployeeDescription(id, description) {
  const employee = {
    ...employees.get(id),
    description: description,
  };
  employees.set(id, employee);
  console.log("Updated Employee", employee);
}

function deleteEmployee(id) {
  console.log("Deleted Employee", employees.get(id));
  employees.delete(id);
}

function updateEmployeeTaskStatus(id) {
  const employee = {
    ...employees.get(id),
    taskStatus: "completed",
  };
  setTimeout(() => {
    employees.set(id, employee);
    console.log("Updated Employee Task Status", employee);
  }, 5000);
}

function getEmployeeById(id) {
  updateEmployeeTaskStatus(id);
  return employees.get(id);
}

function getAllPendingTaskEmployees() {
  return [...employees.values()].filter(
    (employee) => employee.taskStatus === "pending"
  );
}

function getAllEmployees() {
  return [...employees.values()];
}

module.exports = {
  createEmployee,
  updateEmployeeDescription,
  deleteEmployee,
  getEmployeeById,
  getAllPendingTaskEmployees,
  getAllEmployees,
};
