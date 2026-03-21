function solve() {
    const headersEls = document.querySelectorAll("table tr input")

    let headersArr = []

    for (const el of headersEls) {
        headersArr.push({
            name: el.name,
            checked: el.checked
        })
    }

    const rowsEls = document.querySelectorAll("table tbody tr")

    let results = []

    for (let rowI = 0; rowI < rowsEls.length; rowI++) {
        const cells = rowsEls[rowI].children

        const empInfoObj = {}

        for (let colI = 0; colI < cells.length; colI++) {
            const headerStatus = headersArr[colI].checked
            if (!headerStatus) {
                continue
            }

            const headerName = headersArr[colI].name
            const cellText = cells[colI].innerText

            empInfoObj[headerName] = cellText
        }
        
        results.push(empInfoObj)
        
    }

    document.getElementById("output").textContent = JSON.stringify(results)
}