// api url
const api_url =
	"https://api.data.gov.sg/v1/environment/psi";

// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	show(data);
}
// Calling that async function
getapi(api_url);

// Function to define innerHTML for HTML table
function show(data) {
	let tab =
		`<tr>
		<th>Metric</th>
        <th>National</th>
        <th>Central</th>
        <th>West</th>
        <th>East</th>
        <th>North</th>
        <th>South</th>
		</tr>`;
	
	// Loop to access all rows
    
	for (const [metric, location] of Object.entries(data.items[0].readings)) {
		tab += `<tr>
    <td>${metric}</td>
	<td>${location.national}</td>
	<td>${location.central}</td>
	<td>${location.west}</td>
	<td>${location.east}</td>
    <td>${location.north}</td>
	<td>${location.south}</td>			
</tr>`;
	}
	// Setting innerHTML as tab variable
	document.getElementById("data_psi").innerHTML = tab;
}
