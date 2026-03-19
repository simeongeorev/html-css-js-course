function solve() {
    let text = document.querySelector("#inputs textarea").value
    text = text.substring(2, text.length - 2)
    console.log(text)

    let restaurantsRaw = text.split("\",\"")
    console.log(restaurantsRaw);
    

    let bestRestaurantsEl = document.querySelector("#bestRestaurant p")
    let workersEl = document.querySelector("#workers p")

    restaurantsRaw.forEach(restaurantRaw => {
        restaurantRaw = restaurantRaw.split(" - ")
        restaurantName = restaurantRaw[0]
        restaurantWorkers = restaurantRaw[1]
        console.log(restaurantName);
        console.log(restaurantWorkers);
        
    });
}