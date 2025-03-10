// List of Georgian names to use randomly
const georgianNames = [
    "გიორგი", "ნიკა", "დავით", "ლუკა", "სანდრო", 
    "ლევან", "ირაკლი", "ზურა", "თორნიკე", "ბექა"
];

// Different haircut styles
const haircutStyles = [
    "buzz cut", "fade", "undercut", "crew cut", "classic cut"
];

// Function to generate a random customer
function generateRandomCustomer() {
    const randomName = georgianNames[Math.floor(Math.random() * georgianNames.length)];
    const randomStyle = haircutStyles[Math.floor(Math.random() * haircutStyles.length)];
    
    return {
        name: randomName,
        style: randomStyle
    };
}

// Function to add a customer to the list
function addCustomer(customer) {
    const bigDiv = document.querySelector(".bifDiv");
    
    const customerHtml = `
    <div class="constumers">
        <div class="k1">
            <p>${customer.name}</p>
            <h1>${customer.style}</h1>
            <button class="ku1">კრიჭი კრიჭი</button>
        </div>
    </div>`;
    
    bigDiv.innerHTML += customerHtml;
    
    // Add event listeners to the new buttons
    const allButtons = document.querySelectorAll('.ku1');
    const latestButton = allButtons[allButtons.length - 1];
    
    latestButton.addEventListener('click', function() {
        this.closest('.constumers').remove();
    });
}

// Generate customers at random intervals
setInterval(() => {
    // Generate 1-3 random customers at a time
    const randomPeople = Math.floor(Math.random() * 3) + 1;
    
    for (let i = 0; i < randomPeople; i++) {
        const customer = generateRandomCustomer();
        addCustomer(customer);
    }
    
    // Log the number of customers added
    console.log(`Added ${randomPeople} new customers`);
    
    // Limit the number of customers in the list to prevent performance issues
    const customerElements = document.querySelectorAll('.constumers');
    if (customerElements.length > 20) {
        // Remove the oldest customers when the list gets too long
        for (let i = 0; i < randomPeople; i++) {
            if (customerElements[i]) {
                customerElements[i].remove();
            }
        }
    }
}, 3000);

// Add some initial customers when the page loads
window.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < 5; i++) {
        const customer = generateRandomCustomer();
        addCustomer(customer);
    }
});