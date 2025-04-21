const me  = document.getElementById("me");
me.textContent = "<Abihu></Code>"


function convertCelsius() {
    const celsius = parseFloat(document.getElementById("celsiusInput").value);
    if (isNaN(celsius)) {
      document.getElementById("celsiusResult").textContent = "Please enter a valid number.";
      return;
    }
    const fahrenheit = (celsius * 9/5) + 32;
    const cresult = document.getElementById("celsiusResult")
    cresult.style.backgroundColor = "blue";
   cresult.style.color = " white";
   cresult.style.padding = "10px";
    cresult.textContent = `${celsius}°C = ${fahrenheit.toFixed(2)}°F`;
  }

  function convertFahrenheit() {
    const fahrenheit = parseFloat(document.getElementById("fahrenheitInput").value);
    if (isNaN(fahrenheit)) {
      document.getElementById("fahrenheitResult").textContent = "Please enter a valid number.";
      return;
    }
    const celsius = (fahrenheit - 32) * 5/9;
   const fresult = document.getElementById("fahrenheitResult")
   fresult.style.backgroundColor = "green";
   fresult.style.color = " white";
   fresult.style.padding = "10px";
   fresult.textContent = `${fahrenheit}°F = ${celsius.toFixed(2)}°C`;
  }