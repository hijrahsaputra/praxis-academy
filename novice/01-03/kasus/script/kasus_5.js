function celsiusToFahrenheit(celsius) {
    var celsiusInF = (celsius*9)/5 + 32;
    document.write(celsius + '°C => ' + celsiusInF + '°F'+"<br/>");
  }
  
  function fahrenheitToCelsius(fahrenheit) {
    var fahrenheitInC = ((fahrenheit - 32)*5)/9;
    document.write(fahrenheit + '°F => ' + fahrenheitInC + '°C'+"<br/>");
  }

  celsiusToFahrenheit(20);
  fahrenheitToCelsius(70);