//Task 1

function calculatenetSalary(baseSalary, bonus, taxRate) {
    let netSalary =(baseSalary + bonus) - (baseSalary * taxRate);
    console.log(`Total Net Salary: $${netSalary}`);

}

// Test Cases
calculatenetSalary(5000, 500, 1.); // Expected output: "Net Salary: $5000.00"
calculatenetSalary(7000, 1000, .15); // Expected output: "Net Salary: $6950.00"