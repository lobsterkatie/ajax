"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    $.get("/fortune", displayFortune);
}

$('#get-fortune-button').on('click', showFortune);

function displayFortune(fortune) {
    $('#fortune-text').html(fortune);
}



// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    var url = "/weather.json?zipcode=" + $("#zipcode-field").val();

    // TODO: request weather with that URL and show the forecast in #weather-info
    $.get(url, displayForecast);
}

function displayForecast(results) {
    var forecast = results["forecast"];
    alert(forecast);
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    var melonType = $("#melon-type-field").val();
    var qty = $("#qty-field").val();
    var formInputs = {"melon_type": melonType, "qty": qty};

    $.post("/order-melons.json", formInputs, displayOrderMessage);

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);

function displayOrderMessage(results) {
    var code = results['code'];
    var message = results['msg'];

    //in case the previous submission had an error, take that styling off
    $("#order-status").removeClass("order-error");

    //if the request triggered an error, style the message appropirately
    if (code === "ERROR") {
        $('#order-status').addClass("order-error");
    }
    $('#order-status').html(code + " : " + message);

}