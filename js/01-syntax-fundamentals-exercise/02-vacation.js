function solve(nPeople, groupType, weekDay) {
    let price;
    let totalPrice;

    if (groupType === "Students") {
        if (weekDay === "Friday") {
            price = 8.45
        } else if (weekDay === "Saturday") {
            price = 9.8
        } else if (weekDay === "Sunday") {
            price = 10.46
        }

        if (nPeople >= 30) {
            totalPrice = (price * nPeople) * 0.85
        } else {
            totalPrice = nPeople * price
        }

    } else if (groupType === "Business") {
        if (weekDay === "Friday") {
            price = 10.90
        } else if (weekDay === "Saturday") {
            price = 15.60
        } else if (weekDay === "Sunday") {
            price = 16
        }

        if (nPeople >= 100) {
            totalPrice = (nPeople - 10) * price
        } else {
            totalPrice = nPeople * price
        }

    } else if (groupType === "Regular") {
        if (weekDay === "Friday") {
            price = 15
        } else if (weekDay === "Saturday") {
            price = 20
        } else if (weekDay === "Sunday") {
            price = 22.5
        }

        if (nPeople >= 10 && nPeople <= 20) {
            totalPrice = (price * nPeople) * 0.95
        } else {
            totalPrice = nPeople * price
        }
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

// solve(30,
// "Students",
// "Sunday"
// )

solve(40,
    "Regular",
    "Saturday"
)
