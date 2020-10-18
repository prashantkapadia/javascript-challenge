// from data.js
var tableData = data;
var tbody = d3.select("tbody");
// YOUR CODE HERE!

tableData.forEach((ufodata) => {
    var row = tbody.append("tr");
    Object.entries(ufodata).forEach(([key, value]) => {
        console.log(ufodata)
        var cell = row.append("td");
        cell.text(value);
    });
});

// This function will be called when user click the button and it triggers filters and bring back the result as needed.

function datetable() {
    var user_dt = d3.selectAll("#datetime").property("value");
    //console.log(tableData);
    var filterDate = tableData.filter(obj => obj.datetime == user_dt);
 tbody.html("");


 filterDate.forEach((ufodata) => {
    var row = tbody.append("tr");
    Object.entries(ufodata).forEach(([key, value]) => {
        console.log(ufodata);
        var cell = row.append("td");
        cell.text(value);
    });
});
}
// Button click event.

d3.selectAll("#filter-btn").on("click",datetable);

//console.log(datetable)