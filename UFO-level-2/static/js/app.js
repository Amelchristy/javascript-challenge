// from data.js
var tableData = data;

// YOUR CODE HERE!
var tableData = data;
var button = d3.select("#filter-btn");
var form = d3.select("#form");
var tbody = d3.select("tbody");
var resetbtn = d3.select("#reset-btn");

button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {
    d3.event.preventDefault();

    var inputDate = d3.select("#date").property("value");
    var inputCity = d3.select("#city").property("value");
    var inputState = d3.select("#state").property("value");
    var inputCountry = d3.select("#country").property("value");
    var inputShape = d3.select("#shape").property("value");

//Filter by matched value
    var cleanedDate = data.filter(data => data.datetime === inputDate);
    console.log(cleanedDate);
    var cleanedCity = data.filter(data => data.city === inputCity);
    console.log(cleanedCity);
    var cleanedState = data.filter(data => data.state === inputState);
    console.log(cleanedState);
    var cleanedCountry = data.filter(data => data.country === inputCountry);
    console.log(cleanedCountry);
    var cleanedShape = data.filter(data => data.shape === inputShape);
    console.log(cleanedShape);

    var cleanedData = data
    if (inputDate) {
      cleanedData = cleanedData.filter(data => data.datetime === inputDate)
    }
    if (inputCity) {
      cleanedData = cleanedData.filter(data => data.city === inputCity)
    }
    if (inputState) {
      cleanedData = cleanedData.filter(data => data.state === inputState)
    }
    if (inputCountry) {
      cleanedData = cleanedData.filter(data => data.country === inputCountry)
    }
    if (inputShape) {
      cleanedData = cleanedData.filter(data => data.shape === inputShape)
    }

    var tbody= d3.select("tbody");

    cleanedData.forEach((sighting) => {
        var row = tbody.append("tr"); 
        Object.entries(sighting).forEach(([key,value])=> {
        var cell = row.append("td");
        cell.text(value);
        });
    }); 

};

resetbtn.on("click", () => {
    tbody.html("");
    console.log("Reset")
  })
