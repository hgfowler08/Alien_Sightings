// from data.js
var tableData = data;

// YOUR CODE HERE!
// Reference table body in index.html
var tbody = d3.select("tbody");

// Print data to console
console.log(tableData);


function buildTable(data) {
    // Loop through UFO data and log each ufo sighting
    console.log("before");
data.forEach(ufoSighting => {
    console.log("ufoSighting", ufoSighting);

    // Append one table row for each sighting
    var row = tbody.append("tr");

    // Print each ufo sighting
    Object.entries(ufoSighting).forEach(function([key, value]){
        console.log(key, value);

        // Append 1 cell per sighting value (datetime, city, state, shape, etc)
        var cell = tbody.append("td");

        // Update each cell with ufo values
        cell.text(value);
    })
})
}


// Select filter button
var submit = d3.select("#filter-btn");
buildTable(tableData);
submit.on("click", function(){

    // Prevent page from refreshing
    d3.event.preventDefault();

    // Select input element and get the raw html node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);
    // Clear table
    tbody.html('');
    // Filter sighting data by datetime
    var filteredData = tableData.filter(ufoObservation => ufoObservation.datetime === inputValue);
    console.log("filter", filteredData);
    // Rewrite table with selected date time
    buildTable(filteredData);
    
    
});