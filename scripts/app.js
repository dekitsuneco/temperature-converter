const inputCelcius = document.querySelector('#celcius > input');
const inputFahrenheit = document.querySelector('#fahrenheit > input');
const inputKelvin = document.querySelector('#kelvin > input');

function roundNumber(num) {
    return Math.round(num * 100) / 100;
}

function convertFromCelcius() {
    const celciusTemp = parseFloat(inputCelcius.value);

    const fahrenheitTemp = (celciusTemp * (9 / 5)) + 32;
    const kelvinTemp = celciusTemp + 273.15;

    inputFahrenheit.value = roundNumber(fahrenheitTemp);
    inputKelvin.value = roundNumber(kelvinTemp);
}

function convertFromFahrenheit() {
    const fahrenheitTemp = parseFloat(inputFahrenheit.value);

    const celciusTemp = (fahrenheitTemp - 32) * (5 / 9);
    const kelvinTemp = (fahrenheitTemp + 459.67) * (5 / 9);

    inputCelcius.value = roundNumber(celciusTemp);
    inputKelvin.value = roundNumber(kelvinTemp);
}

function convertFromKelvin() {
    const kelvinTemp = parseFloat(inputKelvin.value);

    const celciusTemp = kelvinTemp - 273.15;
    const fahrenheitTemp = (9 / 5) * (kelvinTemp - 273) + 32;

    inputCelcius.value = roundNumber(celciusTemp);
    inputFahrenheit.value = roundNumber(fahrenheitTemp);
}

function main() {
    inputCelcius.addEventListener('input', convertFromCelcius);
    inputFahrenheit.addEventListener('input', convertFromFahrenheit);
    inputKelvin.addEventListener('input', convertFromKelvin);
}

main();
