var flavorCounts = {}; // Object to store counts of each flavor

function addFlavors() {
    var flavorsInput = document.getElementById("flavorsInput").value.trim().toLowerCase(); // Get the input and convert to lowercase
    var flavorsArray = flavorsInput.split(","); // Split input into an array
    
    // Count occurrences of each flavor
    flavorsArray.forEach(function(flavor) {
        flavor = flavor.trim(); // Remove any leading/trailing spaces
        if (flavor !== "") {
            if (flavorCounts[flavor]) {
                flavorCounts[flavor]++;
            } else {
                flavorCounts[flavor] = 1;
            }
        }
    });
    
    // Display counts in the table
    updateTable();
}

function updateTable() {
    var table = document.getElementById("flavorTable");
    
    // Clear existing table contents
    table.innerHTML = "<tr><th>Flavor</th><th>Count</th></tr>";
    
    // Update table with current counts
    Object.keys(flavorCounts).forEach(function(flavor) {
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.textContent = flavor;
        cell2.textContent = flavorCounts[flavor];
    });
}