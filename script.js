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
		resolve("promise1");
	}, 1000);
});

const promise2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("promise2");
	}, 2000);
});

const promise3 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("promise3");
	}, 3000);
});

Promise.all([promise1, promise2, promise3]).then((data) => {
	// Remove the loading row
	output.removeChild(loadingRow);

	// Iterate over the data and add rows to the table
	data.forEach((item, index) => {
		let totalRow = document.createElement('tr');
totalRow.innerHTML = `<td>Total</td><td>${totalTime}</td>`; // replace totalTime with your calculated total time
output.appendChild(totalRow);
	});
}).catch((r) => {
  console.log(r);
});