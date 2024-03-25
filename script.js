let table = document.querySelector("#sampleTable")
function insert_Row() {
    let newRow = document.createElement("tr")
	let newRowData1 = document.createElement("td")
	newRowData1.innerText = "New Cell1"
	let newRowData2 = document.createElement("td")
	newRowData2.innerText = "New Cell2"
	newRow.append(newRowData1)
	newRow.append(newRowData2)
	table.prepend(newRow)
}
