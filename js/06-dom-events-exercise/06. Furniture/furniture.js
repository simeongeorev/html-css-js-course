document.addEventListener('DOMContentLoaded', solve);

function solve() {
	const textArea = document.querySelector('#input textarea')
	const shopTextArea = document.querySelector('#shop textarea')

	const tableBody = document.querySelector('tbody');
	const inputForm = document.getElementById('input')

	inputForm.addEventListener('submit', event => {
		const furnitures = JSON.parse(textArea.value)
		const furnitureTrsEls = furnitures.map(createFurnitureTr)
		event.preventDefault();
		tableBody.append(...furnitureTrsEls);
	})

	const buyBtnEl = document.querySelector('input[value=Buy]')

	buyBtnEl.addEventListener('click', event => {
		event.preventDefault();
		const checkBoxesEls = document.querySelectorAll('td input[type=checkbox]')

		let boughtFurniture = []
		let totalPrice = 0
		let decFactTotal = 0
		let selectedProducts = 0

		checkBoxesEls.forEach(checkBox => {
			if (!checkBox.checked) {
				return
			}

			const furnitureName = checkBox.parentElement.parentElement
				.querySelector('td:nth-child(2)').textContent
			boughtFurniture.push(furnitureName)

			const furniturePrice = checkBox.parentElement.parentElement
				.querySelector('td:nth-child(3)').textContent
			totalPrice += Number(furniturePrice)

			const decorFact = checkBox.parentElement.parentElement
				.querySelector('td:nth-child(4)').textContent
			decFactTotal += Number(decorFact)
			selectedProducts++
		})

		if (boughtFurniture.length > 0) {
			shopTextArea.value = `Bought furniture: ${boughtFurniture.join(', ')}\nTotal price: ${totalPrice}\nAverage decoration factor: ${decFactTotal / selectedProducts}`
		} else {
			shopTextArea.value = ''
		}
	})

	function createFurnitureTr(furniture) {
		// img
		const imageEl = document.createElement('img')
		imageEl.src = furniture.img
		const imageTd = document.createElement('td')
		imageTd.appendChild(imageEl)

		// name
		const nameEl = document.createElement('p')
		nameEl.textContent = furniture.name
		const nameTd = document.createElement('td')
		nameTd.appendChild(nameEl)

		// price
		const priceEl = document.createElement('p')
		priceEl.textContent = furniture.price
		const priceTd = document.createElement('td')
		priceTd.appendChild(priceEl)

		// decFactor
		const decFactorEl = document.createElement('p')
		decFactorEl.textContent = furniture.decFactor
		const decFactorTd = document.createElement('td')
		decFactorTd.appendChild(decFactorEl)

		// mark
		const markEl = document.createElement('input')
		markEl.type = 'checkbox'
		const markTd = document.createElement('td')
		markTd.appendChild(markEl)

		const furnitureTr = document.createElement('tr')

		furnitureTr.append(
			imageTd,
			nameTd,
			priceTd,
			decFactorTd,
			markTd
		)

		return furnitureTr;
	}
} 