var tableData = data;

let tbody = d3.select("tbody");

console.log(tableData);


//Build through loop
function buildTable(ufoSighting){
   tbody.html("");   
    ufoSighting.forEach((sighting) => {      
        let row = tbody.append("tr");    
        Object.values(sighting).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    })
}

d3.selectAll("#filter-btn").on("click", onclick);
function onclick(){
   
    d3.event.preventDefault();
    
    let date = d3.select("#datetime").property("value");
    let filterData = tableData;

    //Filter matching date
    if(date) {
        filterData = filterData.filter((data) => data.datetime === date);
    }
    // Build Table with Filtered Data
    buildTable(filterData);
}


// Build Table
buildTable(tableData);