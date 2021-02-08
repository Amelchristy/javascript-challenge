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
    
    // Filter by field matching input value
    var filterDate = data.filter(data => data.datetime === inputDate);
    console.log(filterDate);
    var filterCity = data.filter(data => data.city === inputCity);
    console.log(filterCity);
    var filterState = data.filter(data => data.state === inputState);
    console.log(filterState);
    var filterCountry = data.filter(data => data.country === inputCountry);
    console.log(filterCountry);
    var filterShape = data.filter(data => data.shape === inputShape);
    console.log(filterShape);

    var filterData = data
    if (inputDate) {
      filterData = filterData.filter(data => data.datetime === inputDate)
    }
    if (inputCity) {
      filterData = filterData.filter(data => data.city === inputCity)
    }
    if (inputState) {
      filterData = filterData.filter(data => data.state === inputState)
    }
    if (inputCountry) {
      filterData = filterData.filter(data => data.country === inputCountry)
    }
    if (inputShape) {
      filterData = filterData.filter(data => data.shape === inputShape)
    }

    var tbody= d3.select("tbody");

    filterData.forEach((sighting) => {
        var row = tbody.append("tr"); 
        Object.entries(sighting).forEach(([key,value])=> {
        var cell = row.append("td");
        cell.text(value);
        });
    }); 

};

resetbtn.on("click", () => {
    tbody.html("");
    console.log("Table reset")
  })
