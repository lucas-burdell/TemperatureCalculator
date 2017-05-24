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

function toCelsius(num, type) {
    if (type == "celsius") {
        return num;
    } else if (type == "fahrenheit") {
        return (num - 32) * (5./9.);
    } else if (type == "kelvin") {
        return (num - 273.15);
    } else if (type == "rankine") {
        return (num - 491.67) * (5./9.);
    } else if (type == "delisle") {
        return 100 - (num * 2. / 3.);
    } else if (type == "newton") {
        return num * 100./33.
    } else if (type == "reaumur") {
        return (num * 5./4.);
    } else {
        return (num - 7.5) * (40./21.);
    }
}

function toFahrenheit(num) {
    return (num * 9./5.) + 32;
}

function toKelvin(num) {
    return num + 273.15;
}

function toRankine(num) {
    return (num + 273.15) * (9./5.);
}

function toDelisle(num) {
    return (100 - num) * (3./2.);
}

function toNewton(num) {
    return (num * 33./100.);
}

function toReaumur(num) {
    return (num * 4. / 5.);
}

function toRomer(num) {
    return num * 21./40. + 7.5;
}

function convertTemp() {
    var temperatureToConvert = parseFloat($("#inputTemp").val());
    var tempType = $("#tempSelect").val();
    var celsius = toCelsius(temperatureToConvert, tempType);
    var fahrenheit = formatTemp(toFahrenheit(celsius), 6);
    var kelvin = formatTemp(toKelvin(celsius), 6);
    var rankine = formatTemp(toRankine(celsius), 6);
    var delisle = formatTemp(toDelisle(celsius), 6);
    var newton = formatTemp(toNewton(celsius), 6);
    var reaumur = formatTemp(toReaumur(celsius), 6);
    var romer = formatTemp(toRomer(celsius), 6);
    celsius = formatTemp(celsius, 6);
    
    $("#fahrenheit").text(fahrenheit);
    $("#celsius").text(celsius);
    $("#kelvin").text(kelvin);
    $("#rankine").text(rankine);
    $("#delisle").text(delisle);
    $("#newton").text(newton);
    $("#reaumur").text(reaumur);
    $("#romer").text(romer);
    $("#tempData").text("Your input: " + (formatTemp(temperatureToConvert, 6)) + $("#tempSelect").find(':selected').text());
    $("#inputTemp").val('');
    $("#tempModal").modal('show');
    /*
     *
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
    */
}
