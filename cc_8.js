//Task 1- Employee Salary Calculation; Function Declarations 

function calculatenetSalary(baseSalary, bonus, taxRate) {
    let netSalary =(baseSalary + bonus) - (baseSalary * taxRate);
    console.log(`Total Net Salary: $${netSalary}`);

}

// Test Data
calculatenetSalary(5000, 500, .1); // Expected output: "Net Salary: $5000.00"
calculatenetSalary(7000, 1000, .15); // Expected output: "Net Salary: $6950.00"


//Task 2-

const calculateDiscount = function(price, discountRate) {
    let finalPrice = price - (price * discountRate);
    console.log(`Final Price: $${finalPrice}`);
};

// Test Data
calculateDiscount(100, 0.2); // Expected output: "Final Price: $80.00"
calculateDiscount(250, 0.15); // Expected output: "Final Price: $212.50"


//Task 3
const calculateServiceFee = (amount, serviceType) => {
    let servicefee = 0;
    if (serviceType === "Premium") servicefee = amount * 0.15;
    else if (serviceType === "Standard") servicefee = amount * 0.1;
    else serviceType = amount * 0.05;
    
    console.log(`The Service Fee is: $${servicefee}`);
};

// Test Cases
calculateServiceFee(200, "Premium"); // Expected output: "Service Fee: $30.00"
calculateServiceFee(500, "Standard"); // Expected output: "Service Fee: $50.00"

//Task 4
function calculateRentalCost(days, carType, insurance = false) {
    
    let dayRates = { "Economy": 40, "Standard": 60, "Luxury": 100 };
    let totalCost = (dayRates[days] * carType) + insurance;
    
    console.log(`Total Rental Cost: $${totalCost}`);
}

// Test Cases
calculateRentalCost(3, "Economy", true); // Expected output: "Total Rental Cost: $180"
calculateRentalCost(5, "Luxury", false); // Expected output: "Total Rental Cost: $500"

//Task 5: Returning Values
function calculateLoanPayment(principal, rate, time) {
   let calculatePayment= (principal +(principal * rate * time)).toFixed(2);
   return (`Total Payment is: $${calculatePayment}`);
}


// Test Cases
console.log(calculateLoanPayment(1000, 0.05, 2)); // Expected output: "Total Payment: $1100.00"
console.log(calculateLoanPayment(5000, 0.07, 3)); // Expected output: "Total Payment: $6050.00"
 
//Task 6: Higher-Order Functions
const transactions = [200, 1500, 3200, 800, 2500];


const filterLargeTransactions = transactions.filter(transaction => transaction > 1000);
console.log(filterLargeTransactions);
// Expected output: [1500, 3200, 2500]

//Task 7
function createCartTracker() {
    let totalcartItems = 0;
   
    return function(cart) {
        totalcartItems += cart;
        return `The Item Total is: $${totalcartItems}`;
    };
 }
 
 
 // Test Cases
 let cart = createCartTracker();
 console.log(cart(20)); // Expected output: "Total Cart Value: $20"
 console.log(cart(35)); // Expected output: "Total Cart Value: $55"

 //Task 8
function calculateSavings(years, amount) {
    if (years == 10) return amount;
    return calculateSavings(amount + .05);
 }
 
 
 // Test Cases
 calculateSavings(8, 1000); // Expected output: "Projected Savings: $1102.50"
 calculateSavings(5, 5000); // Expected output: "Projected Savings: $5525.63"
