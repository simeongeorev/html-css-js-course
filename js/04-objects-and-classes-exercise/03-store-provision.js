function solve(currentStock = [], orderedProducts = []) {
    
    let currentStockObj = {}

    for (let i = 0; i < currentStock.length - 1; i+=2) {
        currentStockObj[currentStock[i]] = parseInt(currentStock[i+1])
    }

    const productNames = Object.keys(currentStockObj)

    for (let i = 0; i < orderedProducts.length - 1; i+=2) {
        if (productNames.includes(orderedProducts[i])){
            currentStockObj[orderedProducts[i]] += parseInt(orderedProducts[i+1])
        } else {
            currentStockObj[orderedProducts[i]] = parseInt(orderedProducts[i+1])
        }
    }
    
    for (const [k,v] of Object.entries(currentStockObj)) {
        console.log(`${k} -> ${v}`);
    }
}

solve([
'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
[
'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
]
)