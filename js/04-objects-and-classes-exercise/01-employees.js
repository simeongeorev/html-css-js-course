function employees(namesArr = []) {
    let employeesObjects = {}
    namesArr.forEach(name => {
        employeesObjects[name] = name.length
    });

    for (const [k,v] of Object.entries(employeesObjects)) {
        console.log(`Name: ${k} -- Personal Number: ${v}`)
    }
}

employees([
'Silas Butler',
'Adnaan Buckley',
'Juan Peterson',
'Brendan Villarreal'
]
)