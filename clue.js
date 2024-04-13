window.onload = function() {
    // Get all tables
    var tables = document.getElementsByTagName("table");

    for (var i = 0; i < tables.length; i++) {
        // Add click event to each cell
        for (var j = 0; j < tables[i].rows.length; j++) {
            tables[i].rows[j].cells[0].onclick = function () {
                changeCellColor(this);
            };
        }
    }
}

function changeCellColor(cell) {
    // Cycle through colors
    var colors = ["", "color1", "color2", "color3", "color4", "color5", "color6", "color7"];
    var currentColor = cell.className;
    var index = colors.indexOf(currentColor);

    if (index == -1 || index == colors.length - 1) {
        cell.className = colors[1];
    } else {
        cell.className = colors[index + 1];
    }
}
