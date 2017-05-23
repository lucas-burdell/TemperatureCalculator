/* Temperature Conversion Calculator by Lucas Burdell
 * Licensed under the GNU General Public License v3.0
*/


function convertTemp() {
    var temperatureToConvert = parseFloat($("#inputTemp").val());
    
    // test code
    var celsius = (temperatureToConvert - 32) * (5.0/9.0);
    var ptext = temperatureToConvert.toFixed(3).concat(" in Fahrenheit is ").concat(celsius.toFixed(3)).concat(" in celsius!");
    $("#tempData").text(ptext);
    console.log(celsius.toFixed(5));
    $("#tempModal").modal('show');
    $("#inputTemp").val('');
}

//$("#convertTempButton").click(function(){ convertTemp(); });
