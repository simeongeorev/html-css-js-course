/**
 * Very hard task with nested objects + sorting and filtering objects
 */
function solve() {
    let text = document.querySelector("#inputs textarea").value;
    text = text.substring(2, text.length - 2);

    let restaurantsRaw = text.split("\",\"");
    
    let bestRestaurantsEl = document.querySelector("#bestRestaurant p");
    let workersEl = document.querySelector("#workers p");

    let restaurants = {}

    restaurantsRaw.forEach(restaurantRaw => {
        // "PizzaHut - Peter 500, George 300, Mark 800"
        restaurantRaw = restaurantRaw.split(" - ");

        let restaurantName = restaurantRaw[0];
        let restaurantWorkers = restaurantRaw[1].split(", ").map(x => x.split(" "));
        const newWorkers = Object.fromEntries(restaurantWorkers);

        if (restaurants[restaurantName]) {
            Object.assign(restaurants[restaurantName], newWorkers);
        }
        else {
            restaurants[restaurantName] = newWorkers;
        }
    });

    const sortedRestaurants = Object.entries(restaurants).sort((a, b) => getAverageSalary(b[1]) - getAverageSalary(a[1]));

    const bestRestaurant = sortedRestaurants[0][0]
    const bestEmployeeObj = sortedRestaurants[0][1]

    const bestAverageSalary = getAverageSalary(bestEmployeeObj)

    const employeesSorted = Object.entries(bestEmployeeObj).sort((a, b) => Number(b[1]) - Number(a[1]))

    const bestSalary = Number(employeesSorted[0][1])

    bestRestaurantsEl.innerText = `Name: ${bestRestaurant} Average Salary: ${bestAverageSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`
    
    // `Name: {worker name} With Salary: {worker salary} Name: {worker2 name} With Salary: {worker2 salary} Name: {worker3 name} With Salary: {worker3 salary}…`
    let result = []
    console.log(employeesSorted);
    
    employeesSorted.forEach(emp => {
        result.push(`Name: ${emp[0]} With Salary: ${emp[1]}`)
    }) 

    workersEl.innerText = result.join(" ")

        // get average salary
    function getAverageSalary(employeeObj) {
        const salaries = Object.values(employeeObj)
        const sum = salaries.reduce((currentSum, a) => currentSum + Number(a), 0)
        const average = sum / salaries.length
        return average
    }
}