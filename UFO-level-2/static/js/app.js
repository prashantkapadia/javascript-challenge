// from data.js
var tableData = data;
var tbody = d3.select("tbody");
// YOUR CODE HERE!

// Loading initially all data for user to navigate through.

    tableData.forEach((ufodata) => {
        var row = tbody.append("tr");
        Object.entries(ufodata).forEach(([key, value]) => {
        //    console.log(ufodata)
            var cell = row.append("td");
            cell.text(value);
        });
    });
    

// perform Search function smartly to identify if user entered date or string.

function smartsearch() {
    // Taking user entry 
    var user_entry = d3.selectAll("#smart-search").property("value");
    // Checking to see if user entered data or string.
    // include() function will retrun true or false if it finds / for the date format.
    var n = user_entry.includes("/");
    
    if (n == true) {
        var smartdata = tableData.filter(obj => obj.datetime == user_entry);
        tbody.html("");  
        smartdata.forEach((ufodata) => {
            var row = tbody.append("tr");
            Object.entries(ufodata).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);

            });
        });
// if search entry has string then below code will search as city   
    } else {
        var smartdata = tableData.filter(obj => obj.city == user_entry);
        tbody.html("");  
        smartdata.forEach((ufodata) => {
            var row = tbody.append("tr");
            Object.entries(ufodata).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
                

            });
        });


    }
}
// Calling function on click event
d3.selectAll("#filter-btn").on("click",smartsearch);  
