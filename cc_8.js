//Task 1- Employee Salary Calculation; Function Declarations 

function calculatenetSalary(baseSalary, bonus, taxRate) {
    let netSalary =(baseSalary + bonus) - (baseSalary * taxRate);
    console.log(`Total Net Salary: $${netSalary}`);

}

// Test Data
calculatenetSalary(5000, 500, 1.); // Expected output: "Net Salary: $5000.00"
calculatenetSalary(7000, 1000, .15); // Expected output: "Net Salary: $6950.00"


//Task 2-

const calculateDiscount = function(price, discountRate) {
    let finalPrice = price - (price * discountRate);
    console.log(`Final Price: $${finalPrice}`);
};

// Test Data
calculateDiscount(100, 0.2); // Expected output: "Final Price: $80.00"
calculateDiscount(250, 0.15); // Expected output: "Final Price: $212.50"


