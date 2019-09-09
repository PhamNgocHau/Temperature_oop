let Temperature = function (celcius, fahrenheit) {
    this.celcius = celcius;
    this.fahrenheit = fahrenheit;
    this.getCelcius = function () {
        return celcius;
    };
    this.getFahrenheit = function () {
        return fahrenheit;
    };
    this.setCelcius = function (celcius) {
        return this.celcius;
    };
    this.setFahrenheit = function (fahrenheit) {
        return this.fahrenheit;
    };
    this.CtoF = function () {
        return (9 / 5) * (this.fahrenheit + 32);
    };
    this.FtoC = function () {
        return (5 / 9) * (this.fahrenheit - 32);
    };
};
let cel = parseInt(prompt("nhap do C: "));
let fahren = parseInt(prompt('Nhap do F: '));
let temperature = new Temperature(cel, fahren);
temperature.setCelcius(cel);
temperature.setFahrenheit(fahren);
document.write("Celcuis: " + temperature.getCelcius() + '<br>');
document.write("Fahrenhheit: " + temperature.getFahrenheit() + '<br>');

document.write(' Celcuis to Fahrenheit: ' + temperature.CtoF() + '<br>');
document.write(' Fahrenheit to Celcuis: ' + temperature.FtoC());

