function solve(arr = []) {
    arr = arr.map(x => JSON.parse(x))

    let dict = {}

    for (const obj of arr) {
        const entry = Object.entries(obj)[0]
        const k = entry[0]
        const v = entry[1]
        dict[k] = v
    }

    const sortedDict = Object.entries(dict)
        .sort((a, b) => a[0].localeCompare(b[0]))

    for (const entry of sortedDict) {
        console.log(`Term: ${entry[0]} => Definition: ${entry[1]}`);

    }
}

solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Coffee":"TEST made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
)