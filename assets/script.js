// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const employees = [];

// Collect employee data
// I accidentally developed this block of code below in my "course" folder over this last weekend, so copy/paste was used here.
// I started with building the 'while' loop, setting the parameters for that also. 
// Then I created the three prompt windows to collect properties.
// I had trouble with the next part, creating an array from collected objects while adding more. 
// Forgot to add the confirm window, so I added that at this point.
// Next was using isNaN, and parse, after some review to the salary prompt. 
// To finish I debugged a few times and review a few activities to produce this block.
// That's when I realized I hadnt created a repo and I had started coding where I was reviewing the syllabus. Oops! So copied block to here    
const collectEmployees = (function () {
    let keepgoing = true;
  
    while (keepgoing) {
      const firstName = prompt("Enter Employee First Name:", "First Name")
      if (firstName === null) {
          keepgoing = false;
          break;
        }
  
      const lastName = prompt("Enter Employee Last Name", "Last Name");
  
      let salary;
        do {
          salary = prompt("Enter Employee's Annual Salary","12345")
          if (salary === null) {
          salary = 0;
        }
        salary = parseFloat(salary);
        } while (isNaN(salary));
  
      const employee = {
        firstName,
        lastName,
        salary
      };
  
      employees.push(employee);
  
      if (!confirm("Do you want to add another new employee?")) {
        break;
      }
    }
  
    return employees
});

// Display the average salary
const displayAverageSalary = function (employeesArray) {
    if (employees.length = 0) {
        return 0;
    }

    let totalSalary = 0;
    for (let i = 0; i < employees.length; i++) {
        totalSalary += employees[i].salary;
    }
    const averageSalary = (totalSalary / employees.length);
    

    console.log(`The average employee salary between our ${employees.length} employee(s) is ${averageSalaryWithTwoDecimals}`)
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
    // TODO: Select and display a random employee
  
    console.log(`Congratulations to ${randomEmployee}, our random drawing winner!`)
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
  