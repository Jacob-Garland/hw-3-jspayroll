// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data   
const collectEmployees = function () {
    const employeesArray = [];
    let keepgoing = true;
  
    while (keepgoing) {
      const firstName = prompt("Enter New Employee First Name:", "First Name")
        if (firstName === null) {
          keepgoing = false;
          break;
        };
  
      const lastName = prompt("Enter New Employee Last Name", "Last Name");

      const salary = parseFloat(prompt("Enter New Employee's Annual Salary","12345.00"));
        if (isNaN(salary)) {
        alert("WARNING! Not a number. Please enter a valid input.");
        continue;
        };

      const newEmployee = {firstName, lastName, salary};
      
      employeesArray.push(newEmployee);
  
      if (!confirm("Do you want to add another new employee?")) {
        break;
      };
    };

    return employeesArray
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
    if (employeesArray.length === 0) {
        return 0;
    }
    
    let totalSalary = 0
    for (let i = 0; i < employeesArray.length; i++) {
        totalSalary += employeesArray[i].salary;
    };

    const employeeCount = employeesArray.length;
    const averageSalary = (totalSalary, employeeCount) => totalSalary / employeeCount;

    console.log(`The average employee salary between our ${employeeCount} employee(s) is $${averageSalary.toFixed(2)}`);
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
    const randomIndex = Math.floor(Math.random() * employeesArray.length);
    const selectedEmployee = employeesArray[randomIndex];
    
    console.log(`Congratulations to ${selectedEmployee.firstName} ${selectedEmployee.lastName}, our random drawing winner!`)
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
    // Get the employee table
    const employeeTable = document.querySelector('#employee-table');
  
    // Clear the employee table
    employeeTable.innerHTML = '';
  
    // Loop through the employee data and create a row for each employee
    for (let i = 0; i < employeesArray.length; i++) {
      const currentEmployee = employeesArray[i];
  
      const newTableRow = document.createElement('tr');
  
      const firstNameCell = document.createElement('td');
      firstNameCell.textContent = currentEmployee.firstName;
      newTableRow.append(firstNameCell);
  
      const lastNameCell = document.createElement('td');
      lastNameCell.textContent = currentEmployee.lastName;
      newTableRow.append(lastNameCell);
  
      const salaryCell = document.createElement('td');
      // Format the salary as currency
      salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      });
  
      newTableRow.append(salaryCell);
  
      employeeTable.append(newTableRow);
    }
  };
  
  const trackEmployeeData = function () {
    const employees = collectEmployees();
  
    console.table(employees);
  
    displayAverageSalary(employees);
  
    console.log('==============================');
  
    getRandomEmployee(employees);
  
    employees.sort(function (a, b) {
      if (a.lastName < b.lastName) {
        return -1;
      } else {
        return 1;
      }
    });
  
    displayEmployees(employees);
  };
  
  // Add event listener to 'Add Employees' button
  addEmployeesBtn.addEventListener('click', trackEmployeeData);
  