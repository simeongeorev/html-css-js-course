function solve(commandsArr = []) {
    commandsArr = commandsArr
    .map(x => x.split(", "))

    let parking = {}

    for (const entry of commandsArr) {
        const [command, licencePlate] = entry
        if (command == "IN") {
            parking[licencePlate] = true
        } else {
            delete parking[licencePlate]
        }
    }

    if (!Object.entries(parking).length) {
        console.log("Parking Lot is Empty")
    } else {
        Object.entries(parking)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(a => console.log(a[0]))
    }
    

}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)