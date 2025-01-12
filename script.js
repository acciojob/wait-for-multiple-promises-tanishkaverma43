// Get reference to the table body
const output = document.getElementById('output');

// Add the loading row
let loadingRow = document.createElement('tr');
loadingRow.id = 'loading'; // Add this line
loadingRow.innerHTML = '<td colspan="2">Loading...</td>';
output.appendChild(loadingRow);

// Define your promises
const promise1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("1");
	}, 1000);
});

const promise2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("2");
	}, 2000);
});

const promise3 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("3");
	}, 3000);
});

Promise.all([promise1, promise2, promise3]).then((data) => {
	// Remove the loading row
	output.removeChild(loadingRow);

	// Iterate over the data and add rows to the table
	data.forEach((item, index) => {
		let row = document.createElement('tr');
		row.innerHTML = `<td>Promise ${index + 1}</td><td>${item}</td>`;
		output.appendChild(row);
	});

	// Add the total row
	let totalRow = document.createElement('tr');
	totalRow.innerHTML = `<td>Total</td><td>${data.reduce((a, b) => a + b, 0)}</td>`; // replace totalTime with your calculated total time
	output.appendChild(totalRow);

}).catch((r) => {
  console.log(r);
});