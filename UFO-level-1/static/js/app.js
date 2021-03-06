// from data.js
var tableData = data;

var table = d3.select('#ufo-table');

//select the button
var button = d3.select("#filter-btn").on("click", runEnter);

//Create listeners
//button.on("click", runEnter);

// Get a reference to the table body
var tbody = d3.select("tbody");

//log the information from data
// console.log(data);
// YOUR CODE HERE!

tableData.forEach(function(sighting){
    console.log(sighting);
    var row = tbody.append("tr");

Object.entries(sighting).forEach(function([key, value]) {
    console.log(key,value);
    var cell = tbody.append("td");
    cell.text(value);
});
   
});


function runEnter() {
    //Prevent the page from refreshing
    d3.event.preventDefault();

    //Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    //Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(item => item.datetime === inputValue);

    console.log(filteredData);
    
    var table = d3.select("#ufo-table");
    var tbody = table.select("tbody");
    tbody.html("");

    var new_tbody = table.append('tbody');

    filteredData.forEach(function(sighting){
        console.log(sighting);
        var row = new_tbody.append("tr");
    
    Object.entries(sighting).forEach(function([key, value]) {
        console.log(key,value);
        var cell = new_tbody.append("td");
        cell.text(value);
    });
});
};
