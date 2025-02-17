//Task 1- Employee Salary Calculation; Function Declarations 

function calculateSalary(baseSalary, bonus, taxRate) {
    let salary =(baseSalary + bonus) - (baseSalary * taxRate);
    console.log(`Total Net Salary: $${salary.toFixed(2)}`);// logging for emplolyee salary

}

// Test Data
calculateSalary(5000, 500, .1); // Expected output: "Net Salary: $5000.00"
calculateSalary(7000, 1000, .15); // Expected output: "Net Salary: $6950.00"


//Task 2-

const calculateDiscount = function(price, discountRate) {
    let finalPrice = price - (price * discountRate).toFixed(2);
    console.log(`Final Price: $${finalPrice.toFixed(2)}`);//logging for final price
};

// Test Data
calculateDiscount(100, 0.2); // Expected output: "Final Price: $80.00"
calculateDiscount(250, 0.15); // Expected output: "Final Price: $212.50"


//Task 3
const calculateServiceFee = (amount, serviceType) => {
    let servicefee = 0;
    if (serviceType === "Premium") servicefee = amount * 0.15;
    else if (serviceType === "Standard") servicefee = amount * 0.10;
    else servicefee = amount * 0.05;
    
    console.log(`Service Fee: $${servicefee.toFixed(2)}`);//logging for service fee
};

// Test Cases
calculateServiceFee(200, "Premium"); // Expected output: "Service Fee: $30.00"
calculateServiceFee(500, "Standard"); // Expected output: "Service Fee: $50.00"

//Task 4
function calculateRentalCost(days, carType, insurance = false) {
    
    let dayRates = { "Economy": 40, "Standard": 60, "Luxury": 100 };
    let totalCost = (dayRates[days] * carType) + insurance;
    
    console.log(`Total Rental Cost: $${totalCost}`);//logging for rental cost
}


// Test Cases
calculateRentalCost(3, "Economy", true); // Expected output: "Total Rental Cost: $180"
calculateRentalCost(5, "Luxury", false); // Expected output: "Total Rental Cost: $500"

//Task 5: Returning Values
function calculateLoanPayment(principal, rate, time) {
   let calculatePayment= (principal +(principal * rate * time)).toFixed(2);
   return (`Total Payment is: $${calculatePayment}`);//logging for loan payment
}


// Test Cases
console.log(calculateLoanPayment(1000, 0.05, 2)); // Expected output: "Total Payment: $1100.00"
console.log(calculateLoanPayment(5000, 0.07, 3)); // Expected output: "Total Payment: $6050.00"
 
//Task 6: Higher-Order Functions
function getfilterLargeTransactions(transactions, filterFunction) {
    let LargeTransactions = transactions.filter(filterFunction);
    console.log(`Large Transactions filtered: ${LargeTransactions}`);// logging for large transactions
}

const transactions = [200, 1500, 3200, 800, 2500];

const filterLargeTransactions = transactions.filter(transaction => transaction > 1000);
console.log(filterLargeTransactions);
// Expected output: [1500, 3200, 2500]

//Task 7
function createCartTracker() {
    let totalcartItems = 0;
   
    return function(cart) {
        totalcartItems += cart;
        return `Total Cart Value: $${totalcartItems}`;
    };
 }
 
 
 // Test Cases
 let cart = createCartTracker();
 console.log(cart(20)); // Expected output: "Total Cart Value: $20"
 console.log(cart(35)); // Expected output: "Total Cart Value: $55"//logging for cart item

 //Task 8
function calculateSavings(years, amount) {
    if (years >= 10) return `Projected Savings: $${amount.toFixed(2)}` ;
    return calculateSavings(years + 1, amount * 1.05.toFixed(2));
}

 
 
 // Test Cases
 console.log(calculateSavings(8, 1000)); // Expected output: "Projected Savings: $1102.50"
 console.log(calculateSavings(5, 5000)); // Expected output: "Projected Savings: $5525.63"// logging for savings
