/* Temperature Conversion Calculator by Lucas Burdell
 * Licensed under the GNU General Public License v3.0
*/

$.getScript("assets/js/sprintf.min.js");

function formatTemp(num, decimals) {
    var pattern = /([0-9]+\.*[1-9]*)([0]*)/;
    var formatted = sprintf(("%.").concat(decimals).concat("f"), num);
    var matches = pattern.exec(formatted);
    return matches[1];
}

function convertTemp() {
    var temperatureToConvert = parseFloat($("#inputTemp").val());
    
    // test code
    var celsius = (temperatureToConvert - 32) * (5.0/9.0);
    // var ptext = temperatureToConvert.toFixed(3).concat(" in Fahrenheit is ").concat(celsius.toFixed(3)).concat(" in celsius!");
    // var ptext = sprintf("%.6f in Fahrenheit is %.6f in celsius!", temperatureToConvert, celsius);
    temperatureToConvert = formatTemp(temperatureToConvert, 6);
    celsius = formatTemp(celsius, 6);
    $("#celsius").text(celsius);
    //$("#tempData").text(ptext);
    console.log(celsius);
    $("#tempModal").modal('show');
    $("#inputTemp").val('');
}

//$("#convertTempButton").click(function(){ convertTemp(); });
