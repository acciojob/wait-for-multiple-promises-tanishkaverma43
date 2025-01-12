// Get reference to the table body
const output = document.getElementById('output');

// Add the loading row
let loadingRow = document.createElement('tr');
loadingRow.innerHTML = '<td colspan="2">Loading...</td>';
output.appendChild(loadingRow);

Promise.all([promise1, promise2, promise3]).then((data) => {
	// Remove the loading row
	output.removeChild(loadingRow);

	// Iterate over the data and add rows to the table
	data.forEach((item, index) => {
		let row = document.createElement('tr');
		row.innerHTML = `<td>Promise ${index + 1}</td><td>${item}</td>`;
		output.appendChild(row);
	});
}).catch((r) => {
  console.log(r);
});