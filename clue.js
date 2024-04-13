window.onload = function() {
    // Get all tables
    var tables = document.getElementsByTagName("table");

    for (var i = 0; i < tables.length; i++) {
        // Add click event to each cell
        for (var j = 0; j < tables[i].rows.length; j++) {
            tables[i].rows[j].cells[0].onclick = function () {
                markCell(this);
            };
        }
    }
}

function markCell(cell) {
    // Toggle cell color
    if (cell.style.backgroundColor == "") {
        cell.style.backgroundColor = "#90EE90";  // LightGreen
    } else {
        cell.style.backgroundColor = "";
    }
}
