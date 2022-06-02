function create_table() {
    var body = document.getElementsByTagName("body")[0];
    var customTable = document.createElement("table");
    var tableBody = document.createElement("tbody");
    var userRowInput = Number(document.getElementById("rowInput").value);
    var userColInput = Number(document.getElementById("colInput").value);

    if (userColInput == 0 && userRowInput == 0) {
        for (var i = 1; i <= 15; i++) {
            var row = document.createElement("tr");

            for (var j = 1; j <= 15; j++) {
                var cell = document.createElement("td");
                var cellText = document.createTextNode(`row ${i}, column ${j}`);
                cell.appendChild(cellText);
                row.appendChild(cell);
            }

            tableBody.appendChild(row);
        }
        customTable.appendChild(tableBody);
        body.appendChild(customTable);
        customTable.setAttribute("border", "2")
        customTable.setAttribute("class", "centeredContent")
        
    }

    else {
        for (var i = 1; i <= userRowInput; i++) {
            var row = document.createElement("tr");

            for (var j = 1; j <= userColInput; j++) {
                var cell = document.createElement("td");
                var cellText = document.createTextNode(`row ${i}, column ${j}`);
                cell.appendChild(cellText);
                row.appendChild(cell);
            }

            tableBody.appendChild(row);
        }
        customTable.appendChild(tableBody);
        body.appendChild(customTable);
        customTable.setAttribute("border", "2")
        customTable.setAttribute("class", "centeredContent")
    }
}