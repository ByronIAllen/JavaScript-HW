// from data.js
var tableData = data;

// Get references to tbody, input field, and button elements
var tbod = document.querySelector("tbody");
var dateInput = document.querySelector("#datetime");
var cityInput = document.querySelector("#city");
var stateInput = document.querySelector("#state");
var countryInput = document.querySelector("#country");
var shapeInput = document.querySelector("#shape");
var searchBtn = document.querySelector("#search");

// Event listener for search button
searchBtn.addEventListener("click", handleSearchClick);

// Function to render ufo data in tbody
function renderTable() {
    tbod.innerHTML = "";
    console.log("rendering...");

    for (var i = 0; i <= tableData.length; i++) {
        // Get current ufo info object and its fields
        var ufoInfo = tableData[i];
        var fields = Object.keys(info)

        // Add a row in tbody
        var row = tbod.insertRow(i);
        for (var j = 0; j <= fields.length; j++) {
            // Create a new cell for each field and fill the inner text with the current value of the field
            var field = fields[j];
            var cell = row.insertCell(j);
            cell.innerText = ufoInfo[field];
        }
    }
}


// Function to convert input to usable data
function handleSearchClick() {
    // Reformat user input, eliminating spaces and forcing lowercase
    var filterDate = dateInput.value.trim();
    var filterCity = cityInput.value.trim().toLowerCase();
    var filterState = stateInput.value.trim().toLowerCase();
    var filterCountry = countryInput.value.trim().toLowerCase();
    var filterShape = shapeInput.value.trim().toLowerCase();

    // Set array of ufo sightings to match filter
    tableData = data.filter(function(ufoSighting) {
        var searchDate = ufoSighting.datetime;
        var searchCity = ufoSighting.city.toLowerCase();
        var searchState = ufoSighting.state.toLowerCase();
        var searchCountry = ufoSighting.country.toLowerCase();
        var searchShape = ufoSighting.shape.toLowerCase();

        // Match search criteria with filtered criteria
        if (
            (searchDate === filterDate || filterDate === "") &&
            (searchCity === filterCity || filterCity === "") &&
            (searchState === filterState || filterState === "") &&
            (searchCountry === filterCountry || filterCountry === "") &&
            (searchShape === filterShape || filterShape === "")
        ) {
            return true;
        }
        return false;
    });

    renderTable();

    // Clear inputs
    dateInput.value = "";
    cityInput.value = "";
    stateInput.value = "";
    countryInput.value = "";
    shapeInput.value = "";
}

// Render table on page load
renderTable();